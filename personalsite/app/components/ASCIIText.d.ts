import type { CSSProperties, JSX } from "react";

export interface ASCIITextProps {
  text?: string;
  asciiFontSize?: number;
  charset?: string;
  colors?: string[];
  textColor?: string;
  fontFamily?: string;
  fontWeight?: number;
  textScale?: number;
  blocks?: number;
  waves?: number;
  waveSpeed?: number;
  chroma?: number;
  tilt?: number;
  hueShift?: number;
  scramble?: number;
  clickRipple?: boolean;
  intro?: boolean;
  idle?: boolean;
  interactive?: boolean;
  theme?: "dark" | "light";
  className?: string;
  style?: CSSProperties;
}

export default function ASCIIText(props: ASCIITextProps): JSX.Element;
