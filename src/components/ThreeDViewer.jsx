import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { AlertCircle } from 'lucide-react';

export default function ThreeDViewer() {
  const mountRef = useRef(null);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!mountRef.current) return;

    // 1. SCENE SETUP
    const scene = new THREE.Scene();
    
    // Container dimensions
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    // 2. CAMERA SETUP
    const camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
    // Move camera further out for a better default framing
    camera.position.set(0, 250, 400);

    // 3. RENDERER SETUP
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limit pixel ratio for performance
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    // Clear canvas before appending
    mountRef.current.innerHTML = '';
    mountRef.current.appendChild(renderer.domElement);

    // 4. LIGHTING SETUP
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.8);
    // Position the light to mimic a studio overhead setup
    dirLight.position.set(100, 200, 50);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    dirLight.shadow.camera.near = 0.5;
    dirLight.shadow.camera.far = 500;
    
    // Expand shadow frustum for large geometries
    const d = 150;
    dirLight.shadow.camera.left = -d;
    dirLight.shadow.camera.right = d;
    dirLight.shadow.camera.top = d;
    dirLight.shadow.camera.bottom = -d;
    scene.add(dirLight);

    const backLight = new THREE.PointLight(0xffffff, 1.2);
    backLight.position.set(-100, -50, -100);
    scene.add(backLight);

    // 5. CONTROLS SETUP
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 2.0;
    controls.minPolarAngle = Math.PI / 6; // Don't allow viewing strictly from the top
    controls.maxPolarAngle = Math.PI / 1.5; // Don't allow viewing from strictly underneath
    controls.enableZoom = true;

    // References to cleanup later
    let meshRef = null;
    let geometryRef = null;
    let materialRef = null;
    let animationFrameId = null;

    // 6. STL LOADING
    const loader = new STLLoader();
    loader.load(
      '/ramp.stl',
      (geometry) => {
        setIsLoading(false);
        geometryRef = geometry;
        
        // Auto-center the geometry
        geometry.center();
        geometry.computeVertexNormals();

        // Create a premium material
        materialRef = new THREE.MeshStandardMaterial({
          color: 0xCC0000,
          roughness: 0.4,
          metalness: 0.6,
          // Subtle emissive glow to prevent it looking dead
          emissive: 0x220000,
          emissiveIntensity: 0.4,
        });

        meshRef = new THREE.Mesh(geometry, materialRef);
        meshRef.castShadow = true;
        meshRef.receiveShadow = true;

        // Correct the Z-up orientation for STLs to Y-up in Three.js
        meshRef.rotation.x = -Math.PI / 2;

        scene.add(meshRef);
        
        // Ensure camera looks at the centered object
        controls.target.set(0, 0, 0);
        controls.update();
      },
      (xhr) => {
        // Optional: Progress logic here
      },
      (error) => {
        console.error('Vanilla Three.js Error loading STL:', error);
        setHasError(true);
        setIsLoading(false);
      }
    );

    // Subtle Ground Plane to catch shadows
    const planeGeo = new THREE.PlaneGeometry(500, 500);
    const planeMat = new THREE.ShadowMaterial({ opacity: 0.1 });
    const plane = new THREE.Mesh(planeGeo, planeMat);
    plane.rotation.x = -Math.PI / 2;
    plane.position.y = -50; 
    plane.receiveShadow = true;
    scene.add(plane);

    // 7. ANIMATION LOOP
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      controls.update(); // Required for autoRotate and damping
      renderer.render(scene, camera);
    };
    animate();

    // 8. RESIZE HANDLER
    const handleResize = () => {
      if (!mountRef.current) return;
      const newWidth = mountRef.current.clientWidth;
      const newHeight = mountRef.current.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(mountRef.current);

    // 9. CLEANUP (CRUCIAL FOR PREVENTING WEBGL CRASHES)
    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      
      // Remove components from scene
      if (meshRef) scene.remove(meshRef);
      scene.remove(ambientLight);
      scene.remove(dirLight);
      scene.remove(backLight);
      scene.remove(plane);
      
      // Dispose of raw WebGL memory
      if (geometryRef) geometryRef.dispose();
      if (materialRef) materialRef.dispose();
      planeGeo.dispose();
      planeMat.dispose();
      renderer.dispose();
      controls.dispose();

      // Clear DOM manually to guarantee no straggler canvases
      if (mountRef.current) {
        mountRef.current.innerHTML = '';
      }
    };
  }, []);

  if (hasError) {
    return (
      <div className="flex flex-col items-center justify-center h-full w-full p-8 text-center gap-6 bg-slate-50/50 rounded-[2.5rem] border border-dashed border-slate-200">
        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-ncsu-red shadow-sm border border-slate-100">
          <AlertCircle size={32} />
        </div>
        <div className="space-y-2">
          <h4 className="font-black italic text-slate-900 leading-tight">Interaction Pending</h4>
          <p className="text-[10px] text-slate-400 font-medium uppercase tracking-[0.2em] max-w-[200px] mx-auto leading-relaxed">
            Ensure <span className="text-ncsu-red font-bold">ramp.stl</span> is in <br />
            the <code className="bg-slate-100 px-1 rounded lowercase">public/</code> folder
          </p>
        </div>
        <button 
          onClick={() => window.location.reload()}
          className="text-[8px] font-black uppercase tracking-widest text-slate-400 hover:text-ncsu-red transition-colors"
        >
          Click to Refresh
        </button>
      </div>
    );
  }

  return (
    <div className="w-full h-full min-h-[400px] relative group overflow-hidden">
      
      {/* 3D Canvas Mount Point */}
      <div 
        ref={mountRef} 
        className="w-full h-full cursor-grab active:cursor-grabbing absolute inset-0 z-10" 
      />

      {/* Loading State Overlay */}
      {isLoading && (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm gap-4 text-slate-400">
          <div className="w-12 h-12 border-4 border-slate-100 border-t-ncsu-red rounded-full animate-spin" />
          <span className="text-[10px] font-black uppercase tracking-widest italic">Initializing Core Engine...</span>
        </div>
      )}

      {/* UI Overlays */}
      {!isLoading && (
        <>
          <div className="absolute top-8 left-8 pointer-events-none z-20">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-ncsu-red animate-pulse" />
              <span className="text-[8px] font-black uppercase tracking-[0.3em] text-ncsu-black opacity-40">Vanilla Graphics Engine</span>
            </div>
          </div>

          <div className="absolute bottom-8 right-8 pointer-events-none z-20">
            <div className="bg-white/90 backdrop-blur-md px-5 py-2.5 rounded-2xl border border-white shadow-xl shadow-slate-200/50 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 scale-95 group-hover:scale-100">
              <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-800">Drag to Rotate Explorer</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}


