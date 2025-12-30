import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Target = (props) => {
  const targetRef = useRef();
  const { scene } = useGLTF("/models/target.glb");

  useGSAP(() => {
    gsap.to(targetRef.current.position, {
      y: targetRef.current.position.y + 1.5,
      duration: 1.4,
      repeat: -1,
      yoyo: true,
    });
  });

  return (
    <mesh {...props} ref={targetRef} rotation={[0, Math.PI + 2.2, 0.5]} scale={1.5}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Target;
