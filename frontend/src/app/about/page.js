"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  BrainCircuit,
  Target,
  Eye,
  Rocket,
  ShieldCheck,
  BarChart3,
} from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">

      {/* HERO */}

      <section className="relative overflow-hidden border-b border-white/10">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(6,182,212,.18),transparent_60%)]" />

        <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 py-32 text-center">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .7 }}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-cyan-300"
          >
            <Sparkles size={16} />
            About Nexora AI
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .2 }}
            className="mt-8 max-w-5xl text-6xl font-black leading-tight lg:text-7xl"
          >
            Building the Future of
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              {" "}AI Project Management
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .4 }}
            className="mt-10 max-w-3xl text-lg leading-8 text-gray-400"
          >
            Nexora AI is a modern productivity platform that combines
            Artificial Intelligence, project management, analytics,
            automation and collaboration into one powerful workspace.
          </motion.p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">

            <Link
              href="/register"
              className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold"
            >
              Get Started
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/solutions"
              className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 hover:border-cyan-400"
            >
              Explore Solutions
            </Link>

          </div>

        </div>

      </section>

      {/* MISSION */}

      <section className="mx-auto max-w-7xl px-6 py-28">

        <div className="grid gap-8 lg:grid-cols-3">

          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl"
          >

            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/20">
              <Target className="text-cyan-400" />
            </div>

            <h2 className="text-3xl font-bold">
              Our Mission
            </h2>

            <p className="mt-6 leading-8 text-gray-400">
              Empower teams with AI-driven project management tools that
              increase productivity, improve collaboration and simplify
              complex workflows.
            </p>

          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl"
          >

            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-500/20">
              <Eye className="text-purple-400" />
            </div>

            <h2 className="text-3xl font-bold">
              Our Vision
            </h2>

            <p className="mt-6 leading-8 text-gray-400">
              Create the world's smartest project management ecosystem where
              AI becomes every team's productivity partner.
            </p>

          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl"
          >

            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/20">
              <Rocket className="text-blue-400" />
            </div>

            <h2 className="text-3xl font-bold">
              Innovation
            </h2>

            <p className="mt-6 leading-8 text-gray-400">
              We constantly innovate with modern technologies to build
              scalable, intelligent and secure software experiences.
            </p>

          </motion.div>

        </div>

      </section>

      {/* WHY NEXORA */}

      <section className="mx-auto max-w-7xl px-6 pb-24">

        <div className="mb-16 text-center">

          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-cyan-300">
            WHY NEXORA AI
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            Why Teams Choose Us
          </h2>

        </div>

        <div className="grid gap-8 lg:grid-cols-2">
            <motion.div
            whileHover={{ y: -8 }}
            className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl"
          >
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/20">
              <BrainCircuit className="text-cyan-400" />
            </div>

            <h3 className="text-3xl font-bold">
              AI-Powered Productivity
            </h3>

            <p className="mt-6 leading-8 text-gray-400">
              Nexora AI integrates intelligent automation, AI-powered
              recommendations and smart reporting to simplify project
              management and increase productivity.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl"
          >
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-500/20">
              <ShieldCheck className="text-purple-400" />
            </div>

            <h3 className="text-3xl font-bold">
              Secure & Reliable
            </h3>

            <p className="mt-6 leading-8 text-gray-400">
              Authentication, role-based access, secure APIs and scalable
              cloud architecture ensure enterprise-grade reliability and
              data protection.
            </p>
          </motion.div>
        </div>

      </section>

      {/* TECHNOLOGY */}

      <section className="mx-auto max-w-7xl px-6 py-28">

        <div className="text-center">

          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-cyan-300">
            TECHNOLOGY STACK
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            Built With Modern Technologies
          </h2>

        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {[
            "React",
            "Next.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Tailwind CSS",
            "Framer Motion",
            "Artificial Intelligence",
          ].map((tech) => (

            <motion.div
              key={tech}
              whileHover={{
                scale: 1.05,
                y: -6,
              }}
              className="rounded-2xl border border-white/10 bg-white/5 py-6 text-center backdrop-blur-xl"
            >
              <p className="font-semibold text-white">
                {tech}
              </p>
            </motion.div>

          ))}

        </div>

      </section>

      {/* STATS */}

      <section className="mx-auto max-w-7xl px-6 pb-28">

        <div className="grid gap-8 md:grid-cols-4">

          {[
            {
              value: "25K+",
              label: "Active Users",
            },
            {
              value: "120K+",
              label: "Projects",
            },
            {
              value: "1M+",
              label: "AI Requests",
            },
            {
              value: "99.9%",
              label: "Uptime",
            },
          ].map((item) => (

            <motion.div
              key={item.label}
              whileHover={{ y: -8 }}
              className="rounded-[30px] border border-white/10 bg-white/5 p-8 text-center backdrop-blur-2xl"
            >
              <BarChart3
                className="mx-auto mb-5 text-cyan-400"
                size={34}
              />

              <h2 className="text-5xl font-black text-white">
                {item.value}
              </h2>

              <p className="mt-4 text-gray-400">
                {item.label}
              </p>

            </motion.div>

          ))}

        </div>

      </section>

      {/* CTA */}

      <section className="mx-auto max-w-7xl px-6 pb-32">

        <div className="rounded-[40px] border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 via-white/5 to-purple-500/10 p-14 text-center">

          <h2 className="text-5xl font-black text-white">
            Ready to Experience
            <br />
            Nexora AI?
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-400">
            Join developers and teams using AI to build faster, collaborate
            smarter and manage projects efficiently.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">

            <Link
              href="/register"
              className="rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold"
            >
              Create Free Account
            </Link>

            <Link
              href="/login"
              className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 hover:border-cyan-400"
            >
              Login
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}