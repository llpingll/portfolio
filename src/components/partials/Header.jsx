import styled from "styled-components";
import { navLinks } from "../../constants/index.js";
import { useState, useEffect } from "react";

const NavItems = () => {
  return (
    <Navbar>
      {navLinks.map(({ id, name, href }) => (
        <li key={id}>
          {name}
          <a href={href}></a>
        </li>
      ))}
    </Navbar>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 700);

  useEffect(() => {
    const handleResize = () => {
      const isMobileView = window.innerWidth <= 700;
      setIsMobile(isMobileView);
      if (!isMobileView) setIsOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <HeaderContainer>
      <h1>Lui</h1>
      {isMobile ? (
        <>
          <button onClick={() => setIsOpen(!isOpen)}>
            <img
              src={`/assets/${isOpen ? "close" : "menu"}.svg`}
              alt="toggle"
            />
          </button>
          {isOpen && <NavItems />}
        </>
      ) : (
        <NavItems />
      )}
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  color: #c5c5c5;
  display: flex;
  justify-content: space-between;
  /* background-color: red; */
  width: 100%;
  align-items: center;
  padding: 0.5rem 1rem;
  position: relative;

  h1:hover {
    cursor: pointer;
    color: white;
  }

  button {
    background-color: transparent;
    width: 1.8rem;
    border: none;
    cursor: pointer;
  }
`;

const Navbar = styled.ul`
  display: flex;
  list-style: none;
  gap: 1rem;

  li:hover {
    cursor: pointer;
    color: white;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    position: absolute;
    top: 4.5rem;
    right: 1rem;
  }
`;

export default Header;
