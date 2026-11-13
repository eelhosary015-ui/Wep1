import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Play, SkipForward } from 'lucide-react';
import { useI18n } from '../i18n/LanguageContext';
import { computePortraitCamera } from '../utils/introCamera';

type IntroPhase = 'video' | 'welcome' | 'exit';

interface IntroExperienceProps {
  onFinish: () => void;
}

const INTRO_VIDEO_HD = `${import.meta.env.BASE_URL}intro/remo-pro-intro-main.mp4`;

function formatTime(seconds: number): string {
  const safe = Number.isFinite(seconds) && seconds > 0 ? Math.floor(seconds) : 0;
  const minutes = Math.floor(safe / 60);
  const rest = safe % 60;
  return `${String(minutes).padStart(2, '0')}:${String(rest).padStart(2, '0')}`;
}

/**
 * Full-screen cinematic welcome film shown before the landing page.
 * The film adapts cleanly between portrait mobile screens (showing the full 16:9 frame
 * with zero horizontal cropping) and landscape/desktop screens (full-bleed playback),
 * then displays a short brand card and opens like a curtain to reveal the site.
 */
export const IntroExperience: React.FC<IntroExperienceProps> = ({ onFinish }) => {
  const { t, lang } = useI18n();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const frameWrapperRef = useRef<HTMLDivElement | null>(null);
  const ambientCanvasRef = useRef<HTMLCanvasElement | null>(null);

  /* Use the exact high-definition intro video without any quality reduction */
  const videoSrc = INTRO_VIDEO_HD;

  const [phase, setPhase] = useState<IntroPhase>('video');
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [videoReady, setVideoReady] = useState(false);
  const [needsPlay, setNeedsPlay] = useState(false);

  const beginWelcome = useCallback(() => {
    setPhase((current) => (current === 'video' ? 'welcome' : current));
  }, []);

  /* Lock the page behind the film and always start from the top. */
  useEffect(() => {
    const { body, documentElement } = document;
    const previousBodyOverflow = body.style.overflow;
    const previousHtmlOverflow = documentElement.style.overflow;

    body.style.overflow = 'hidden';
    documentElement.style.overflow = 'hidden';
    window.scrollTo(0, 0);

    return () => {
      body.style.overflow = previousBodyOverflow;
      documentElement.style.overflow = previousHtmlOverflow;
    };
  }, []);

  /* Autoplay: muted playback is allowed by every modern browser. */
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    /* Set muting imperatively as well: some embedded browsers only honour it this way. */
    video.muted = true;
    video.defaultMuted = true;

    const attempt = video.play();
    if (attempt && typeof attempt.catch === 'function') {
      attempt.catch(() => setNeedsPlay(true));
    }
  }, []);

  /* Freeze the film once the brand card takes over. */
  useEffect(() => {
    const video = videoRef.current;
    if (video && phase !== 'video') video.pause();
  }, [phase]);

  /* Full-screen portrait camera pan + ambient canvas extension synced to the single video element. */
  useEffect(() => {
    if (phase !== 'video') return undefined;

    const video = videoRef.current;
    const frameWrapper = frameWrapperRef.current;
    const canvas = ambientCanvasRef.current;
    if (!video || !frameWrapper || !canvas) return undefined;

    const ctx = canvas.getContext('2d', { alpha: false });
    const portraitQuery = window.matchMedia('(orientation: portrait)');

    let rafId = 0;
    let lastAmbientDraw = 0;

    const resetPortraitCamera = () => {
      video.style.objectPosition = '';
      frameWrapper.style.height = '';
      frameWrapper.style.removeProperty('--intro-feather');
    };

    const tick = (now: number) => {
      rafId = window.requestAnimationFrame(tick);
      if (video.readyState < 2 || video.videoWidth === 0 || video.videoHeight === 0) return;

      const isPortrait = portraitQuery.matches;
      let shouldDrawAmbient = !isPortrait;

      if (isPortrait && Number.isFinite(video.duration) && video.duration > 0) {
        const { panX, heightPct, featherPct } = computePortraitCamera(video.currentTime / video.duration);
        video.style.objectPosition = `${panX.toFixed(2)}% 50%`;
        frameWrapper.style.height = `${heightPct.toFixed(2)}%`;
        frameWrapper.style.setProperty('--intro-feather', `${featherPct.toFixed(2)}%`);
        shouldDrawAmbient = featherPct > 0.05;
      } else {
        resetPortraitCamera();
      }

      if (!ctx || !shouldDrawAmbient || now - lastAmbientDraw < 32) return;
      lastAmbientDraw = now;

      const cw = canvas.width;
      const ch = canvas.height;
      const vw = video.videoWidth;
      const vh = video.videoHeight;

      ctx.fillStyle = '#030712';
      ctx.fillRect(0, 0, cw, ch);

      const coverScale = Math.max(cw / vw, ch / vh);
      const dw = vw * coverScale;
      const dh = vh * coverScale;
      ctx.globalAlpha = 0.5;
      ctx.drawImage(video, (cw - dw) / 2, (ch - dh) / 2, dw, dh);

      const sliceH = Math.floor(vh * 0.26);
      const halfCh = Math.ceil(ch * 0.5);
      ctx.globalAlpha = 0.9;

      ctx.save();
      ctx.translate(0, halfCh);
      ctx.scale(1, -1);
      ctx.drawImage(video, 0, 0, vw, sliceH, 0, 0, cw, halfCh);
      ctx.restore();

      ctx.save();
      ctx.translate(0, ch);
      ctx.scale(1, -1);
      ctx.drawImage(video, 0, vh - sliceH, vw, sliceH, 0, 0, cw, halfCh);
      ctx.restore();

      ctx.globalAlpha = 1;
    };

    const handleOrientationChange = () => {
      if (!portraitQuery.matches) resetPortraitCamera();
    };

    portraitQuery.addEventListener('change', handleOrientationChange);
    rafId = window.requestAnimationFrame(tick);

    return () => {
      portraitQuery.removeEventListener('change', handleOrientationChange);
      window.cancelAnimationFrame(rafId);
      resetPortraitCamera();
    };
  }, [phase]);

  /* Advance the sequence after the brand card. */
  useEffect(() => {
    if (phase === 'welcome') {
      const timer = window.setTimeout(() => setPhase('exit'), 2000);
      return () => window.clearTimeout(timer);
    }
    if (phase === 'exit') {
      const timer = window.setTimeout(onFinish, 960);
      return () => window.clearTimeout(timer);
    }
    return undefined;
  }, [phase, onFinish]);

  /* Escape skips the film, like any respectable intro. */
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') beginWelcome();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [beginWelcome]);

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video || !Number.isFinite(video.duration) || video.duration === 0) return;
    setProgress(Math.min(video.currentTime / video.duration, 1));
  };

  const handlePlay = () => {
    setNeedsPlay(false);
    const video = videoRef.current;
    if (!video) return;
    const attempt = video.play();
    if (attempt && typeof attempt.catch === 'function') {
      attempt.catch(() => setNeedsPlay(true));
    }
  };

  const elapsed = progress * duration;

  return (
    <div
      className={`intro-overlay fixed inset-0 z-[120] overflow-hidden bg-[#030712] ${phase === 'exit' ? 'intro-exit' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label={t.intro.welcome}
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
    >
      {/* Film stage: true edge-to-edge full screen with live ambient extension + 100% uncropped sharp frame */}
      <div
        className={`absolute inset-0 transition-transform duration-[1400ms] ease-out ${
          phase === 'video' ? 'scale-100' : 'scale-[1.06]'
        }`}
      >
        {/* Live ambient video continuation filling 100% of mobile portrait/landscape screens */}
        <canvas
          ref={ambientCanvasRef}
          width={216}
          height={384}
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full scale-110 object-cover brightness-[0.44] saturate-125 blur-2xl lg:hidden"
        />

        {/* Subtle depth gradient on mobile so ambient glow frames the sharp center naturally */}
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,transparent_24%,rgba(2,6,23,0.52)_76%,rgba(2,6,23,0.88)_100%)] lg:hidden"
          aria-hidden="true"
        />

        {/* Main video layer: true 100% full-screen edge-to-edge on portrait mobile with smooth pan, full-bleed on desktop */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            ref={frameWrapperRef}
            className="intro-film-seamless relative h-full w-full overflow-hidden landscape:h-full landscape:w-full"
          >
            <video
              ref={videoRef}
              src={videoSrc}
              className="intro-film h-full w-full object-cover landscape:object-contain lg:landscape:object-cover lg:landscape:object-center"
              autoPlay
              muted
              playsInline
              preload="auto"
              onLoadedMetadata={(event) => setDuration(event.currentTarget.duration || 0)}
              onCanPlay={() => setVideoReady(true)}
              onPlaying={() => setVideoReady(true)}
              onTimeUpdate={handleTimeUpdate}
              onEnded={beginWelcome}
              onError={beginWelcome}
            />
          </div>
        </div>

        {/* Bottom & top soft scrims for control readability without darkening the video center */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#020617]/55 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#020617]/80 via-[#020617]/30 to-transparent" />
      </div>

      {/* Loading curtain */}
      {!videoReady && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-6 bg-[#04060c]">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[60vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-[130px]" />
          <div className="relative flex items-end gap-1.5">
            {[0, 1, 2, 3, 4].map((bar) => (
              <span
                key={bar}
                className="intro-equalizer w-1.5 rounded-sm bg-blue-400/80"
                style={{ animationDelay: `${bar * 0.12}s` }}
              />
            ))}
          </div>
          <div className="relative flex flex-col items-center gap-2">
            <span className="text-sm font-bold tracking-[0.42em] text-white/85">REMO PRO</span>
            <span className="text-xs font-medium tracking-wide text-white/45">{t.intro.loading}</span>
          </div>
        </div>
      )}

      {/* Autoplay blocked fallback */}
      {needsPlay && videoReady && (
        <button
          type="button"
          onClick={handlePlay}
          className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 bg-black/50 backdrop-blur-sm transition-colors hover:bg-black/35"
        >
          <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-slate-900 shadow-[0_20px_60px_-10px_rgba(255,255,255,0.5)] transition-transform duration-200 hover:scale-105">
            <Play className="h-7 w-7 translate-x-0.5" fill="currentColor" />
          </span>
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
            {t.intro.play}
          </span>
        </button>
      )}

      {/* Bottom film controls, flush progress line */}
      <div
        className={`absolute inset-x-0 bottom-0 z-20 transition-opacity duration-500 ${
          phase === 'video' ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="px-5 pb-4 sm:px-8 sm:pb-4 lg:px-10 lg:pb-6">
          <div className="flex items-end justify-between gap-4">
            <div className="hidden flex-col gap-1 lg:flex">
              <span className="text-[10px] font-semibold uppercase tracking-[0.38em] text-white/40">
                {t.intro.brandLine}
              </span>
              <span className="text-xs font-semibold tracking-[0.28em] text-white/75">REMO PRO</span>
            </div>

            <div className="flex w-full items-center justify-between gap-4 lg:w-auto lg:justify-end lg:gap-6">
              <span
                dir="ltr"
                className="font-mono text-[11px] tabular-nums tracking-[0.18em] text-white/65"
              >
                {formatTime(elapsed)} <span className="text-white/30">/</span> {formatTime(duration || 10)}
              </span>

              <button
                type="button"
                onClick={beginWelcome}
                className="group flex items-center gap-2 rounded-full border border-white/20 bg-black/35 px-4 py-2 text-xs font-semibold text-white/90 backdrop-blur-md transition-all duration-200 hover:border-white/45 hover:bg-white/10 hover:text-white"
              >
                <span>{t.intro.skip}</span>
                <SkipForward className="h-3.5 w-3.5 opacity-70 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Progress */}
        <div className="h-[2px] w-full bg-white/15">
          <div
            className="h-full bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-300 transition-[width] duration-200 ease-linear"
            style={{ width: `${Math.max(progress * 100, 0.8)}%` }}
          />
        </div>
      </div>

      {/* Brand card / welcome layer */}
      <div
        className={`absolute inset-0 z-30 flex items-center justify-center overflow-hidden bg-[#04060c]/85 px-6 backdrop-blur-2xl transition-all duration-700 ${
          phase === 'video' ? 'pointer-events-none opacity-0' : 'opacity-100'
        }`}
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[70vh] w-[70vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/25 blur-[140px]" />
        </div>

        <div className="relative flex max-w-3xl flex-col items-center text-center">
          <div className="relative mb-9">
            <span className="absolute -inset-8 rounded-[40px] bg-blue-500/20 blur-2xl" aria-hidden="true" />
            <div className="relative flex h-24 w-24 items-center justify-center rounded-[26px] border border-white/15 bg-white/[0.06] text-4xl font-black text-white shadow-[0_25px_70px_-20px_rgba(59,130,246,0.9)] backdrop-blur">
              R
              <span className="intro-ring absolute -inset-2 rounded-[32px] border border-blue-300/40" aria-hidden="true" />
            </div>
          </div>

          <span className="mb-5 text-[10px] font-semibold uppercase tracking-[0.5em] text-blue-300/70">
            REMO PRO
          </span>

          <h1 className="intro-line text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
            {t.intro.welcome}
          </h1>

          <div className="mt-6 h-px w-28 bg-gradient-to-r from-transparent via-blue-400/70 to-transparent" aria-hidden="true" />

          <p className="mt-6 max-w-xl text-sm font-light leading-relaxed text-slate-300 sm:text-base">
            {t.intro.tagline}
          </p>

          <div className="mt-10 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.3em] text-white/45">
            <span className="intro-dot h-1.5 w-1.5 rounded-full bg-blue-400" />
            <span>{t.intro.entering}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
