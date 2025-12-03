import styled from "styled-components";
import { PerspectiveCamera, Stars } from "@react-three/drei";
import { Suspense } from "react";
import HackerRoom from "../components/HackerRoom.jsx";
import CanvasLoader from "../components/CanvasLoader.jsx";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants/index.js";
import Target from "../components/Target.jsx";
import ReactLogo from "../components/ReactLogo.jsx";
import Cube from "../components/Cube.jsx";
import Rings from "../components/Rings.jsx";
import HeroCamera from "../components/HeroCamera.jsx";
import Header from "../components/partials/Header.jsx";
// import { useControls } from "leva";

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 760 });
  const isTablet = useMediaQuery({ maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <Section className="stars">
      <Header />
      <div className="title-container">
        <h1 className="hi-text">
          Hi! I&apos;m Lui <span className="waving-hand">🖐️</span>
        </h1>
        <h1>Building Projects & Brands</h1>
      </div>

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

  & > div:first-of-type {
    text-align: center;
    padding: 2rem 0;

  .hi-text {
    font-weight: 500;
  }

  h1 {
    font-size: var(--32px);
  }

  h1:nth-of-type(2) {
    font-size: var(--48px);
    color: #a2a2a2ff;
    margin-top: 1.5rem;
  }

  .waving-hand {
    animation-name: wave-animation;
    animation-duration: 2.5s;
    animation-iteration-count: infinite;
    transform-origin: 70% 70%;
    display: inline-block;
  }

  @media (max-width: 440px) {
    scale: 0.7;
  }

  @media (min-width: 441px) and (max-width: 760px) {
    scale: 0.8;
  }

  @media (min-width: 761px) and (max-width: 1024px) {
    scale: 0.9;
  }
`;

const ContactButton = styled.a`
  position: absolute;
  right: center;
  bottom: 2rem;

  button {
    background-color: #1b1b1b;
    color: white;
    border: none;
    font-size: var(--24px);
    padding: 1rem 2rem;
    border-radius: 0.8rem;
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
    scale: 0.8;
  }

  @media (min-width: 761px) and (max-width: 1024px) {
    scale: 0.8;
  }
`;

export default Hero;
