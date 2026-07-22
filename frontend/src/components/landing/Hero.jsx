"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Play,
  Sparkles,
  ShieldCheck,
  Star,
  CheckCircle2,
} from "lucide-react";
import DashboardPreview from "./DashboardPreview";

const stats = [
  {
    value: "25K+",
    label: "Developers",
  },
  {
    value: "120K+",
    label: "Projects",
  },
  {
    value: "99.9%",
    label: "Uptime",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.15),transparent_55%)]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-32 pb-20">

        <div className="grid w-full items-center gap-20 lg:grid-cols-2">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
          >

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: .2 }}
              className="mb-8 inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-5 py-3 backdrop-blur-xl"
            >
              <Sparkles
                size={16}
                className="text-cyan-400"
              />

              <span className="text-sm font-medium text-cyan-300">
                AI Powered Project Management Platform
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .3 }}
              className="text-6xl font-black leading-[1.05] tracking-tight text-white lg:text-8xl"
            >
              Build

              <br />

              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Faster.
              </span>

              <br />

              Scale Smarter.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: .5 }}
              className="mt-8 max-w-xl text-lg leading-8 text-gray-400"
            >
              Nexora AI combines intelligent project management,
              analytics, automation and AI assistance into one
              modern productivity platform for developers,
              startups and enterprise teams.
            </motion.p>

            {/* FEATURES */}

            <div className="mt-10 grid gap-4">

              <div className="flex items-center gap-3">

                <CheckCircle2
                  size={18}
                  className="text-cyan-400"
                />

                <span className="text-gray-300">
                  AI Powered Workflow Automation
                </span>

              </div>

              <div className="flex items-center gap-3">

                <CheckCircle2
                  size={18}
                  className="text-cyan-400"
                />

                <span className="text-gray-300">
                  Smart Analytics Dashboard
                </span>

              </div>

              <div className="flex items-center gap-3">

                <CheckCircle2
                  size={18}
                  className="text-cyan-400"
                />

                <span className="text-gray-300">
                  Secure Cloud Workspace
                </span>

              </div>

            </div>

            {/* BUTTONS */}

            <div className="mt-12 flex flex-wrap gap-5">

              <Link
                href="/register"
                className="group flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-5 font-semibold text-white transition hover:scale-105"
              >
                Start Free

                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </Link>

              <button className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-8 py-5 text-white backdrop-blur-xl transition hover:border-cyan-400">

                <Play
                  size={18}
                  className="text-cyan-400"
                />

                Watch Demo

              </button>

            </div>

            {/* TRUST */}

            <div className="mt-12 flex flex-wrap items-center gap-6">

              <div className="flex items-center gap-2">

                <ShieldCheck
                  size={18}
                  className="text-green-400"
                />

                <span className="text-sm text-gray-400">
                  Enterprise Security
                </span>

              </div>

              <div className="flex items-center gap-2">

                <Star
                  fill="currentColor"
                  size={16}
                  className="text-yellow-400"
                />

                <span className="text-sm text-gray-400">
                  Trusted by Developers
                </span>

              </div>

            </div>

            {/* STATS */}

            <div className="mt-16 grid grid-cols-3 gap-8">

              {stats.map((item) => (

                <div key={item.label}>

                  <h2 className="text-4xl font-black text-white">

                    {item.value}

                  </h2>

                  <p className="mt-2 text-gray-400">

                    {item.label}

                  </p>

                </div>

              ))}

            </div>

          </motion.div>

          {/* RIGHT */}

          <DashboardPreview />

        </div>

      </div>

    </section>
  );
}