import Hero from "./sections/Hero.jsx";
import styled from "styled-components";
import About from "./sections/About.jsx";

const App = () => {
  return (
    <Main>
      <Hero />
      <About />
    </Main>
  );
};

const Main = styled.main`
  display: flex;
  flex-direction: column;
`;

export default App;
