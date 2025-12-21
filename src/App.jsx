import Hero from "./sections/Hero.jsx";
import styled from "styled-components";
import About from "./sections/About.jsx";
import Projects from "./sections/Projects.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Experience from "./sections/Experience.jsx";

const App = () => {
  return (
    <Main>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </Main>
  );
};

const Main = styled.main`
  display: flex;
  flex-direction: column;
`;

export default App;
