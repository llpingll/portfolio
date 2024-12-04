import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();

  return (
    <Html as="div" center className="loader">
      {/* <span></span> */}
      <p>{progress !== 0 ? `${progress.toFixed(2)}%` : "Loading..."}</p>
    </Html>
  );
};

export default CanvasLoader;
