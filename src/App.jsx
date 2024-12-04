import Header from "./components/partials/Header.jsx";
import Hero from "./components/Hero.jsx";
import styled from "styled-components";

const App = () => {
  return (
    <Main>
      <Header />
      <Hero />
    </Main>
  );
};

const Main = styled.main`
  display: flex;
  flex-direction: column;
`;

export default App;
