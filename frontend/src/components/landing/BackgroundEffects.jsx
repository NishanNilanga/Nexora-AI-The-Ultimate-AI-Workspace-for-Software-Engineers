"use client";

import { motion } from "framer-motion";

const particles = [
  { left: "8%", top: "12%", size: 6 },
  { left: "18%", top: "72%", size: 8 },
  { left: "28%", top: "28%", size: 5 },
  { left: "40%", top: "60%", size: 7 },
  { left: "52%", top: "18%", size: 6 },
  { left: "63%", top: "82%", size: 5 },
  { left: "74%", top: "36%", size: 8 },
  { left: "86%", top: "58%", size: 6 },
  { left: "92%", top: "22%", size: 5 },
  { left: "14%", top: "46%", size: 7 },
  { left: "58%", top: "48%", size: 6 },
  { left: "80%", top: "12%", size: 5 },
];

export default function BackgroundEffects() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base Background */}
      <div className="absolute inset-0 bg-[#050816]" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Left Glow */}
      <motion.div
        animate={{
          x: [0, 60, -20, 0],
          y: [0, 40, -30, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-56 -top-56 h-[550px] w-[550px] rounded-full bg-cyan-500/25 blur-[150px]"
      />

      {/* Right Glow */}
      <motion.div
        animate={{
          x: [0, -60, 20, 0],
          y: [0, 30, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[-180px] top-24 h-[500px] w-[500px] rounded-full bg-blue-600/25 blur-[150px]"
      />

      {/* Bottom Glow */}
      <motion.div
        animate={{
          y: [0, -30, 20, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-220px] left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-purple-600/20 blur-[160px]"
      />

      {/* Particles */}
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)]"
          style={{
            width: particle.size,
            height: particle.size,
            left: particle.left,
            top: particle.top,
          }}
        />
      ))}

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(5,8,22,0.9)_100%)]" />
    </div>
  );
}