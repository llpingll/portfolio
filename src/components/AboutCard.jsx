import styled from "styled-components";

const AboutCard = ({ title, body, img, className, globe }) => {
  return (
    <CardContainer className={className}>
      {img && <img src={img} alt={title} />}
      {globe && <div className="globe-container">{globe}</div>}
      <div>
        <p>{title}</p>
        <p>{body}</p>
      </div>
    </CardContainer>
  );
};

export default AboutCard;

const CardContainer = styled.div`
  // border: 1px solid #0c68f3ff;
  padding: 1.75rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: white;
  border-radius: 0.5rem;
  justify-content: space-between;
  background-color: #0e0e10;
  min-height: 0;

  .globe-container {
    width: 100%;
    height: 100%;
    min-height: 0;
    min-width: 0;
    position: relative;

    .scene-container {
      width: 100% !important;
      height: 100% !important;
      min-height: 0;
      min-width: 0;
      position: relative;
    }

    canvas {
      border: 1px solid #0c68f3ff;
      width: 100% !important;
      height: 100% !important;
      display: block;
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

  > div {
    // border: 1px solid #c10cf3ff;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  > div :first-child {
    // border: 1px solid #0de592ff;
    font-size: var(--24px);
    font-weight: 600;
  }

  > div :last-child {
    color: #a2a2a2ff;
  }
`;
