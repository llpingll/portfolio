import styled from "styled-components";
import { PerspectiveCamera } from "@react-three/drei";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";

import Header from "../components/Header.jsx";
import HackerRoom from "../components/HackerRoom.jsx";
import CanvasLoader from "../components/CanvasLoader.jsx";
import Target from "../components/Target.jsx";
import ReactLogo from "../components/ReactLogo.jsx";
import Cube from "../components/Cube.jsx";
import Rings from "../components/Rings.jsx";
import HeroCamera from "../components/HeroCamera.jsx";

import { calculateSizes, breakpoints, wave } from "../constants/index";

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 760 });
  const isTablet = useMediaQuery({ maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <Section id="home">
      <Header />

      <HeroContent>
        <Title>
          Hi! I&apos;m Lui <WavingHand>🖐️</WavingHand>
        </Title>
        <Subtitle>Building Projects & Brands</Subtitle>
      </HeroContent>

      <Canvas>
        <Suspense fallback={<CanvasLoader />}>
          <PerspectiveCamera makeDefault position={[0, 0, 20]} />

          <HeroCamera isMobile={isMobile}>
            <HackerRoom
              scale={sizes.deskScale}
              position={sizes.deskPosition}
              rotation={[0.4, Math.PI, 0]}
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

      <ContactButton href="#about">About me</ContactButton>
    </Section>
  );
};

export default Hero;

const Section = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  color: white;
  position: relative;

  canvas {
    width: 100% !important;
    height: 100% !important;
  }
`;

const HeroContent = styled.div`
  margin-top: 5.5rem;
  text-align: center;
  padding: 2rem 0;
  margin-bottom: -2rem;

  @media (max-width: ${breakpoints.small}) {
    padding: 0;
    margin-bottom: -1.5rem;
  }
`;

const Title = styled.h1`
  font-weight: 500;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: calc(var(--32px) * 0.9);
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: calc(var(--32px) * 0.8);
  }

  @media (max-width: ${breakpoints.small}) {
    font-size: calc(var(--32px) * 0.63);
  }
`;

const Subtitle = styled.h1`
  font-size: var(--48px);
  color: #a2a2a2ff;
  margin-top: 1.5rem;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: calc(var(--48px) * 0.9);
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: calc(var(--48px) * 0.8);
  }

  @media (max-width: ${breakpoints.small}) {
    font-size: calc(var(--48px) * 0.64);
    margin-top: 0.75rem;
  }
`;

const WavingHand = styled.span`
  display: inline-block;
  transform-origin: 70% 70%;
  animation: ${wave} 2.5s infinite;
`;

const ContactButton = styled.a`
  position: absolute;
  bottom: 2rem;
  text-decoration: none;

  background-color: #1b1b1b;
  color: white;
  font-size: var(--24px);
  padding: 1rem 2rem;
  border-radius: 0.8rem;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: #1b1b1b;
  }

  @media (max-width: 440px) {
    bottom: 1rem;
    scale: 0.7;
  }

  @media (max-width: ${breakpoints.mobile}) {
    transform: scale(0.9);
    bottom: 1rem;
  }
`;
