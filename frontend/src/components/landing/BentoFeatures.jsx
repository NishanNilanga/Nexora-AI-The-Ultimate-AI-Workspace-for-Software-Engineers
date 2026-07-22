"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  BarChart3,
  FolderKanban,
  Users,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

const cards = [
  {
    title: "AI Assistant",
    desc: "Generate reports, summarize projects and receive intelligent recommendations instantly.",
    icon: BrainCircuit,
    span: "md:col-span-2",
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "Analytics",
    desc: "Monitor productivity with real-time analytics.",
    icon: BarChart3,
    span: "",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Projects",
    desc: "Manage projects using modern workflows.",
    icon: FolderKanban,
    span: "",
    color: "from-blue-500 to-indigo-500",
  },
  {
    title: "Collaboration",
    desc: "Work together with your team seamlessly.",
    icon: Users,
    span: "md:col-span-2",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Automation",
    desc: "Automate repetitive tasks using AI.",
    icon: Sparkles,
    span: "",
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Enterprise Security",
    desc: "Advanced authentication and encrypted cloud infrastructure.",
    icon: ShieldCheck,
    span: "",
    color: "from-cyan-500 to-sky-500",
  },
];

export default function BentoFeatures() {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-6 py-28">

      <div className="text-center">

        <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-cyan-300">
          FEATURES
        </span>

        <h2 className="mt-6 text-5xl font-bold text-white">
          Powerful Features
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
          Everything you need to manage projects with the power of AI.
        </p>

      </div>

      <div className="mt-20 grid gap-6 md:grid-cols-3">

        {cards.map((card, index) => {
          const Icon = card.icon;

          return (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className={`group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl ${card.span}`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 transition duration-500 group-hover:opacity-10`}
              />

              <div
                className={`mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${card.color}`}
              >
                <Icon className="text-white" size={30} />
              </div>

              <h3 className="text-2xl font-bold text-white">
                {card.title}
              </h3>

              <p className="mt-5 leading-8 text-gray-400">
                {card.desc}
              </p>

            </motion.div>
          );
        })}

      </div>

    </section>
  );
}