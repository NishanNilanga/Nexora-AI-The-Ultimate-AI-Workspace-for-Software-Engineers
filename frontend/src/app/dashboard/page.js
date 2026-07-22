"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import ProtectedRoute from "../../components/ProtectedRoute";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Card from "../../components/Card";
import ProjectTable from "../../components/ProjectTable";
import TaskTable from "../../components/TaskTable";
import api from "../../services/api";
import DashboardCharts from "../../components/DashboardCharts";
import AIAssistant from "../../components/AIAssistant";


export default function DashboardPage() {
  const router = useRouter();

  const [user, setUser] = useState(null);

  const [stats, setStats] = useState({
    projects: 0,
    tasks: 0,
    completed: 0,
    pending: 0,
    highPriority: 0,
  });

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        const savedUser = localStorage.getItem("user");

        if (savedUser) {
          setUser(JSON.parse(savedUser));
        }

        const response = await api.get("/dashboard");

        setStats(response.data.stats);
      } catch (error) {
        console.log(error);
      }
    };

    loadDashboard();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    router.push("/login");
  };

  return (
    <ProtectedRoute>
      <>
        <Navbar />

        <div className="flex">
          <Sidebar />

          <main className="flex-1 min-h-screen bg-slate-900 text-white p-8 lg:p-10">

            {/* ================= HERO SECTION ================= */}

            <div className="mb-10 rounded-3xl bg-gradient-to-r from-slate-800 via-slate-900 to-blue-900 border border-slate-700 p-8 shadow-2xl">

              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

                <div>

                  <p className="text-blue-400 font-semibold uppercase tracking-widest text-sm">
                    Welcome Back 👋
                  </p>

                  <h1 className="text-4xl lg:text-5xl font-extrabold mt-3 leading-tight">
                    {user?.fullName || "User"}
                  </h1>

                  <p className="text-slate-300 mt-4 text-lg max-w-2xl">
                    Welcome back to <span className="font-semibold text-blue-400">Nexora AI</span>.
                    Manage your projects, tasks and productivity from one modern dashboard.
                  </p>

                  <div className="flex flex-wrap gap-6 mt-6 text-slate-400">

                    <div>
                      📧 {user?.email}
                    </div>

                    <div>
                      📅 {new Date().toDateString()}
                    </div>

                  </div>

                </div>

                <div>

                  <button
                    onClick={handleLogout}
                    className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-xl font-semibold transition duration-300 shadow-lg"
                  >
                    Logout
                  </button>

                </div>

              </div>

            </div>

            {/* ================= DASHBOARD CARDS ================= */}

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

              <Card
                title="Projects"
                value={stats.projects}
                color="bg-gradient-to-r from-blue-600 to-indigo-600"
              />

              <Card
                title="Tasks"
                value={stats.tasks}
                color="bg-gradient-to-r from-emerald-600 to-green-600"
              />

              <Card
                title="Completed"
                value={stats.completed}
                color="bg-gradient-to-r from-purple-600 to-pink-600"
              />

              <Card
                title="Pending"
                value={stats.pending}
                color="bg-gradient-to-r from-orange-500 to-red-500"
              />

              <Card
                title="High Priority"
                value={stats.highPriority}
                color="bg-gradient-to-r from-red-600 to-pink-600"
              />

              <Card
                title="Progress"
                value="82%"
                color="bg-gradient-to-r from-teal-600 to-emerald-500"
              />

            </div>

            {/* ================= AI ASSISTANT ================= */}
            
            <AIAssistant />


            {/* ================= Charts ================= */}

            <DashboardCharts />



            {/* ================= TABLES ================= */}

            <div className="mt-10">
              <ProjectTable />
            </div>

            <div className="mt-10">
              <TaskTable />
            </div>

            


          </main>
        </div>
      </>
    </ProtectedRoute>
  );
}