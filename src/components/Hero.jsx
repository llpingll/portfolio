import styled from "styled-components";
import { PerspectiveCamera } from "@react-three/drei";
import { Suspense } from "react";
import HackerRoom from "./HackerRoom.jsx";
import CanvasLoader from "./CanvasLoader.jsx";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants/index.js";
import Target from "./Target.jsx";
import ReactLogo from "./ReactLogo.jsx";
import Cube from "./Cube.jsx";
import Rings from "./Rings.jsx";
// import { useControls } from "leva";

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 760 });
  const isTablet = useMediaQuery({ maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <Section>
      <h1>
        Hi! I&apos;m Lui <span className="waving-hand">🖐️</span>
      </h1>
      <Canvas className="canvas">
        <Suspense fallback={<CanvasLoader />}>
          <PerspectiveCamera makeDefault position={[0, 0, 20]} />
          <HackerRoom
            scale={sizes.deskScale}
            position={sizes.deskPosition}
            rotation={[0.5, Math.PI, 0]}
          />
          <group>
            <Target position={sizes.targetPosition} />
            <ReactLogo position={sizes.reactLogoPosition} />
            <Cube position={sizes.cubePosition} />
            <Rings position={sizes.ringPosition} />
          </group>
          <ambientLight intensity={1} />
          <directionalLight position={[10, 10, 10]} intensity={1} />
        </Suspense>
      </Canvas>
    </Section>
  );
};

const Section = styled.section`
  color: white;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  .waving-hand {
    animation-name: wave-animation;
    animation-duration: 2.5s;
    animation-iteration-count: infinite;
    transform-origin: 70% 70%;
    display: inline-block;
  }
`;

export default Hero;
