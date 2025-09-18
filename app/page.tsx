"use client";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <div className="w-full min-h-screen font-sans">
      {/* Section 1: Hero */}
      <section
        className="h-screen w-full bg-cover bg-center flex items-center justify-end pr-50 mt-10"
        style={{ backgroundImage: "url('/rose.png')" }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-black text-8xl font-bold drop-shadow-lg"
        >
          कलाकार
        </motion.h1>
      </section>

      {/* Section 2: Misaligned Cards */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-bold text-center mb-16">Explore India!</h2>
        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Furniture */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-100 rounded-2xl shadow-lg p-6 transform -translate-y-6">
            <h3 className="text-xl font-semibold mb-2">Furniture</h3>
            <p className="text-gray-600 mb-4">Handcrafted furniture blending tradition with modern design.</p>
            <img src="/Furniture.png" alt="Furniture" className="rounded-lg w-full h-60 object-cover" />
          </motion.div>

          {/* Textile */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.8 }}
            viewport={{ once: true }}
            className="bg-gray-100 rounded-2xl shadow-lg p-6 transform -translate-y-2">
            <h3 className="text-xl font-semibold mb-2">Textile</h3>
            <p className="text-gray-600 mb-4">Rich textiles woven by skilled artisans with heritage patterns.</p>
            <img src="/Textile.png" alt="Textile" className="rounded-lg w-full h-60 object-cover" />
          </motion.div>

          {/* Pottery */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-100 rounded-2xl shadow-lg p-6 transform -translate-y-6">
            <h3 className="text-xl font-semibold mb-2">Pottery</h3>
            <p className="text-gray-600 mb-4">Beautiful pottery crafted with earthy tones and natural designs.</p>
            <img src="/Pottery.png" alt="Pottery" className="rounded-lg w-full h-60 object-cover" />
          </motion.div>
        </div>
      </section>

      {/* Section 3: Supporting Artisans */}
      <section
        className="h-screen w-full bg-cover bg-center flex items-center"
        style={{ backgroundImage: "url('/Collage4.png')" }}
      >
        <div className="text-white p-10 md:p-20 rounded-r-2xl max-w-lg">
          <h2 className="text-4xl font-bold mb-4">Supporting Artisans</h2>
          <p className="text-lg">
            We believe in empowering local artisans by bringing their creations
            to a global audience. Every product tells a story of heritage and skill.
          </p>
        </div>
      </section>
    </div>
  );
}
