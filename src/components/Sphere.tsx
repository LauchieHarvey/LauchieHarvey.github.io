import { useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { type Mesh } from "three";

const SphereMesh = () => {
  const meshRef = useRef<Mesh | null>(null);

  const { scene } = useGLTF("/wordCloudSphere.glb");

  useFrame((state, delta) => {
    if (meshRef.current != null) {
      meshRef.current.rotateY(-delta * 0.1);
    }
  });

  return (
    <group scale={0.1}>
      <primitive object={scene} ref={meshRef} />
    </group>
  );
};

const Sphere = () => {
  return (
    <Canvas
      style={{ width: "100%", height: "100%" }}
      camera={{ position: [9, 0, 0] }}
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[9, 9, 2]} />

      <SphereMesh />
    </Canvas>
  );
};

export default Sphere;
