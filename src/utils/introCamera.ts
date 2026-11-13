export interface PortraitCameraFrame {
  /** Horizontal object-position percentage (0..100). */
  panX: number;
  /** Viewport height percentage occupied by the sharp video wrapper (62..100). */
  heightPct: number;
  /** Top/bottom edge feather percentage (0 when full-bleed 100%, 9 when pulled back for finale). */
  featherPct: number;
}

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

function lerp(from: number, to: number, t: number): number {
  return from + (to - from) * t;
}

function smooth(edge0: number, edge1: number, x: number): number {
  const t = clamp((x - edge0) / (edge1 - edge0), 0, 1);
  return t * t * (3 - 2 * t);
}

/**
 * Computes the portrait full-screen camera pan and finale pull-back for a 16:9 intro film
 * so the video stays edge-to-edge 100% full screen during the showcase while sweeping across
 * every module, then pulls back just enough at the end so the full R / ERP SYSTEM logo fits unclipped.
 */
export function computePortraitCamera(progress: number): PortraitCameraFrame {
  const u = Number.isFinite(progress) ? clamp(progress, 0, 1) : 0;

  if (u <= 0.18) {
    return { panX: 50, heightPct: 100, featherPct: 0 };
  }

  if (u <= 0.27) {
    return {
      panX: lerp(50, 4, smooth(0.18, 0.27, u)),
      heightPct: 100,
      featherPct: 0,
    };
  }

  if (u <= 0.57) {
    return {
      panX: lerp(4, 96, smooth(0.27, 0.57, u)),
      heightPct: 100,
      featherPct: 0,
    };
  }

  if (u <= 0.66) {
    return {
      panX: lerp(96, 50, smooth(0.57, 0.66, u)),
      heightPct: 100,
      featherPct: 0,
    };
  }

  if (u <= 0.74) {
    const k = smooth(0.66, 0.74, u);
    return {
      panX: 50,
      heightPct: lerp(100, 56, k),
      featherPct: lerp(0, 9, k),
    };
  }

  return { panX: 50, heightPct: 56, featherPct: 9 };
}
