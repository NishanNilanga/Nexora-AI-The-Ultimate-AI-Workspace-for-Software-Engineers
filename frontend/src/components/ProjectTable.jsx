"use client";

import {
  FolderKanban,
  CheckCircle2,
  Clock3,
  LoaderCircle,
} from "lucide-react";

export default function ProjectTable() {
  const projects = [
    {
      id: 1,
      name: "Nexora AI Dashboard",
      status: "In Progress",
      progress: 90,
    },
    {
      id: 2,
      name: "Employee Management",
      status: "Completed",
      progress: 100,
    },
    {
      id: 3,
      name: "Task Manager",
      status: "Planning",
      progress: 25,
    },
  ];

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
            <LoaderCircle size={16} />
            In Progress
          </span>
        );

      default:
        return (
          <span className="inline-flex items-center gap-2 rounded-full bg-yellow-500/20 px-3 py-1 text-sm font-semibold text-yellow-400">
            <Clock3 size={16} />
            Planning
          </span>
        );
    }
  };

  return (
    <div className="mt-12">

      {/* Header */}

      <div className="flex items-center justify-between mb-6">

        <div>

          <h2 className="text-3xl font-bold text-white">
            Recent Projects
          </h2>

          <p className="text-slate-400 mt-1">
            Overview of your latest projects
          </p>

        </div>

      </div>

      {/* Table */}

      <div className="overflow-hidden rounded-3xl border border-slate-700 bg-slate-800 shadow-2xl">

        <table className="w-full">

          <thead className="border-b border-slate-700 bg-slate-900">

            <tr>

              <th className="px-6 py-5 text-left text-sm uppercase tracking-wider text-slate-400">
                Project
              </th>

              <th className="px-6 py-5 text-left text-sm uppercase tracking-wider text-slate-400">
                Status
              </th>

              <th className="px-6 py-5 text-left text-sm uppercase tracking-wider text-slate-400">
                Progress
              </th>

            </tr>

          </thead>

          <tbody>

            {projects.map((project) => (

              <tr
                key={project.id}
                className="border-b border-slate-700 transition-all duration-300 hover:bg-slate-700/40"
              >

                {/* Project */}

                <td className="px-6 py-5">

                  <div className="flex items-center gap-4">

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/20">

                      <FolderKanban
                        size={22}
                        className="text-blue-400"
                      />

                    </div>

                    <div>

                      <h3 className="font-semibold text-white">
                        {project.name}
                      </h3>

                      <p className="text-sm text-slate-400">
                        MERN Stack Project
                      </p>

                    </div>

                  </div>

                </td>

                {/* Status */}

                <td className="px-6 py-5">
                  {getStatusBadge(project.status)}
                </td>

                {/* Progress */}

                <td className="px-6 py-5">

                  <div className="flex items-center gap-4">

                    <div className="h-3 w-40 overflow-hidden rounded-full bg-slate-700">

                      <div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-600"
                        style={{
                          width: `${project.progress}%`,
                        }}
                      ></div>

                    </div>

                    <span className="font-semibold text-white">
                      {project.progress}%
                    </span>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}