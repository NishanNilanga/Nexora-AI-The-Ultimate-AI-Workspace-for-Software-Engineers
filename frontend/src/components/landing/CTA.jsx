"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, PlayCircle } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-6 py-32">

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .7 }}
        className="relative overflow-hidden rounded-[42px] border border-cyan-500/20 bg-gradient-to-br from-[#08121f] via-[#0b1728] to-[#08121f] p-14 lg:p-20"
      >

        {/* Glow */}

        <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-[140px]" />

        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-purple-500/20 blur-[140px]" />

        {/* Grid */}

        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div className="relative grid items-center gap-14 lg:grid-cols-2">

          {/* Left */}

          <div>

            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-cyan-300">

              <Sparkles size={16} />

              Ready to Build Smarter?

            </div>

            <h2 className="mt-8 text-5xl font-black leading-tight text-white lg:text-6xl">

              The Future of
              <br />

              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">

                AI Project Management

              </span>

            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">

              Collaborate with your team, automate repetitive work,
              generate AI insights and manage every project from one
              beautiful workspace.

            </p>

          </div>

          {/* Right */}

          <div className="flex flex-col gap-5 lg:items-end">

            <Link
              href="/register"
              className="flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-10 py-5 text-lg font-semibold text-white transition hover:scale-105 lg:w-[320px]"
            >

              Get Started Free

              <ArrowRight size={20} />

            </Link>

            <Link
              href="/login"
              className="flex w-full items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-10 py-5 text-lg text-white transition hover:border-cyan-400 lg:w-[320px]"
            >

              <PlayCircle size={20} />

              Explore Platform

            </Link>

            <p className="mt-3 text-center text-sm text-gray-500 lg:w-[320px]">

              No credit card required • Free forever plan

            </p>

          </div>

        </div>

      </motion.div>

    </section>
  );
}