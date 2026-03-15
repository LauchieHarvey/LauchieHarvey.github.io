import { useGLTF } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { type Mesh } from "three";

const MIN_CAMERA_Y = -2;
const MAX_CAMERA_Y = 2;
const SCROLL_FACTOR = 0.005;

const calculateCameraYPosition = (scrollY: number | undefined) => {
  scrollY ??= 0;
  const newCameraY = MAX_CAMERA_Y - scrollY * SCROLL_FACTOR;

  return Math.min(MAX_CAMERA_Y, Math.max(newCameraY, MIN_CAMERA_Y));
};

const sphereModelUrl = `${import.meta.env.BASE_URL}wordCloudSphere.glb`;
useGLTF.preload(sphereModelUrl);

const SphereMesh = () => {
  const meshRef = useRef<Mesh | null>(null);
  const { camera } = useThree();

  const { scene } = useGLTF(sphereModelUrl);

  useFrame((state, delta) => {
    // Rotate sphere around Y axis.
    if (meshRef.current != null) {
      meshRef.current.rotateY(-delta * 0.1);
    }

    // Update camera Y position based on scroll.
    camera.position.y = calculateCameraYPosition(window?.scrollY);
    camera.lookAt(0, 0, 0);
  });

  return (
    <group scale={0.1}>
      <primitive object={scene} ref={meshRef} color="red" />
    </group>
  );
};

const Sphere = () => {
  const initialCameraY = calculateCameraYPosition(window?.scrollY);

  return (
    <Canvas
      style={{ width: "100%", height: "100%" }}
      camera={{ position: [8, initialCameraY, 0] }}
    >
      <SphereMesh />
    </Canvas>
  );
};

export default Sphere;
