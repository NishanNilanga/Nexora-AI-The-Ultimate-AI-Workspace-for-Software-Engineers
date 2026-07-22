"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

export default function AIShowcase() {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-6 py-28">

      <div className="grid items-center gap-20 lg:grid-cols-2">

        {/* Left */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
        >

          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-cyan-300">
            <BrainCircuit size={16} />
            AI Powered Workspace
          </div>

          <h2 className="mt-8 text-5xl font-bold leading-tight text-white">
            Let AI Manage
            <br />
            Your Workflow.
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-400">
            Generate reports, summarize meetings, organize tasks,
            analyze project progress and receive intelligent
            recommendations in seconds.
          </p>

          <div className="mt-10 space-y-5">

            <div className="flex items-center gap-3">

              <CheckCircle2 className="text-cyan-400"/>

              <span className="text-gray-300">
                AI Generated Weekly Reports
              </span>

            </div>

            <div className="flex items-center gap-3">

              <CheckCircle2 className="text-cyan-400"/>

              <span className="text-gray-300">
                Smart Task Recommendations
              </span>

            </div>

            <div className="flex items-center gap-3">

              <CheckCircle2 className="text-cyan-400"/>

              <span className="text-gray-300">
                Instant Project Insights
              </span>

            </div>

          </div>

        </motion.div>

        {/* Right */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="relative"
        >

          <div className="rounded-[36px] border border-white/10 bg-white/5 p-8 backdrop-blur-3xl">

            <div className="flex items-center justify-between">

              <div className="flex items-center gap-3">

                <BrainCircuit className="text-cyan-400"/>

                <span className="font-semibold text-white">
                  Nexora AI
                </span>

              </div>

              <Sparkles className="text-yellow-400"/>

            </div>

            <div className="mt-8 rounded-2xl bg-cyan-500/10 p-5 text-cyan-200">

              Generate a weekly report for my team.

            </div>

            <motion.div

              initial={{ opacity:0 }}

              whileInView={{ opacity:1 }}

              transition={{ delay:.4 }}

              className="mt-6 rounded-2xl bg-white/5 p-6"

            >

              <p className="text-gray-300 leading-8">

                ✅ 128 Tasks Completed

                <br /><br />

                📈 Productivity increased by 23%.

                <br /><br />

                🤖 AI recommends focusing on
                high-priority backend APIs this week.

              </p>

            </motion.div>

            <div className="mt-8 flex items-center justify-between rounded-2xl bg-white/5 p-5">

              <span className="text-white">
                AI Confidence
              </span>

              <div className="flex items-center gap-2 text-cyan-400">

                98%

                <ArrowUpRight size={18}/>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}