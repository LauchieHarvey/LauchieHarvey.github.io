import { useGLTF } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { type Mesh } from "three";

const SphereMesh = () => {
  const meshRef = useRef<Mesh | null>(null);
  const { camera } = useThree();
  const [scrollY, setScrollY] = useState<number>(0);

  const { scene } = useGLTF("/wordCloudSphere.glb");

  const minCameraY = -2;
  const maxCameraY = 2;
  const scrollFactor = 0.005;

  useEffect(() => {
    const onScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useFrame((state, delta) => {
    // Rotate sphere around Y axis.
    if (meshRef.current != null) {
      meshRef.current.rotateY(-delta * 0.1);
    }

    // Update camera Y position based on scroll.
    const newCameraY = maxCameraY - scrollY * scrollFactor;
    camera.position.y = Math.min(maxCameraY, Math.max(newCameraY, minCameraY));
    camera.lookAt(0, 0, 0);
  });

  return (
    <group scale={0.1}>
      <primitive object={scene} ref={meshRef} color="red" />
    </group>
  );
};

const Sphere = () => {
  return (
    <Canvas
      style={{ width: "100%", height: "100%" }}
      camera={{ position: [8, 2, 0] }}
    >
      <SphereMesh />
    </Canvas>
  );
};

export default Sphere;
