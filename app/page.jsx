"use client";
import { motion } from "framer-motion";
import { useRef, Suspense } from "react";
import DomeGallery from '@/components/DomeGallery';
import CardSwap, { Card } from '@/components/CardSwap';
import CurvedLoop from '@/components/CurvedLoop';
import ScrollVelocity from '@/components/ScrollVelocity';
import TextType from '@/components/TextType';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';
import FuzzyText from '@/components/FuzzyText';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Stage } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";
import { Sora } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-sora",
});

function Model() {
  const { scene } = useGLTF("/models/u2.glb");
  return <primitive object={scene} scale={2} />;
}

export default function LandingPage() {
  const constraintsRef = useRef(null);
  return (
    <div className="w-full min-h-screen font-sans">
      {/* Section 1: Hero with curved Hindi text */}
      <section className="relative h-screen w-full flex items-center justify-between px-12 bg-white overflow-hidden">
        {/* Left text */}
        <motion.div
          className="flex flex-col gap-6 max-w-xl z-10"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-9xl md:text-8xl leading-snug">
            KALAKAAR<br />
          </h1>
          <p className={`${sora.variable} text-6xl`}>
            Celebrating India’s artisans with unique, unforgettable creations.
          </p>
        </motion.div>

        {/* 3D Scene */}
        <div className="w-[400px] h-[400px] md:w-[600px] md:h-[600px] mt-10">
          <Canvas camera={{ position: [3, 3, 3], fov: 50 }}>
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <Suspense fallback={null}>
              <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5}>
                <Stage environment="studio" intensity={0.6}>
                  <Model />
                </Stage>
              </Float>
            </Suspense>
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>

        {/* Scroll Indicator */}
        <motion.span
          className="absolute bottom-8 right-12 text-green-400 font-pixel text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          {"{scroll}"}
        </motion.span>
      </section>
      {/* Section 2: Misaligned Cards with animations */}
      <section className="py-20 px-6 md:px-20">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Left side ScrollReveal text */}
          <div className="lg:w-1/3">
            <ScrollReveal
              baseOpacity={0}
              enableBlur={true}
              baseRotation={0}
              blurStrength={0}
              className="text-black text-lg leading-relaxed scroll-reveal-text"
              style={{
                textAlign: 'left',
                maxWidth: '100%',
                marginRight: 'auto'
              }}
            >
              From skilled hands, a legacy unfolds, preserving India's vibrant soul.
              Each creation a whisper of heritage, a bold declaration of artistry and spirit.
              Through timeless craft, stories are born, connecting generations, forever adorned.
            </ScrollReveal>
          </div>

          {/* CardSwap component */}
          <div className="lg:w-2/3" style={{ height: '600px', position: 'relative' }}>
            <CardSwap
              cardDistance={20}
              verticalDistance={10}
              delay={4000}
              pauseOnHover={true}
            >
              <Card>
                <h3 className="text-xl font-serif mb-2 text-black ml-5 mt-5">Furniture</h3>
                <p className="text-black ml-5">Handcrafted furniture blending tradition with modern design.</p>
                <div className="w-11/12 h-px bg-black ml-5 my-4"></div>
                <div className="mt-0 h-80 rounded-lg mb-0 overflow-hidden mx-5">
                  <img src="/Furniture.png" alt="Furniture" className="w-full h-80 object-cover" />
                </div>
              </Card>

              <Card>
                <h3 className="text-xl font-serif mb-2 text-black ml-5 mt-5">Textile</h3>
                <p className="text-black ml-5">Rich textiles woven by skilled artisans with heritage patterns.</p>
                <div className="w-11/12 h-px bg-black ml-5 my-4"></div>
                <div className="mt-0 h-80 rounded-lg mb-0 overflow-hidden mx-5">
                  <img src="/Textile.png" alt="Textile" className="w-full h-70 object-cover" />
                </div>
              </Card>

              <Card>
                <h3 className="text-xl font-serif mb-2 text-black ml-5 mt-5">Pottery</h3>
                <p className="text-black ml-5">Beautiful pottery crafted with earthy tones and natural designs.</p>
                <div className="w-11/12 h-px bg-black ml-5 my-4"></div>
                <div className="mt-0 h-80 rounded-lg mb-0 overflow-hidden mx-5">
                  <img src="/Pottery.png" alt="Pottery" className="w-full h-70 object-cover" />
                </div>
              </Card>
            </CardSwap>
          </div>
        </div>
      </section>
      <section className="mt-50">
        <div style={{ width: "100vw", height: "100vh", background: "#111" }}>
          <DomeGallery
            images={[
              { src: "/d1.png", alt: "d1" },
              { src: "/d2.png", alt: "d2" },
              { src: "/d3.png", alt: "d3" },
              { src: "/d4.png", alt: "d4" },
              { src: "/d5.png", alt: "d5" },
              { src: "/d6.png", alt: "d6" },
            ]}
            fit={0.7}
            grayscale={false}
          />
        </div>
      </section>
    </div>
  );
}