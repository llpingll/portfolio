import styled from "styled-components";
import { navLinks } from "../constants/index.js";
import { useState, useEffect } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 700);

  useEffect(() => {
    const handleResize = () => {
      const mobileView = window.innerWidth <= 700;
      setIsMobile(mobileView);
      if (!mobileView) setIsOpen(false);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // run once on mount

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo href="#home">Lui</Logo>

        <NavToggle
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
        >
          <img src={`/assets/${isOpen ? "close" : "menu"}.svg`} alt={isOpen ? "Close" : "Menu"} />
        </NavToggle>

        {(!isMobile || isOpen) && (
          <Navbar>
            {navLinks.map(({ id, name, href }) => (
              <NavItem key={id}>
                <NavLink href={href} onClick={() => setIsOpen(false)}>
                  {name}
                </NavLink>
              </NavItem>
            ))}
          </Navbar>
        )}
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  color: #a2a2a2ff;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 2;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  max-width: 1280px;
  margin: 0 auto;

  @media (max-width: 440px) {
    padding: 1rem;
  }
`;

const Logo = styled.a`
  font-size: var(--24px);
  text-decoration: none;
  color: inherit;
  font-weight: 600;

  &:hover {
    cursor: pointer;
    color: white;
  }

  @media (max-width: 440px) {
    font-size: calc(var(--24px) * 0.85);
  }
`;

// Check
const NavToggle = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  width: 1.8rem;
  padding: 0;

  img {
    width: 1.5rem;
    height: 1.5rem;
  }

  @media (min-width: 701px) {
    display: none;
  }
`;

const Navbar = styled.ul`
  display: flex;
  list-style: none;
  gap: 1rem;
  margin: 0;
  padding: 0;

  @media (max-width: 700px) {
    flex-direction: column;
    position: absolute;
    top: 4rem;
    right: 1rem;
    background: rgba(0, 0, 0, 0.7);
    padding: 1rem;
    border-radius: 0.5rem;
  }
`;

const NavItem = styled.li`
  &:hover {
    cursor: pointer;
    color: white;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #a2a2a2ff;

  &:hover {
    color: white;
  }
`;
