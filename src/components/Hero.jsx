import styled from "styled-components";
import { PerspectiveCamera, Stars } from "@react-three/drei";
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
import HeroCamera from "./HeroCamera.jsx";
import Header from "./partials/Header.jsx";
// import { useControls } from "leva";

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 760 });
  const isTablet = useMediaQuery({ maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <Section className="stars">
      <Header />
      <h1>
        Hi! I&apos;m Lui <span className="waving-hand">🖐️</span>
      </h1>
      <Canvas className="canvas">
        {/* <Stars /> */}
        <Suspense fallback={<CanvasLoader />}>
          <PerspectiveCamera makeDefault position={[0, 0, 20]} />
          <HeroCamera isMobile={isMobile}>
            <HackerRoom
              scale={sizes.deskScale}
              position={sizes.deskPosition}
              rotation={[0.5, Math.PI, 0]}
            />
          </HeroCamera>
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
      <ContactButton href="#contact">
        {" "}
        <button>Lets work together</button>
      </ContactButton>
    </Section>
  );
};

const Section = styled.section`
  color: white;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;

  h1 {
    font-size: var(--32px);
  }

  .waving-hand {
    animation-name: wave-animation;
    animation-duration: 2.5s;
    animation-iteration-count: infinite;
    transform-origin: 70% 70%;
    display: inline-block;
  }
`;

const ContactButton = styled.a`
  position: absolute;
  right: center;
  bottom: 3rem;

  button {
    background-color: #1b1b1b;
    color: white;
    border: none;
    font-size: var(--32px);
    padding: 1rem 2rem;
    border-radius: 1rem;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }

  button:hover {
    background-color: white;
    color: #1b1b1b;
  }

  @media (max-width: 440px) {
    bottom: 1rem;
    scale: 0.7;
  }

  @media (min-width: 441px) and (max-width: 760px) {
    bottom: 2rem;
    scale: 0.8;
  }

  @media (min-width: 761px) and (max-width: 1024px) {
    bottom: 3rem;
  }
`;

export default Hero;
