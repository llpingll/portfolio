import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { workExperiences } from "../constants/index.js";
import { OrbitControls, SpotLight } from "@react-three/drei";
import Developer from "../components/Developer.jsx";
import { Suspense, useState } from "react";
import CanvasLoader from "../components/CanvasLoader.jsx";

const Experience = () => {
  const [animationName, setAnimationName] = useState("idle");

  return (
    <ExperienceContainer>
      <p className="head-text">My Work Experience</p>
      <div className="experience">
        <div className="canvas-container">
          <Canvas>
            <ambientLight intensity={2} />
            <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
            <directionalLight position={[10, 10, 10]} intensity={2} />
            <Suspense className="suspense" fallback={<CanvasLoader />}>
              <Developer
                className="suspense"
                position-y={-2.6}
                rotation-x={Math.PI * 0.08}
                scale={2.4}
                animationName={animationName}
              />
            </Suspense>
          </Canvas>
        </div>
        <div className="info">
          {workExperiences.map((work) => (
            <div
              className="work-item"
              key={work.id}
              onPointerOver={() => setAnimationName(work.animation.toLowerCase())}
              onClick={() => setAnimationName(work.animation.toLowerCase())}
              onPointerOut={() => setAnimationName("idle")}
            >
              <div className="graphic">
                <div className="logo">
                  <img src={work.icon} alt={work.name} />
                </div>
                <div className="bar-container">
                  <div className="bar"></div>
                </div>
              </div>
              <div className="content">
                <p className="company">{work.name}</p>
                <p className="position">
                  {work.pos} -- {work.duration}
                </p>
                <p className="description">{work.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ExperienceContainer>
  );
};

export default Experience;

const ExperienceContainer = styled.section`
  .head-text {
    font-size: 2.25rem;
    font-weight: 600;
    color: #a2a2a2ff;
    padding: 0 2.5rem;
    height: 100% !important;
    min-height: 0;

    @media (max-width: 640px) {
      font-size: 1.875rem;
      padding: 0 1.25rem;
    }
  }

  .experience {
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
    justify-content: space-between;
    padding: 2.5rem;
    margin-bottom: 2.5rem;
    color: #afb0b6;
    height: 100% !important;

    @media (max-width: 1024px) {
      flex-direction: column;
      max-width: 1024px;
    }

    @media (max-width: 640px) {
      padding: 2.5rem 1.25rem;
    }

    .canvas-container {
      border: 1px solid #1c1c21;
      display: flex;
      align-items: center;
      flex-basis: 350px;
      max-width: 350px;
      background-color: #0e0e10;
      border-radius: 0.5rem;

      @media (max-width: 1024px) {
        max-width: 1024px;
        min-height: 680px;
      }

      > div,
      > div > div,
      canvas {
        max-height: 857.333px;
        // max-height: 100%;
      }
    }

    .info {
      flex: 1 1 0;
      padding: 2.5rem 1.25rem;
      line-height: 1.5rem;
      background-color: #0e0e10;
      border-radius: 0.5rem;
      border: 1px solid #1c1c21;

      @media (max-width: 640px) {
        padding: 1.25rem 0.625rem;
      }
    }

    .work-item {
      display: flex;
      padding: 0 1.25rem;
      gap: 1.25rem;
      min-height: 192px;
      cursor: pointer;
      border-radius: 0.5rem;
      transition: all 0.3s ease-in-out;

      @media (max-width: 640px) {
        padding: 0 0.625rem;
      }
    }

    .work-item:hover {
      background-color: #1c1c21;

      .description {
        color: #e4e4e6;
      }

      .bar {
        background-color: #3a3a49;
      }
    }

    // Hide bar for last work item
    .work-item:last-child .bar {
      display: none;
    }

    .graphic {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 0.5rem 0;
    }

    .logo {
      width: 4rem;
      height: 4rem;
      border-radius: 1.5rem;
      background-color: #1a1a1a;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    img {
      height: 44px;
      width: auto;
    }

    .bar-container {
      flex-grow: 1;
      display: flex;
      justify-content: center;
      // height: 100%;
      // border: 1px solid #df1313ff;
    }

    .bar {
      flex: 1 1 100%;
      max-width: 2px;
      // height: 100%;
      margin-top: 0.8rem;
      background-color: #1c1c21;
    }

    .content {
      padding: 1.25rem;
    }

    .company {
      color: #e4e4e6;
      font-weight: 700;
    }

    .position {
      margin-bottom: 1.5rem;
      font-size: 0.9rem
    }
`;
