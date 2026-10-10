import type { CSSProperties, JSX } from "react";

export interface CRTWarpProps {
  color?: string;
  backgroundColor?: string;
  speed?: number;
  curvature?: number;
  scanlineStrength?: number;
  scanlineFrequency?: number;
  waveAmplitude?: number;
  waveFrequency?: number;
  bloom?: number;
  bloomRadius?: number;
  noise?: number;
  vignette?: number;
  brightness?: number;
  pixelation?: number;
  rgbShift?: number;
  mouseReact?: boolean;
  mouseStrength?: number;
  dpr?: number;
  fps?: number;
  paused?: boolean;
  className?: string;
  style?: CSSProperties;
}

export default function CRTWarp(props: CRTWarpProps): JSX.Element;
