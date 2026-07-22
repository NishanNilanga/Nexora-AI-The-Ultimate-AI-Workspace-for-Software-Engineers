"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  BrainCircuit,
  FolderKanban,
  CheckCircle2,
  BarChart3,
  Users,
  Workflow,
} from "lucide-react";

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">

      {/* HERO */}

      <section className="relative overflow-hidden border-b border-white/10">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(6,182,212,.18),transparent_60%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-32">

          <div className="grid items-center gap-20 lg:grid-cols-2">

            {/* LEFT */}

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
            >

              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-cyan-300">

                <Sparkles size={16} />

                Smart Business Solutions

              </div>

              <h1 className="mt-8 text-6xl font-black leading-tight lg:text-7xl">

                Powerful AI
                <br />

                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">

                  Solutions

                </span>

                <br />

                For Modern Teams

              </h1>

              <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">

                Nexora AI provides intelligent project management,
                collaboration, workflow automation and real-time
                analytics to help teams build faster and smarter.

              </p>

              <div className="mt-10 flex flex-wrap gap-5">

                <Link
                  href="/register"
                  className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold"
                >

                  Start Free

                  <ArrowRight size={18} />

                </Link>

                <Link
                  href="/about"
                  className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 hover:border-cyan-400"
                >
                  Learn More
                </Link>

              </div>

            </motion.div>

            {/* RIGHT */}

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="rounded-[36px] border border-white/10 bg-white/5 p-8 backdrop-blur-3xl"
            >

              <div className="grid gap-5">

                <SolutionMiniCard
                  icon={<BrainCircuit />}
                  title="AI Assistant"
                  value="Generate Reports"
                />

                <SolutionMiniCard
                  icon={<FolderKanban />}
                  title="Projects"
                  value="128 Active Projects"
                />

                <SolutionMiniCard
                  icon={<CheckCircle2 />}
                  title="Tasks"
                  value="94 Completed Today"
                />

                <SolutionMiniCard
                  icon={<BarChart3 />}
                  title="Analytics"
                  value="+28% Productivity"
                />

              </div>

            </motion.div>

          </div>

        </div>

      </section>

      {/* OUR SOLUTIONS */}

      <section className="mx-auto max-w-7xl px-6 py-28">

        <div className="text-center">

          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-cyan-300">

            OUR SOLUTIONS

          </span>

          <h2 className="mt-6 text-5xl font-bold">

            Everything Your Team Needs

          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">

            Discover intelligent tools designed to simplify collaboration,
            automate workflows and maximize productivity.

          </p>

        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          <SolutionCard
            icon={BrainCircuit}
            title="AI Assistant"
            desc="Generate reports, summarize meetings and receive intelligent project recommendations instantly."
          />

          <SolutionCard
            icon={FolderKanban}
            title="Project Management"
            desc="Plan, organize and monitor projects with powerful dashboards and smart workflows."
          />

          <SolutionCard
            icon={CheckCircle2}
            title="Task Tracking"
            desc="Track every task with priorities, deadlines and real-time progress updates."
          />

          <SolutionCard
            icon={Users}
            title="Team Collaboration"
            desc="Collaborate with your entire team in one centralized workspace."
          />

          <SolutionCard
            icon={Workflow}
            title="Workflow Automation"
            desc="Automate repetitive processes using AI-powered automation."
          />

          <SolutionCard
            icon={BarChart3}
            title="Analytics Dashboard"
            desc="Visualize productivity using real-time reports and interactive charts."
          />

        </div>

      </section>
      {/* WHY CHOOSE NEXORA */}

      <section className="mx-auto max-w-7xl px-6 pb-28">

        <div className="mb-16 text-center">

          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-cyan-300">
            WHY CHOOSE US
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            Built For Modern Development Teams
          </h2>

        </div>

        <div className="grid gap-8 lg:grid-cols-2">

          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl"
          >
            <BrainCircuit className="mb-6 text-cyan-400" size={38} />

            <h3 className="text-3xl font-bold">
              Intelligent AI Automation
            </h3>

            <p className="mt-6 leading-8 text-gray-400">
              Reduce repetitive work with AI-powered recommendations,
              automatic reporting and smart project insights that help
              your team focus on what matters most.
            </p>

          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl"
          >
            <BarChart3 className="mb-6 text-purple-400" size={38} />

            <h3 className="text-3xl font-bold">
              Real-Time Analytics
            </h3>

            <p className="mt-6 leading-8 text-gray-400">
              Monitor project performance, productivity trends and team
              progress using interactive dashboards and AI-driven
              analytics.
            </p>

          </motion.div>

        </div>

      </section>

      {/* PLATFORM HIGHLIGHTS */}

      <section className="mx-auto max-w-7xl px-6 pb-28">

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {[
            {
              value: "25K+",
              title: "Developers",
            },
            {
              value: "120K+",
              title: "Projects",
            },
            {
              value: "1M+",
              title: "AI Requests",
            },
            {
              value: "99.9%",
              title: "Uptime",
            },
          ].map((item) => (

            <motion.div
              key={item.title}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="rounded-[28px] border border-white/10 bg-white/5 p-8 text-center backdrop-blur-2xl"
            >

              <h2 className="text-5xl font-black text-cyan-400">
                {item.value}
              </h2>

              <p className="mt-4 text-gray-400">
                {item.title}
              </p>

            </motion.div>

          ))}

        </div>

      </section>

      {/* CTA */}

      <section className="mx-auto max-w-7xl px-6 pb-32">

        <div className="rounded-[40px] border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 via-white/5 to-purple-500/10 p-14 text-center">

          <h2 className="text-5xl font-black">

            Ready to Transform
            <br />

            Your Workflow?

          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-400">

            Join thousands of developers and teams already using
            Nexora AI to manage projects, automate workflows and
            collaborate smarter.

          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">

            <Link
              href="/register"
              className="rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold"
            >
              Get Started Free
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

function SolutionMiniCard({ icon, title, value }) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="flex items-center gap-4">
        <div className="rounded-xl bg-cyan-500/20 p-3 text-cyan-400">
          {icon}
        </div>

        <div>
          <p className="text-sm text-gray-400">
            {title}
          </p>

          <h3 className="font-semibold text-white">
            {value}
          </h3>
        </div>
      </div>
    </div>
  );
}

function SolutionCard({ icon: Icon, title, desc }) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      className="rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl"
    >
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/20">
        <Icon className="text-cyan-400" size={30} />
      </div>

      <h3 className="text-2xl font-bold text-white">
        {title}
      </h3>

      <p className="mt-5 leading-8 text-gray-400">
        {desc}
      </p>
    </motion.div>
  );
}