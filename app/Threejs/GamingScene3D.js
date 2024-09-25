import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function GamingScene3D() {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Ambient light and directional light
    const ambientLight = new THREE.AmbientLight(0x404040, 2); 
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(0, 10, 10).normalize();
    scene.add(directionalLight);

    // Load a 3D model (GLTF)
    const loader = new GLTFLoader();
    loader.load('/models/myGameModel.glb', (gltf) => {
      const model = gltf.scene;
      model.scale.set(2, 2, 2); // Adjust model scale
      model.position.y = -1; // Position on the ground
      scene.add(model);

      // Animation loop for the model
      const animate = () => {
        requestAnimationFrame(animate);
        model.rotation.y += 0.01; // Rotate the model slowly
        renderer.render(scene, camera);
      };
      animate();
    });

    // Camera Position
    camera.position.z = 15;

    // Handle Window Resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="fixed inset-0 z-[-1]" />;
}
