import styled from "styled-components";
import { useState } from "react";

const AboutCard = ({ title, body, img, className, globe, buttonTxt, icon, copiedIcon }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(body);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <CardContainer className={className}>
      {img && <img src={img} alt={title} />}
      {globe && <div className="globe-container">{globe}</div>}
      <div className="content">
        <p>{title}</p>
        {icon ? (
          <p onClick={handleCopy} className="icon-text">
            {copied ? copiedIcon : icon} {body}
          </p>
        ) : (
          <p className="body">{body}</p>
        )}
        {buttonTxt && (
          <a href="#contact">
            <button>{buttonTxt}</button>
          </a>
        )}
      </div>
    </CardContainer>
  );
};

export default AboutCard;

const CardContainer = styled.div`
  padding: 1.75rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: white;
  border-radius: 0.5rem;
  border: 1px solid #1c1c21;
  justify-content: space-between;
  background-color: #0e0e10;
  min-height: 0;
  line-height: 1.5rem;

  @media (max-width: 640px) {
    padding: 1rem;
  }

  .globe-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 420px) {
    .globe-container * {
      width: 260px;
    }

    .globe-container > div > div > div {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
    max-height: 100%;
    display: block;
    min-height: 0;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    & > p:first-child {
      font-size: var(--24px);
      font-weight: 600;
    }
  }

  .body,
  .icon-text {
    color: #afb0b6;
  }

  .icon-text {
    cursor: pointer;
  }

  > div .copied-icon {
    color: #00d10e;
  }

  button {
    background-color: #1b1b1b;
    color: white;
    border: none;
    font-size: var(--20px);
    padding: 1rem 2rem;
    border-radius: 0.8rem;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    width: 100%;
    margin-top: 1rem;
  }

  button:hover {
    background-color: white;
    color: #1b1b1b;
  }
`;
