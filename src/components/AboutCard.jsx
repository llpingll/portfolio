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
    <Card className={className}>
      {img && <CardImage src={img} alt={`${title} illustration`} />}
      {globe && <GlobeContainer>{globe}</GlobeContainer>}
      <CardContent>
        <CardTitle>{title}</CardTitle>
        {icon ? (
          <CopyText onClick={handleCopy} role="button" tabIndex={0}>
            {copied ? copiedIcon : icon} {body}
          </CopyText>
        ) : (
          <CardBody>{body}</CardBody>
        )}
        {buttonTxt && <ContactButton href="#contact">{buttonTxt}</ContactButton>}
      </CardContent>
    </Card>
  );
};

export default AboutCard;

const Card = styled.div`
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
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  max-height: 100%;
  display: block;
  min-height: 0;
`;

const GlobeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 420px) {
    & > div > div > div {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    & * {
      width: 260px;
    }
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const CardTitle = styled.p`
  font-size: var(--24px);
  font-weight: 600;
`;

const CopyText = styled.p`
  color: #afb0b6;
  cursor: pointer;

  & .copied-icon {
    color: #00d10e;
  }
`;

const CardBody = styled.p`
  color: #afb0b6;
`;

const ContactButton = styled.a`
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
  text-decoration: none;
  text-align: center;

  &:hover {
    background-color: white;
    color: #1b1b1b;
  }
`;
