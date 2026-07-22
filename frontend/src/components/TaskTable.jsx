"use client";

import {
  CheckCircle2,
  Clock3,
  CircleDashed,
  ClipboardCheck,
  AlertTriangle,
  Flag,
} from "lucide-react";

export default function TaskTable() {
  const tasks = [
    {
      id: 1,
      title: "Build Login API",
      priority: "High",
      status: "Completed",
    },
    {
      id: 2,
      title: "Design Dashboard UI",
      priority: "Medium",
      status: "In Progress",
    },
    {
      id: 3,
      title: "Connect MongoDB",
      priority: "High",
      status: "Pending",
    },
    {
      id: 4,
      title: "Create Analytics Chart",
      priority: "Low",
      status: "Planning",
    },
  ];

  const getPriorityBadge = (priority) => {
    switch (priority) {
      case "High":
        return (
          <span className="inline-flex items-center gap-2 rounded-full bg-red-500/20 px-3 py-1 text-sm font-semibold text-red-400">
            <AlertTriangle size={16} />
            High
          </span>
        );

      case "Medium":
        return (
          <span className="inline-flex items-center gap-2 rounded-full bg-yellow-500/20 px-3 py-1 text-sm font-semibold text-yellow-400">
            <Flag size={16} />
            Medium
          </span>
        );

      default:
        return (
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 px-3 py-1 text-sm font-semibold text-emerald-400">
            <Flag size={16} />
            Low
          </span>
        );
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case "Completed":
        return (
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 px-3 py-1 text-sm font-semibold text-emerald-400">
            <CheckCircle2 size={16} />
            Completed
          </span>
        );

      case "In Progress":
        return (
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-500/20 px-3 py-1 text-sm font-semibold text-blue-400">
            <CircleDashed size={16} />
            In Progress
          </span>
        );

      case "Pending":
        return (
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-500/20 px-3 py-1 text-sm font-semibold text-orange-400">
            <Clock3 size={16} />
            Pending
          </span>
        );

      default:
        return (
          <span className="inline-flex items-center gap-2 rounded-full bg-slate-600/30 px-3 py-1 text-sm font-semibold text-slate-300">
            <Clock3 size={16} />
            Planning
          </span>
        );
    }
  };

  return (
    <div className="mt-12">

      {/* Header */}

      <div className="mb-6">

        <h2 className="text-3xl font-bold text-white">
          Recent Tasks
        </h2>

        <p className="mt-1 text-slate-400">
          Monitor and track your latest project tasks.
        </p>

      </div>

      {/* Table */}

      <div className="overflow-hidden rounded-3xl border border-slate-700 bg-slate-800 shadow-2xl">

        <table className="w-full">

          <thead className="border-b border-slate-700 bg-slate-900">

            <tr>

              <th className="px-6 py-5 text-left text-sm uppercase tracking-wider text-slate-400">
                Task
              </th>

              <th className="px-6 py-5 text-left text-sm uppercase tracking-wider text-slate-400">
                Priority
              </th>

              <th className="px-6 py-5 text-left text-sm uppercase tracking-wider text-slate-400">
                Status
              </th>

            </tr>

          </thead>

          <tbody>

            {tasks.map((task) => (

              <tr
                key={task.id}
                className="border-b border-slate-700 transition-all duration-300 hover:bg-slate-700/40"
              >

                {/* Task */}

                <td className="px-6 py-5">

                  <div className="flex items-center gap-4">

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/20">

                      <ClipboardCheck
                        size={22}
                        className="text-cyan-400"
                      />

                    </div>

                    <div>

                      <h3 className="font-semibold text-white">
                        {task.title}
                      </h3>

                      <p className="text-sm text-slate-400">
                        Assigned to you
                      </p>

                    </div>

                  </div>

                </td>

                {/* Priority */}

                <td className="px-6 py-5">
                  {getPriorityBadge(task.priority)}
                </td>

                {/* Status */}

                <td className="px-6 py-5">
                  {getStatusBadge(task.status)}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}