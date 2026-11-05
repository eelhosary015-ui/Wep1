import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Play, SkipForward } from 'lucide-react';
import { useI18n } from '../i18n/LanguageContext';

type IntroPhase = 'video' | 'welcome' | 'exit';

interface IntroExperienceProps {
  onFinish: () => void;
}

const INTRO_VIDEO_SD = `${import.meta.env.BASE_URL}intro/remo-pro-intro.mp4`;
const INTRO_VIDEO_HD = `${import.meta.env.BASE_URL}intro/remo-pro-intro-hd.mp4`;

function formatTime(seconds: number): string {
  const safe = Number.isFinite(seconds) && seconds > 0 ? Math.floor(seconds) : 0;
  const minutes = Math.floor(safe / 60);
  const rest = safe % 60;
  return `${String(minutes).padStart(2, '0')}:${String(rest).padStart(2, '0')}`;
}

/**
 * Full-screen cinematic welcome film shown before the landing page.
 * The film covers the whole viewport, then a short brand card appears
 * and the overlay opens like a curtain to reveal the real site underneath.
 */
export const IntroExperience: React.FC<IntroExperienceProps> = ({ onFinish }) => {
  const { t, lang } = useI18n();
  const videoRef = useRef<HTMLVideoElement | null>(null);

  /* Phones get the light file, larger screens the 1080p master. */
  const [isCompact] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(max-width: 639px)').matches;
  });
  const videoSrc = isCompact ? INTRO_VIDEO_SD : INTRO_VIDEO_HD;

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
      className={`intro-overlay fixed inset-0 z-[120] overflow-hidden bg-black ${phase === 'exit' ? 'intro-exit' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label={t.intro.welcome}
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
    >
      {/* Full-bleed film */}
      <div
        className={`absolute inset-0 transition-transform duration-[1400ms] ease-out ${
          phase === 'video' ? 'scale-100' : 'scale-[1.06]'
        }`}
      >
        {/* Ambient fill for portrait phones: the film itself, blurred, so the screen stays full */}
        {isCompact && (
          <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
            <video
              src={videoSrc}
              className="h-full w-full scale-125 object-cover opacity-70 blur-3xl saturate-150"
              autoPlay
              muted
              playsInline
              loop
              tabIndex={-1}
              preload="auto"
            />
            <div className="absolute inset-0 bg-[#04060c]/45" />
          </div>
        )}

        <div className="absolute inset-0 flex items-center justify-center sm:block">
          <video
            ref={videoRef}
            src={videoSrc}
            className="intro-film relative h-[76vh] w-full bg-transparent object-cover object-center sm:absolute sm:inset-0 sm:h-full sm:bg-black"
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

        {/* Cinematic grading: vignette, top/bottom scrims and fine grain */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,transparent_30%,rgba(2,6,23,0.5)_78%,rgba(2,6,23,0.82)_100%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/65 via-black/20 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black/90 via-black/45 to-transparent" />
        <div className="intro-grain pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay" aria-hidden="true" />
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
        <div className="px-5 pb-4 sm:px-10 sm:pb-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="flex flex-col gap-1">
              <span className="hidden text-[10px] font-semibold uppercase tracking-[0.38em] text-white/40 sm:block">
                {t.intro.brandLine}
              </span>
              <span className="text-xs font-semibold tracking-[0.28em] text-white/75">REMO PRO</span>
            </div>

            <div className="flex items-center gap-4 sm:gap-6">
              <span className="font-mono text-[11px] tracking-[0.18em] text-white/55">
                {formatTime(elapsed)} <span className="text-white/25">/</span> {formatTime(duration || 10)}
              </span>

              <button
                type="button"
                onClick={beginWelcome}
                className="group flex items-center gap-2 rounded-full border border-white/20 bg-black/25 px-4 py-2 text-xs font-semibold text-white/85 backdrop-blur-md transition-all duration-200 hover:border-white/45 hover:bg-white/10 hover:text-white"
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
