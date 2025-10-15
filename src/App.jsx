import Hero from "./sections/Hero.jsx";
import styled from "styled-components";
import About from "./sections/About.jsx";
import Projects from "./sections/Projects.jsx";

const App = () => {
  return (
    <Main>
      <Hero />
      <About />
      <Projects />
    </Main>
  );
};

const Main = styled.main`
  display: flex;
  flex-direction: column;
`;

export default App;
