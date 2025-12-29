import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <p>Designed and built with ❤️</p>
      <a href="https://github.com/llpingll" target="_blank" rel="noopener noreferrer">
        <img src="/assets/github.svg" alt="GitHub" />
      </a>
      <p>© 2025 Lui Duarte. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2.5rem 1rem;
  border-top: 1px solid #333;
  gap: 1rem;

  p {
    color: #62646c;
  }

  a {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background-color: #1c1c21;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: rotate(360deg) scale(1.1);
    }
  }

  img {
    width: 50%;
    height: 50%;
    cursor: pointer;
  }

  @media (max-width: 440px) {
    padding: 1.25rem;
    flex-direction: column;
    gap: 0.5rem;
  }
`;
