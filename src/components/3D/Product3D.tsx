import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, PresentationControls } from '@react-three/drei';
import { Mesh } from 'three';

interface Product3DProps {
  productId: string;
  className?: string;
}

function ProductModel({ productId }: { productId: string }) {
  const meshRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
      meshRef.current.scale.setScalar(hovered ? 1.1 : 1);
    }
  });

  // Simple geometric representation for demo
  const getGeometry = () => {
    switch (productId) {
      case '1': // Headphones
        return (
          <group>
            <mesh ref={meshRef} position={[0, 0, 0]}>
              <torusGeometry args={[1, 0.3, 16, 100]} />
              <meshStandardMaterial color="#2563eb" metalness={0.8} roughness={0.2} />
            </mesh>
            <mesh position={[0, 0, 0]}>
              <cylinderGeometry args={[0.8, 0.8, 0.1, 32]} />
              <meshStandardMaterial color="#1e40af" />
            </mesh>
          </group>
        );
      case '2': // Chair
        return (
          <group>
            <mesh ref={meshRef} position={[0, 0, 0]}>
              <boxGeometry args={[1.5, 2, 1.5]} />
              <meshStandardMaterial color="#374151" />
            </mesh>
            <mesh position={[0, -1.5, 0]}>
              <cylinderGeometry args={[0.8, 0.1, 0.2, 5]} />
              <meshStandardMaterial color="#1f2937" />
            </mesh>
          </group>
        );
      case '3': // Jacket
        return (
          <mesh ref={meshRef} position={[0, 0, 0]}>
            <boxGeometry args={[2, 2.5, 0.5]} />
            <meshStandardMaterial color="#7c2d12" />
          </mesh>
        );
      case '4': // Camera
        return (
          <group>
            <mesh ref={meshRef} position={[0, 0, 0]}>
              <boxGeometry args={[1, 0.8, 0.8]} />
              <meshStandardMaterial color="#ffffff" />
            </mesh>
            <mesh position={[0, 0, 0.5]}>
              <cylinderGeometry args={[0.3, 0.3, 0.2, 32]} />
              <meshStandardMaterial color="#000000" />
            </mesh>
          </group>
        );
      case '5': // Coffee Table
        return (
          <group>
            <mesh ref={meshRef} position={[0, 0, 0]}>
              <boxGeometry args={[3, 0.2, 1.5]} />
              <meshStandardMaterial color="#d2691e" />
            </mesh>
            <mesh position={[-1, -0.5, -0.5]}>
              <boxGeometry args={[0.1, 1, 0.1]} />
              <meshStandardMaterial color="#8b4513" />
            </mesh>
            <mesh position={[1, -0.5, -0.5]}>
              <boxGeometry args={[0.1, 1, 0.1]} />
              <meshStandardMaterial color="#8b4513" />
            </mesh>
            <mesh position={[-1, -0.5, 0.5]}>
              <boxGeometry args={[0.1, 1, 0.1]} />
              <meshStandardMaterial color="#8b4513" />
            </mesh>
            <mesh position={[1, -0.5, 0.5]}>
              <boxGeometry args={[0.1, 1, 0.1]} />
              <meshStandardMaterial color="#8b4513" />
            </mesh>
          </group>
        );
      case '6': // Shoes
        return (
          <mesh
            ref={meshRef}
            position={[0, 0, 0]}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
          >
            <boxGeometry args={[2, 0.8, 3]} />
            <meshStandardMaterial color="#000000" />
          </mesh>
        );
      default:
        return (
          <mesh ref={meshRef} position={[0, 0, 0]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="#3b82f6" />
          </mesh>
        );
    }
  };

  return getGeometry();
}

const Product3D: React.FC<Product3DProps> = ({ productId, className = '' }) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        style={{ background: 'linear-gradient(to bottom, #f8fafc, #e2e8f0)' }}
      >
        <PresentationControls
          enabled={true}
          global={false}
          cursor={true}
          snap={false}
          speed={1}
          zoom={1}
          rotation={[0, 0, 0]}
          polar={[-Math.PI / 3, Math.PI / 3]}
          azimuth={[-Math.PI / 1.4, Math.PI / 1.4]}
        >
          <ProductModel productId={productId} />
        </PresentationControls>
        <OrbitControls
          enableZoom={true}
          enablePan={false}
          enableRotate={true}
          maxDistance={12}
          minDistance={4}
        />
        <Environment preset="studio" />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
      </Canvas>
    </div>
  );
};

export default Product3D;