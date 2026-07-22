"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Alex Carter",
    role: "Software Engineer",
    review:
      "Nexora AI completely transformed the way our development team manages projects. The AI Assistant alone saves hours every week.",
  },
  {
    name: "Sarah Johnson",
    role: "Project Manager",
    review:
      "The dashboard is clean, fast and incredibly intuitive. Everything our team needs is available in one place.",
  },
  {
    name: "Michael Brown",
    role: "Startup Founder",
    review:
      "Modern UI, powerful AI and excellent analytics. Nexora AI feels like a premium SaaS platform.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-6 py-28">

      <div className="text-center">

        <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-cyan-300">
          TESTIMONIALS
        </span>

        <h2 className="mt-6 text-5xl font-bold text-white">
          Loved by Developers
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
          Teams trust Nexora AI to simplify project management and improve productivity.
        </p>

      </div>

      <div className="mt-20 grid gap-8 lg:grid-cols-3">

        {testimonials.map((item, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * .1 }}
            whileHover={{ y: -10 }}
            className="rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl"
          >

            <div className="mb-6 flex gap-1">

              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  fill="currentColor"
                  className="text-yellow-400"
                />
              ))}

            </div>

            <p className="leading-8 text-gray-300">
              "{item.review}"
            </p>

            <div className="mt-8 flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-xl font-bold text-white">
                {item.name.charAt(0)}
              </div>

              <div>

                <h3 className="font-semibold text-white">
                  {item.name}
                </h3>

                <p className="text-sm text-gray-400">
                  {item.role}
                </p>

              </div>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}