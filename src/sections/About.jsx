import styled from "styled-components";
import AboutCard from "../components/AboutCard.jsx";
import Globe from "react-globe.gl";

const About = () => {
  return (
    <AboutContainer>
      <AboutCard
        title={"Hi, I'm Lui"}
        body={
          "With 4 years of experience, I have honed my skills in frontend and backend development, with a focus on MERN/SERN tech stacks."
        }
        img={"/assets/grid1.png"}
      />
      <AboutCard
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
          "I'm based in England, UK (GMT+0). I am open to remote work and can adapt to different time zones as needed."
        }
        globe={
          <Globe
            // height={100%}
            // width={100%}
            backgroundColor="rgba(0, 0, 0, 0)"
            backgroundImageOpacity={0.5}
            showAtmosphere
            showGraticules
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
          />
        }
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
      />
    </AboutContainer>
  );
};

export default About;

const AboutContainer = styled.section`
  border: 1px solid #f30c0c;
  display: grid;
  gap: 1.5rem;
  min-height: 100vh;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 5rem 2.5rem;

  // .globe-wrapper {
  //   width: 100%;
  // }

  // .globe-wrapper canvas {
  //   // max-width: 100% !important;
  //   // max-height: 100% !important;
  // }

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 2fr 1fr 1fr 1fr;
    max-height: 80vh;
    .contact-card {
      grid-row: span 2;
      // background-color: green;
    }
    .about-card {
      grid-column: span 2;
      grid-row: span 3;
      // background-color: blue;
    }
    .email-card {
      grid-column: 3 / 4;
    }
    .email-card {
      grid-row: span 2;
    }
  }
`;
