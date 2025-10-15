import styled from "styled-components";
import AboutCard from "../components/AboutCard.jsx";
import Globe from "react-globe.gl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <AboutContainer>
      <AboutCard
        className={"intro-card"}
        title={"Hi, I'm Lui"}
        body={
          "With 4 years of experience, I have honed my skills in frontend and backend development, with a focus on MERN/SERN tech stacks."
        }
        img={"/assets/grid1.png"}
      />
      <AboutCard
        className="tech-card"
        title={"Tech Stack"}
        body={
          "I'm experienced with a variety of languages, frameworks, and tools, with a focus on MERN/SERN tech stacks."
        }
        img={"/assets/grid2.png"}
      />
      <AboutCard
        className="contact-card"
        title={"Location and time zone"}
        body={
          "I'm based in England, UK (GMT+1). I am open to remote work and can adapt to different time zones as needed."
        }
        globe={
          <Globe
            backgroundColor="rgba(0, 0, 0, 0)"
            backgroundImageOpacity={0.5}
            showAtmosphere
            showGraticules
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
          />
        }
        button={"Contact Me"}
      />
      <AboutCard
        className="about-card"
        title={"My Journey"}
        body={
          "I love solving complex problems and creating efficient, scalable solutions. Programming isn't just my profession, it's my passion. I thrive on continuous learning and staying updated with the latest industry trends."
        }
        img={"/assets/grid3.png"}
      />
      <AboutCard
        className="email-card"
        title={"Contact me"}
        body={"lui.duarte1@gmail.com"}
        img={"/assets/grid4.png"}
        icon={<FontAwesomeIcon icon={faCopy} />}
        copiedIcon={<FontAwesomeIcon icon={faCheck} className="copied-icon" />}
      />
    </AboutContainer>
  );
};

export default About;

const AboutContainer = styled.section`
  display: grid;
  gap: 1.5rem;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 5rem 2.5rem;

  @media (min-width: 765px) {
    grid-template-columns: repeat(2, 1fr);

    .about-card img {
      object-fit: cover;
      height: 100%;
    }
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 3fr 1fr 1fr 1fr;
    max-height: 950px;

    .contact-card {
      grid-row: span 2;
    }

    .about-card {
      grid-column: span 2;
      grid-row: span 3;
      // background-color: blue;
    }

    .email-card {
      grid-column: 3 / 4;
      grid-row: span 2;
      text-align: center;
    }

    .email-card img,
    .intro-card img {
      object-fit: cover;
      object-position: top;
    }

    .tech-card img {
      object-fit: cover;
      width: 85%;
      object-position: center;
      margin: 0 auto;
    }
  }
`;
