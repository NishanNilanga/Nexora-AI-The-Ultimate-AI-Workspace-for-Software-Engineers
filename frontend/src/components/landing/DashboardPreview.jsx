"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  FolderKanban,
  BarChart3,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  CalendarDays,
  Bell,
} from "lucide-react";

export default function DashboardPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="relative hidden lg:flex items-center justify-center"
    >
      {/* Glow */}
      <div className="absolute h-[720px] w-[720px] rounded-full bg-cyan-500/15 blur-[180px]" />

      {/* Floating Card Top */}
      <motion.div
        animate={{
          y: [0, -12, 0],
          rotate: [0, 1, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute -left-10 top-12 z-30 w-56 rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-2xl"
      >
        <div className="flex items-center justify-between">
          <BrainCircuit className="text-cyan-400" />
          <Sparkles size={16} className="text-yellow-400" />
        </div>

        <h3 className="mt-5 text-lg font-bold text-white">
          AI Assistant
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-400">
          Weekly report generated successfully.
        </p>

        <div className="mt-5 rounded-xl bg-cyan-500/20 px-3 py-2 text-sm text-cyan-300">
          Ready to help 🚀
        </div>
      </motion.div>

      {/* Floating Card Bottom */}
      <motion.div
        animate={{
          y: [0, 12, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute -right-10 bottom-12 z-30 w-56 rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-2xl"
      >
        <div className="flex items-center justify-between">
          <CheckCircle2 className="text-green-400" />
          <ArrowUpRight className="text-cyan-400" size={18} />
        </div>

        <h3 className="mt-5 text-lg font-bold text-white">
          Productivity
        </h3>

        <h2 className="mt-2 text-4xl font-black text-cyan-400">
          +28%
        </h2>

        <p className="mt-2 text-sm text-gray-400">
          compared to last week
        </p>
      </motion.div>

      {/* Dashboard */}
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
        }}
        className="relative w-[640px] overflow-hidden rounded-[34px] border border-white/10 bg-[#0B1120]/80 p-7 shadow-[0_0_80px_rgba(0,255,255,0.08)] backdrop-blur-3xl"
      >
        {/* Header */}

        <div className="flex items-center justify-between">

          <div>

            <h2 className="text-2xl font-bold text-white">
              Nexora Dashboard
            </h2>

            <p className="mt-1 text-gray-400">
              AI Powered Workspace
            </p>

          </div>

          <div className="flex gap-3">

            <div className="rounded-xl bg-white/5 p-3">
              <Bell
                className="text-white"
                size={20}
              />
            </div>

            <div className="rounded-xl bg-cyan-500/20 p-3">
              <BrainCircuit
                className="text-cyan-400"
                size={20}
              />
            </div>

          </div>

        </div>

        {/* Top Cards */}

        <div className="mt-8 grid grid-cols-4 gap-4">

          <DashboardCard
            icon={<FolderKanban size={22} />}
            title="Projects"
            value="128"
            color="cyan"
          />

          <DashboardCard
            icon={<CheckCircle2 size={22} />}
            title="Completed"
            value="94"
            color="green"
          />

          <DashboardCard
            icon={<BarChart3 size={22} />}
            title="Growth"
            value="+34%"
            color="purple"
          />

          <DashboardCard
            icon={<CalendarDays size={22} />}
            title="Meetings"
            value="08"
            color="orange"
          />

        </div>

        {/* Analytics Section */}

        <div className="mt-8 grid grid-cols-3 gap-5">
            {/* Analytics Chart */}

          <div className="col-span-2 rounded-3xl border border-white/10 bg-white/5 p-6">

            <div className="mb-5 flex items-center justify-between">

              <div>

                <h3 className="text-lg font-semibold text-white">
                  Productivity Analytics
                </h3>

                <p className="text-sm text-gray-400">
                  Weekly performance overview
                </p>

              </div>

              <span className="rounded-full bg-green-500/20 px-3 py-1 text-sm text-green-400">
                +23%
              </span>

            </div>

            <div className="flex h-48 items-end gap-3">

              {[55, 90, 75, 120, 80, 145, 110].map((height, index) => (

                <motion.div
                  key={index}
                  initial={{ height: 0 }}
                  animate={{ height }}
                  transition={{
                    duration: .6,
                    delay: index * .08,
                  }}
                  className="flex-1 rounded-full bg-gradient-to-t from-cyan-500 via-blue-500 to-purple-500"
                />

              ))}

            </div>

          </div>

          {/* Activity */}

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">

            <h3 className="text-lg font-semibold text-white">
              Recent Activity
            </h3>

            <div className="mt-6 space-y-5">

              {[
                "AI generated weekly report",
                "Task completed",
                "New project created",
                "Meeting scheduled",
              ].map((item, i) => (

                <div
                  key={i}
                  className="flex items-start gap-3"
                >

                  <div className="mt-2 h-2 w-2 rounded-full bg-cyan-400" />

                  <div>

                    <p className="text-sm text-white">
                      {item}
                    </p>

                    <span className="text-xs text-gray-500">
                      2 min ago
                    </span>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* Bottom Section */}

        <div className="mt-8 grid grid-cols-2 gap-5">

          {/* AI Chat */}

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">

            <div className="flex items-center gap-3">

              <BrainCircuit className="text-cyan-400" />

              <h3 className="font-semibold text-white">
                AI Assistant
              </h3>

            </div>

            <div className="mt-6 space-y-4">

              <div className="rounded-2xl bg-cyan-500/10 p-4 text-sm text-cyan-200">
                Generate this week's project summary.
              </div>

              <div className="rounded-2xl bg-white/5 p-4 text-sm text-gray-300">
                Summary generated successfully. Productivity increased by 28%
                and 94 tasks were completed this week.
              </div>

            </div>

          </div>

          {/* Progress */}

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">

            <h3 className="font-semibold text-white">
              Project Progress
            </h3>

            <div className="mt-8 space-y-6">

              {[
                {
                  title: "Nexora Platform",
                  value: "92%",
                },
                {
                  title: "Mobile App",
                  value: "74%",
                },
                {
                  title: "AI Module",
                  value: "86%",
                },
              ].map((item) => (

                <div key={item.title}>

                  <div className="mb-2 flex justify-between">

                    <span className="text-sm text-gray-300">
                      {item.title}
                    </span>

                    <span className="text-sm text-cyan-400">
                      {item.value}
                    </span>

                  </div>

                  <div className="h-2 rounded-full bg-white/10">

                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: item.value }}
                      transition={{ duration: 1 }}
                      className="h-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
                    />

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </motion.div>

    </motion.div>
  );
}

function DashboardCard({ icon, title, value, color }) {
  const colors = {
    cyan: "text-cyan-400",
    green: "text-green-400",
    purple: "text-purple-400",
    orange: "text-orange-400",
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:border-cyan-400/40">

      <div className={colors[color]}>
        {icon}
      </div>

      <p className="mt-4 text-sm text-gray-400">
        {title}
      </p>

      <h2 className="mt-2 text-3xl font-bold text-white">
        {value}
      </h2>

    </div>
  );
}