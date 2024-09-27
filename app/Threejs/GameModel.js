// GameModel.js
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const GameModel = () => {
  // Load the GLTF model (You can use your own gaming model here)
  const { scene } = useGLTF('/path_to_your_gltf_model/model.glb');

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        {/* Render the loaded 3D model */}
        <primitive object={scene} scale={1.5} />
      </Suspense>
      {/* OrbitControls allow rotating around the model */}
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default GameModel;
