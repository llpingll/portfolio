import styled from "styled-components";
import { navLinks } from "../constants/index.js";
import { useState, useEffect } from "react";

import { breakpoints } from "../constants/index";

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

        <Navbar className={isMobile && !isOpen ? "menu-hidden" : "menu-open"}>
          {navLinks.map(({ id, name, href }) => (
            <NavItem key={id}>
              <NavLink href={href} onClick={() => setIsOpen(false)}>
                {name}
              </NavLink>
            </NavItem>
          ))}
        </Navbar>
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

  @media (max-width: ${breakpoints.small}) {
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

  @media (max-width: ${breakpoints.small}) {
    font-size: calc(var(--24px) * 0.85);
  }
`;

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

  // Desktop: always visible
  @media (min-width: 701px) {
    flex-direction: row;
    position: static;
    background: none;
    padding: 0;
  }

  // Mobile base styles
  @media (max-width: 700px) {
    flex-direction: column;
    position: absolute;
    top: 4rem;
    right: 1rem;
    background: rgba(0, 0, 0, 0.7);
    padding: 1rem;
    border-radius: 0.5rem;

    // CLOSED state
    &.menu-hidden {
      opacity: 0;
      transform: translateY(-20px);
      visibility: hidden; /* prevents clicks */
      pointer-events: none;
      transition:
        opacity 0.35s ease,
        transform 0.4s ease-out,
        visibility 0.4s;
    }

    // OPEN state
    &.menu-open {
      opacity: 1;
      transform: translateY(0);
      visibility: visible;
      pointer-events: auto;
      transition:
        opacity 0.35s ease,
        transform 0.4s ease-out,
        visibility 0.35s;
    }

    // Default mobile state (before class applied)
    opacity: 0;
    transform: translateY(-20px);
    visibility: hidden;
    pointer-events: none;
    transition:
      opacity 0.35s ease,
      transform 0.4s ease-out,
      visibility 0.4s;
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
