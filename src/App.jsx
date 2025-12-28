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
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </MainContainer>
  );
};

const MainContainer = styled.main`
  max-width: 1280px;
  margin: 0 auto;
`;

export default App;
