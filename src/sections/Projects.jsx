import styled from "styled-components";
import { myProjects } from "../constants/index.js";
import { useState } from "react";

const Projects = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedProject = myProjects[selectedIndex];

  const goToPrevious = () => {
    setSelectedIndex((prev) => (prev === 0 ? myProjects.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setSelectedIndex((prev) => (prev + 1) % myProjects.length);
  };

  return (
    <ProjectsContainer>
      <p className="head-text">My Selected Work</p>
      <div className="projects">
        <div className="info">
          <img className="spotlight" src={selectedProject.spotlight} alt="background-image" />
          <img className="logo" src={selectedProject.logo} alt="project-logo" />
          <div className="content">
            <p className="title">{selectedProject.title}</p>
            <p>{selectedProject.desc}</p>
            <p>{selectedProject.subdesc}</p>
          </div>
          <div className="tags-and-link">
            <div>
              {selectedProject.tags.map((tag) => (
                <div key={tag.id}>
                  <img src={tag.path} alt={tag.name} />
                </div>
              ))}
            </div>
            <a href={selectedProject.href} target="_blank" rel="noopener noreferrer">
              <p>
                Check Live Site <img src="/assets/arrow-up.png" alt="arrow-icon" />
              </p>
            </a>
          </div>
          <div className="selection">
            <button>
              <img onClick={goToPrevious} src="/assets/left-arrow.png" alt="left-arrow-icon" />
            </button>
            <button>
              <img onClick={goToNext} src="/assets/right-arrow.png" alt="right-arrow-icon" />
            </button>
          </div>
        </div>
        <div className="display"></div>
      </div>
    </ProjectsContainer>
  );
};

export default Projects;

const ProjectsContainer = styled.section`
  .projects {
    display: flex;
    gap: 1.5rem;
    justify-content: space-between;
    padding: 40px;
    margin-bottom: 80px;
  }

  .head-text {
    font-size: 2.5rem;
    font-weight: 600;
    color: #a2a2a2ff;
    padding: 0 40px;
  }

  .info,
  .display {
    flex: 1 1 50%;
  }

  .info {
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 40px;
    color: #a2a2a2ff;
    gap: 20px;
    line-height: 1.5rem;
  }

  .spotlight {
    height: 24rem;
    position: absolute;
    top: 0;
    right: 0;
  }

  .logo {
    max-width: 65px;
    max-height: 65px;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    margin: 20px 0;
  }

  .title {
    font-size: var(--24px);
    font-weight: 600;
    color: white;
  }

  .tags-and-link {
    display: flex;
    justify-content: space-between;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.75rem;

      div {
        width: 2.5rem;
        height: 2.5rem;
        background-color: #f5f5f51a;
        border-radius: 0.5rem;

        img {
          width: 60%;
          height: 60%;
          object-fit: contain;
        }
      }
    }

    a {
      display: flex;
      text-decoration: none;
      align-items: center;
      color: #a2a2a2ff;
      cursor: pointer;

      img {
        max-width: 12px;
      }
    }
  }

  .selection {
    display: flex;
    justify-content: space-between;
    margin-top: 23px;

    button {
      height: 2.5rem;
      width: 2.5rem;
      cursor: pointer;
      border-radius: 9999px;
      padding: 0.75rem;
      transition-property: all;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 150ms;
      border: none;
      background-color: transparent;
      background-image: linear-gradient(
        to right,
        rgba(255, 255, 255, 0.1) 10%,
        rgba(255, 255, 255, 0.000025) 50%,
        rgba(255, 255, 255, 0.000025) 50%,
        rgba(255, 255, 255, 0.025) 100%
      );
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    button img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      display: block;
    }

    button:active {
      transform: translateY(0) scale(0.9);
    }

    button:focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.06);
    }
  }

  .display {
    border: 1px solid #1c1c21;
    background-color: #0e0e10;
  }
`;
