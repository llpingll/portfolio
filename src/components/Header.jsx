import styled from "styled-components";
import { navLinks } from "../constants/index.js";
import { useState, useEffect } from "react";

const NavItems = () => {
  return (
    <Navbar>
      {navLinks.map(({ id, name, href }) => (
        <a href={href} key={id}>
          <li>{name}</li>
        </a>
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
            <img src={`/assets/${isOpen ? "close" : "menu"}.svg`} alt="toggle" />
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
  color: #a2a2a2ff;
  display: flex;
  justify-content: space-between;
  /* background-color: red; */
  width: 100%;
  align-items: center;
  padding: 1.5rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 2;

  h1 {
    font-size: var(--24px);
  }

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

  a {
    text-decoration: none;
    color: #a2a2a2ff;
  }

  li:hover {
    cursor: pointer;
    color: white;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    position: absolute;
    top: 4rem;
    right: 1rem;
  }
`;

export default Header;
