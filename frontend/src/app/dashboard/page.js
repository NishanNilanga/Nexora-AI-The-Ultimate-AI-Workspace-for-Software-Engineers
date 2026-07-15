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

  // Dummy Projects
  const projects = [
    {
      id: 1,
      name: "Nexora AI Dashboard",
      status: "In Progress",
      progress: "90%",
    },
    {
      id: 2,
      name: "Employee Management",
      status: "Completed",
      progress: "100%",
    },
    {
      id: 3,
      name: "Task Manager",
      status: "Planning",
      progress: "25%",
    },
  ];

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

          <main className="flex-1 min-h-screen bg-slate-900 text-white p-10">

            {/* Header */}
            <h1 className="text-4xl font-bold">
              Welcome 👋
            </h1>

            {/* Logout */}
            <button
              onClick={handleLogout}
              className="mt-6 px-5 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition"
            >
              Logout
            </button>

            {/* User Info */}
            <p className="mt-6 text-xl font-semibold">
              {user?.fullName}
            </p>

            <p className="text-gray-400">
              {user?.email}
            </p>

            {/* Dashboard Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10">

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

            <ProjectTable />

            <TaskTable />

          </main>
        </div>
      </>
    </ProtectedRoute>
  );
}