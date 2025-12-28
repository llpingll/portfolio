import Hero from "./sections/Hero.jsx";
import styled from "styled-components";
import About from "./sections/About.jsx";
import Projects from "./sections/Projects.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Experience from "./sections/Experience.jsx";

const App = () => {
  return (
    <MainContainer>
      {/* <div></div> */}
      {/* <Hero /> */}
      {/* <About /> */}
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </MainContainer>
  );
};

const MainContainer = styled.main`
  // display: flex;
  // flex-direction: column;
  // z-index: 7;
  // min-height: 0;
  max-width: 1280px;
  margin: 0 auto;
  // height: 100px;

  & > div:first-of-type {
    height: 100vh;
    width: 100%;
    border: 1px solid red;
  }
`;

export default App;
