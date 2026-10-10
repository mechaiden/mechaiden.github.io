import CRTWarp from "./components/CRTWarp";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <div style={{ width: "100%", height: "100dvh", position: "relative" }}>
        <CRTWarp
          color="#10B981"
          backgroundColor="#e3cdff"
          speed={0.3}
          curvature={0.28}
          scanlineStrength={0.25}
          scanlineFrequency={405}
          waveAmplitude={0.77}
          waveFrequency={6}
          bloom={1.5}
          bloomRadius={1.5}
          noise={0.095}
          vignette={0}
          brightness={1.25}
          pixelation={1}
          rgbShift={0.015}
          mouseReact
          mouseStrength={0.5}
          dpr={1}
          fps={24}
        />
      </div>
    </div>
  );
}
