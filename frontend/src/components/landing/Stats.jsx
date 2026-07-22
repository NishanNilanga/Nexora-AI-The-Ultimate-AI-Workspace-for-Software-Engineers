"use client";

import { motion } from "framer-motion";
import {
  Users,
  FolderKanban,
  BrainCircuit,
  TrendingUp,
} from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "25K+",
    title: "Active Users",
    color: "text-cyan-400",
  },
  {
    icon: FolderKanban,
    value: "120K+",
    title: "Projects",
    color: "text-blue-400",
  },
  {
    icon: BrainCircuit,
    value: "1M+",
    title: "AI Requests",
    color: "text-purple-400",
  },
  {
    icon: TrendingUp,
    value: "99.9%",
    title: "Uptime",
    color: "text-green-400",
  },
];

export default function Stats() {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-6 py-24">

      <div className="rounded-[40px] border border-white/10 bg-gradient-to-r from-cyan-500/10 via-white/5 to-purple-500/10 p-10 backdrop-blur-3xl">

        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">

          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * .1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div
                  className={`mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 ${item.color}`}
                >
                  <Icon size={30} />
                </div>

                <h2 className="text-5xl font-black text-white">
                  {item.value}
                </h2>

                <p className="mt-3 text-gray-400">
                  {item.title}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}