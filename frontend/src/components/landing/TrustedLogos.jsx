"use client";

import { motion } from "framer-motion";

const logos = [
  "OpenAI",
  "Vercel",
  "Stripe",
  "GitHub",
  "MongoDB",
  "Next.js",
  "React",
  "Node.js",
];

export default function TrustedLogos() {
  return (
    <section className="relative z-10 overflow-hidden py-20">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-12 text-center">

          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">
            Trusted Technologies
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white">
            Built With Modern Technologies
          </h2>

        </div>

      </div>

      <div className="relative overflow-hidden">

        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex w-max gap-8"
        >
          {[...logos, ...logos].map((logo, index) => (

            <div
              key={index}
              className="flex h-20 min-w-[200px] items-center justify-center rounded-3xl border border-white/10 bg-white/5 px-10 backdrop-blur-xl"
            >
              <span className="text-xl font-bold text-gray-300">
                {logo}
              </span>
            </div>

          ))}
        </motion.div>

      </div>

    </section>
  );
}