import Hero from "./components/Hero.jsx";
import styled from "styled-components";
import About from "./components/About.jsx";

const App = () => {
  return (
    <Main>
      <Hero />
      <About/>
    </Main>
  );
};

const Main = styled.main`
  display: flex;
  flex-direction: column;
`;

export default App;
