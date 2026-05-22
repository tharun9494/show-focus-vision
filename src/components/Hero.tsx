import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import { useRef, useMemo, Suspense } from "react";
import * as THREE from "three";
import { motion, useScroll, useTransform } from "framer-motion";

function Particles({ count = 1200 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null!);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 30;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return arr;
  }, [count]);

  useFrame(({ clock, mouse }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    ref.current.rotation.y = t * 0.04 + mouse.x * 0.2;
    ref.current.rotation.x = mouse.y * 0.1;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#FFD700"
        transparent
        opacity={0.75}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function FloatingRings() {
  const g1 = useRef<THREE.Mesh>(null!);
  const g2 = useRef<THREE.Mesh>(null!);
  const g3 = useRef<THREE.Mesh>(null!);

  useFrame(({ clock, mouse }) => {
    const t = clock.getElapsedTime();
    if (g1.current) {
      g1.current.rotation.x = t * 0.15 + mouse.y * 0.3;
      g1.current.rotation.y = t * 0.2 + mouse.x * 0.3;
    }
    if (g2.current) {
      g2.current.rotation.x = -t * 0.2;
      g2.current.rotation.z = t * 0.1;
    }
    if (g3.current) {
      g3.current.rotation.y = t * 0.1;
      g3.current.rotation.z = -t * 0.15;
    }
  });

  return (
    <>
      <Float speed={1.2} rotationIntensity={0.4} floatIntensity={1.2}>
        <mesh ref={g1} position={[2.5, 0.5, -2]}>
          <torusGeometry args={[1.2, 0.02, 32, 200]} />
          <meshStandardMaterial
            color="#D4AF37"
            metalness={1}
            roughness={0.15}
            emissive="#D4AF37"
            emissiveIntensity={0.4}
          />
        </mesh>
      </Float>
      <Float speed={1.8} rotationIntensity={0.5} floatIntensity={1.5}>
        <mesh ref={g2} position={[-3, -0.5, -1]}>
          <torusGeometry args={[0.8, 0.015, 32, 200]} />
          <meshStandardMaterial
            color="#FFD700"
            metalness={1}
            roughness={0.1}
            emissive="#FFD700"
            emissiveIntensity={0.6}
          />
        </mesh>
      </Float>
      <Float speed={0.9} rotationIntensity={0.3} floatIntensity={0.8}>
        <mesh ref={g3} position={[0, 0, -4]}>
          <torusGeometry args={[2.5, 0.008, 32, 200]} />
          <meshStandardMaterial
            color="#D4AF37"
            metalness={1}
            roughness={0.2}
            emissive="#D4AF37"
            emissiveIntensity={0.3}
          />
        </mesh>
      </Float>
    </>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.15} />
      <spotLight
        position={[0, 8, 5]}
        angle={0.4}
        penumbra={1}
        intensity={2.5}
        color="#FFD700"
        castShadow
      />
      <spotLight position={[-8, 4, 2]} angle={0.5} penumbra={1} intensity={1.2} color="#D4AF37" />
      <pointLight position={[5, -3, 2]} intensity={0.8} color="#FFD700" />
      <Suspense fallback={null}>
        <Environment preset="night" />
        <Particles />
        <FloatingRings />
      </Suspense>
    </>
  );
}

export function Hero() {
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacityParallax = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-luxury">
      {/* 3D scene */}
      <div className="absolute inset-0">
        <Canvas
          camera={{ position: [0, 0, 6], fov: 60 }}
          dpr={[1, 2]}
          gl={{ antialias: true, alpha: true }}
        >
          <Scene />
        </Canvas>
      </div>

      {/* Vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#050505_85%)]" />

      {/* Light shafts */}
      <div className="pointer-events-none absolute top-0 left-1/2 h-full w-[800px] -translate-x-1/2">
        <div className="h-full w-full bg-gradient-to-b from-[#D4AF37]/15 via-transparent to-transparent blur-3xl" />
      </div>

      {/* Content */}
      <motion.div 
        style={{ y: yParallax, opacity: opacityParallax }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.4 }}
          className="mb-6 flex items-center gap-3 text-xs tracking-[0.5em] text-[#D4AF37] uppercase"
        >
          <span className="h-px w-12 bg-[#D4AF37]" />
          Est. 2007
          <span className="h-px w-12 bg-[#D4AF37]" />
        </motion.div>

        <h1 className="font-display text-5xl leading-[0.95] font-light text-white sm:text-7xl md:text-8xl lg:text-[9rem]">
          <motion.span
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
            className="block"
          >
            We don't <span className="italic text-white/60">organize</span> events
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 1.9, ease: [0.16, 1, 0.3, 1] }}
            className="mt-2 block"
          >
            we create <span className="gradient-gold italic glow-text">experiences</span>
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 2.4 }}
          className="mt-10 max-w-xl text-sm font-light tracking-wide text-[#A0A0A0] md:text-base"
        >
          A luxury event atelier crafting cinematic weddings, gala nights,
          corporate spectacles and exhibitions across the world.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#works"
            data-cursor-hover
            className="group relative overflow-hidden rounded-full bg-gold px-8 py-4 text-xs font-medium tracking-[0.25em] text-black uppercase transition-transform hover:scale-105"
          >
            <span className="relative z-10">Explore the universe</span>
          </a>
          <a
            href="#contact"
            data-cursor-hover
            className="group rounded-full border border-white/20 px-8 py-4 text-xs font-medium tracking-[0.25em] text-white uppercase transition-colors hover:border-gold hover:text-gold"
          >
            Begin a project →
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] tracking-[0.4em] text-white/40 uppercase">Scroll</span>
        <div className="relative h-12 w-px overflow-hidden bg-white/10">
          <motion.div
            className="absolute top-0 h-1/2 w-full bg-[#D4AF37]"
            animate={{ y: ["-100%", "200%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
