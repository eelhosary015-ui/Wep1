import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

interface ThreeIntroCanvasProps {
  progress: number;
}

export const ThreeIntroCanvas: React.FC<ThreeIntroCanvasProps> = ({ progress }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef(progress);
  progressRef.current = progress;

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Detect software rendering
    const isSoftwareGl = (() => {
      const gl = document.createElement('canvas').getContext('webgl2');
      if (!gl) return true;
      const ext = gl.getExtension('WEBGL_debug_renderer_info');
      const param = ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER;
      const gpu = String(gl.getParameter(param));
      gl.getExtension('WEBGL_lose_context')?.loseContext();
      return /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
    })();

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // 1. Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x020617, 0.035);

    // 2. Camera setup
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 14);

    // 3. Renderer with ACES Tone mapping & studio precision
    const renderer = new THREE.WebGLRenderer({
      antialias: !isSoftwareGl,
      powerPreference: 'high-performance',
      alpha: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    renderer.shadowMap.enabled = !isSoftwareGl;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.appendChild(renderer.domElement);

    // 4. Studio Environment Lighting
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;
    pmremGenerator.dispose();

    // 5. Lights
    const ambientLight = new THREE.AmbientLight(0x0a192f, 1.2);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0x60a5fa, 3.5);
    keyLight.position.set(6, 8, 8);
    keyLight.castShadow = !isSoftwareGl;
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x38bdf8, 4.0);
    rimLight.position.set(-8, -4, -6);
    scene.add(rimLight);

    const cyanPoint = new THREE.PointLight(0x00f0ff, 3, 20);
    cyanPoint.position.set(0, 0, 3);
    scene.add(cyanPoint);

    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // 6. Build High-End 3D Beveled "R" Logo
    const createRGeometry = () => {
      const shape = new THREE.Shape();
      // Outer border of "R"
      shape.moveTo(-1.2, -1.8);
      shape.lineTo(-0.4, -1.8);
      shape.lineTo(-0.4, -0.2);
      shape.lineTo(0.3, -0.2);
      shape.lineTo(1.1, -1.8);
      shape.lineTo(1.9, -1.8);
      shape.lineTo(1.0, -0.1);
      // Top loop outer curve
      shape.bezierCurveTo(1.7, 0.1, 1.8, 1.6, 0.4, 1.8);
      shape.lineTo(-1.2, 1.8);
      shape.closePath();

      // Hole inside top loop
      const hole = new THREE.Path();
      hole.moveTo(-0.4, 0.5);
      hole.lineTo(0.3, 0.5);
      hole.bezierCurveTo(0.9, 0.5, 0.9, 1.2, 0.3, 1.2);
      hole.lineTo(-0.4, 1.2);
      hole.closePath();
      shape.holes.push(hole);

      const extrudeSettings = {
        depth: 0.55,
        bevelEnabled: true,
        bevelSegments: 6,
        steps: 2,
        bevelSize: 0.12,
        bevelThickness: 0.14,
      };

      const geom = new THREE.ExtrudeGeometry(shape, extrudeSettings);
      geom.center();
      return geom;
    };

    const rGeometry = createRGeometry();
    const chromeBlueMat = new THREE.MeshPhysicalMaterial({
      color: 0x1d4ed8,
      emissive: 0x0284c7,
      emissiveIntensity: 0.25,
      metalness: 0.95,
      roughness: 0.15,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      reflectivity: 1.0,
    });

    const rMesh = new THREE.Mesh(rGeometry, chromeBlueMat);
    rMesh.castShadow = !isSoftwareGl;
    rootGroup.add(rMesh);

    // Outer Gyroscope / Atomic Orbital Rings
    const ringMaterials = [
      new THREE.MeshPhysicalMaterial({
        color: 0x38bdf8,
        emissive: 0x0284c7,
        emissiveIntensity: 0.4,
        metalness: 0.9,
        roughness: 0.2,
      }),
      new THREE.MeshPhysicalMaterial({
        color: 0x60a5fa,
        emissive: 0x1d4ed8,
        emissiveIntensity: 0.3,
        metalness: 0.85,
        roughness: 0.25,
      }),
      new THREE.MeshPhysicalMaterial({
        color: 0x93c5fd,
        emissive: 0x38bdf8,
        emissiveIntensity: 0.5,
        metalness: 0.95,
        roughness: 0.1,
      }),
    ];

    const rings: THREE.Mesh[] = [];
    const ringRadii = [3.2, 3.8, 4.5];

    ringRadii.forEach((radius, i) => {
      const ringGeom = new THREE.TorusGeometry(radius, 0.045, 16, 120);
      const ring = new THREE.Mesh(ringGeom, ringMaterials[i % ringMaterials.length]);
      ring.rotation.x = (i * Math.PI) / 3;
      ring.rotation.y = (i * Math.PI) / 4;
      rings.push(ring);
      rootGroup.add(ring);
    });

    // 7. Floating Data Nodes / Satellites on the Rings
    const satelliteCount = 12;
    const satGeom = new THREE.SphereGeometry(0.12, 16, 16);
    const satMat = new THREE.MeshStandardMaterial({
      color: 0x67e8f9,
      emissive: 0x38bdf8,
      emissiveIntensity: 2.0,
      metalness: 0.3,
      roughness: 0.1,
    });
    const satellites: THREE.Mesh[] = [];
    for (let i = 0; i < satelliteCount; i++) {
      const sat = new THREE.Mesh(satGeom, satMat);
      satellites.push(sat);
      rootGroup.add(sat);
    }

    // 8. 3D Cloud Particles / Enterprise Network Web
    const particleCount = 220;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const radius = 2.5 + Math.random() * 6.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      particlePositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = radius * Math.cos(phi);
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const particleMaterial = new THREE.PointsMaterial({
      color: 0x7dd3fc,
      size: 0.065,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    rootGroup.add(particles);

    // 9. Resize handler
    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    // 10. Animation Loop
    let frameId = 0;
    const clock = new THREE.Clock();

    function tick() {
      const elapsed = clock.getElapsedTime();
      const currentProgress = progressRef.current; // 0 -> 1

      // Dynamic cinematic camera dolly
      // Starts wide and zoomed slightly, then moves in and dramatic angles
      const camZ = 12.0 - currentProgress * 4.8;
      const camY = Math.sin(elapsed * 0.45) * 0.4;
      const camX = Math.cos(elapsed * 0.35) * 0.6;
      camera.position.set(camX, camY, camZ);
      camera.lookAt(0, 0, 0);

      // Rotate root & components
      rootGroup.rotation.y = elapsed * 0.28 + currentProgress * Math.PI * 1.5;
      rootGroup.rotation.x = Math.sin(elapsed * 0.3) * 0.15;

      // Animate R mesh breathing / levitation
      rMesh.position.y = Math.sin(elapsed * 1.8) * 0.12;
      rMesh.rotation.y = Math.sin(elapsed * 0.8) * 0.25;

      // Rotate orbital rings independently
      rings.forEach((ring, idx) => {
        ring.rotation.x += 0.008 * (idx + 1);
        ring.rotation.y += 0.012 * (idx + 1);
        ring.rotation.z += 0.005;
      });

      // Animate satellites around the rings
      satellites.forEach((sat, i) => {
        const ringIdx = i % rings.length;
        const rad = ringRadii[ringIdx];
        const angle = elapsed * (0.8 + (i % 3) * 0.3) + (i * Math.PI * 2) / satellites.length;
        sat.position.set(
          Math.cos(angle) * rad,
          Math.sin(angle) * rad * 0.8,
          Math.sin(angle * 1.5) * (rad * 0.5)
        );
      });

      // Animate particles swirl
      particles.rotation.y -= 0.0015;
      particles.rotation.x += 0.001;

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(tick);
    }

    tick();

    return () => {
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(frameId);
      rGeometry.dispose();
      chromeBlueMat.dispose();
      ringMaterials.forEach((m) => m.dispose());
      satGeom.dispose();
      satMat.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
      if (renderer.domElement.parentElement) {
        renderer.domElement.parentElement.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 pointer-events-none"
      style={{ width: '100%', height: '100%' }}
    />
  );
};
