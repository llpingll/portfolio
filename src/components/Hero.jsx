import styled from "styled-components";
import { PerspectiveCamera } from "@react-three/drei";
import { Suspense } from "react";
import HackerRoom from "./HackerRoom.jsx";
import CanvasLoader from "./CanvasLoader.jsx";
import { Canvas } from "@react-three/fiber";

const Hero = () => {
  return (
    <Section>
      <p>
        Hi! I&apos;m Lui <span className="waving-hand">🖐️</span>
      </p>
      <Canvas className="canvas">
        <Suspense fallback={<CanvasLoader />}>
          <PerspectiveCamera makeDefault position={[0, 0, 30]} />
          <HackerRoom
            scale={0.11}
            position={[0, -5, 0]}
            rotation={[0, 110, 0]}
          />
          <ambientLight intensity={1} />
          <directionalLight position={[10, 10, 10]} intensity={0.5} />
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
  /* justify-content: center; */
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
