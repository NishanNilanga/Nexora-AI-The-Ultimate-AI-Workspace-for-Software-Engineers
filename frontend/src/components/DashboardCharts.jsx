

"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";

export default function DashboardCharts() {

  const taskData = [
    {
      name: "Mon",
      tasks: 5,
    },
    {
      name: "Tue",
      tasks: 8,
    },
    {
      name: "Wed",
      tasks: 6,
    },
    {
      name: "Thu",
      tasks: 10,
    },
    {
      name: "Fri",
      tasks: 9,
    },
    {
      name: "Sat",
      tasks: 4,
    },
    {
      name: "Sun",
      tasks: 7,
    },
  ];

  const projectData = [
    {
      name: "Active",
      value: 12,
    },
    {
      name: "Completed",
      value: 8,
    },
    {
      name: "Archived",
      value: 3,
    },
  ];

  const COLORS = [
    "#3B82F6",
    "#22C55E",
    "#EF4444",
  ];

  return (

    <div className="grid gap-8 mt-10 xl:grid-cols-2">

      {/* ================= Bar Chart ================= */}

      <div className="rounded-3xl border border-slate-700 bg-slate-800 p-6 shadow-2xl">

        <h2 className="mb-6 text-2xl font-bold">
          📈 Weekly Task Progress
        </h2>

        <ResponsiveContainer
          width="100%"
          height={320}
        >

          <BarChart data={taskData}>

            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#334155"
            />

            <XAxis
              dataKey="name"
              stroke="#94A3B8"
            />

            <YAxis
              stroke="#94A3B8"
            />

            <Tooltip />

            <Bar
              dataKey="tasks"
              fill="#3B82F6"
              radius={[8,8,0,0]}
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

      {/* ================= Pie Chart ================= */}

      <div className="rounded-3xl border border-slate-700 bg-slate-800 p-6 shadow-2xl">

        <h2 className="mb-6 text-2xl font-bold">
          📊 Project Statistics
        </h2>

        <ResponsiveContainer
          width="100%"
          height={320}
        >

          <PieChart>

            <Pie
              data={projectData}
              dataKey="value"
              outerRadius={110}
              label
            >

              {projectData.map((entry,index)=>(

                <Cell
                  key={index}
                  fill={COLORS[index]}
                />

              ))}

            </Pie>

            <Tooltip />

          </PieChart>

        </ResponsiveContainer>

      </div>

    </div>

  );

}