"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

import {
  FolderKanban,
  Plus,
  Pencil,
  Trash2,
  LoaderCircle,
} from "lucide-react";

import ProtectedRoute from "../../components/ProtectedRoute";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [creating, setCreating] = useState(false);
  const [loading, setLoading] = useState(true);

  const [editingId, setEditingId] = useState(null);
  const [status, setStatus] = useState("active");

  useEffect(() => {
    fetchProjects();
  }, []);

  // ==========================
  // Fetch Projects
  // ==========================

  const fetchProjects = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:5000/api/projects",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setProjects(res.data.projects);
    } catch (error) {
      console.log(error);

      toast.error("Failed to load projects");
    } finally {
      setLoading(false);
    }
  };

  // ==========================
  // Create Project
  // ==========================

  const createProject = async () => {
    if (!title.trim()) {
      toast.error("Project title is required");
      return;
    }

    try {
      setCreating(true);

      const token = localStorage.getItem("token");

      await axios.post(
        "http://localhost:5000/api/projects",
        {
          title,
          description,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Project created successfully");

      setTitle("");
      setDescription("");

      fetchProjects();
    } catch (error) {
      console.log(error);

      toast.error("Failed to create project");
    } finally {
      setCreating(false);
    }
  };

  // ==========================
  // Update Project
  // ==========================

  const updateProject = async () => {
    if (!title.trim()) {
      toast.error("Project title is required");
      return;
    }

    try {
      setCreating(true);

      const token = localStorage.getItem("token");

      await axios.put(
        `http://localhost:5000/api/projects/${editingId}`,
        {
          title,
          description,
          status,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Project updated successfully");

      setEditingId(null);

      setTitle("");
      setDescription("");
      setStatus("active");

      fetchProjects();
    } catch (error) {
      console.log(error);

      toast.error("Failed to update project");
    } finally {
      setCreating(false);
    }
  };

  // ==========================
  // Delete Project
  // ==========================

  const deleteProject = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this project?"
    );

    if (!confirmDelete) return;

    try {
      const token = localStorage.getItem("token");

      await axios.delete(
        `http://localhost:5000/api/projects/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Project deleted successfully");

      fetchProjects();
    } catch (error) {
      console.log(error);

      toast.error("Failed to delete project");
    }
  };
  return (
    <ProtectedRoute>
      <>
        <Navbar />

        <div className="flex">

          <Sidebar />

          <main className="flex-1 min-h-screen bg-slate-900 p-10 text-white">

            {/* ================= Header ================= */}

            <div className="mb-10 flex items-center gap-4">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600/20">
                <FolderKanban size={34} className="text-blue-400" />
              </div>

              <div>

                <h1 className="text-4xl font-bold">
                  My Projects
                </h1>

                <p className="mt-1 text-slate-400">
                  Create, manage and organize your projects.
                </p>

              </div>

            </div>

            {/* ================= Create Form ================= */}

            <div className="mb-10 rounded-3xl border border-slate-700 bg-slate-800 p-8 shadow-2xl">

              <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">

                <Plus size={24} />

                {editingId ? "Edit Project" : "Create New Project"}

              </h2>

              <input
                type="text"
                placeholder="Project Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="mb-5 w-full rounded-xl border border-slate-600 bg-slate-700 p-4 outline-none transition focus:border-blue-500"
              />

              <textarea
                rows={4}
                placeholder="Project Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="mb-5 w-full rounded-xl border border-slate-600 bg-slate-700 p-4 outline-none transition focus:border-blue-500"
              />

              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="mb-6 w-full rounded-xl border border-slate-600 bg-slate-700 p-4 outline-none transition focus:border-blue-500"
              >
                <option value="active">Active</option>
                <option value="completed">Completed</option>
                <option value="archived">Archived</option>
              </select>

              <button
                onClick={editingId ? updateProject : createProject}
                disabled={creating}
                className="flex items-center gap-3 rounded-xl bg-blue-600 px-7 py-4 font-semibold transition hover:bg-blue-700 disabled:opacity-60"
              >
                {creating ? (
                  <>
                    <LoaderCircle size={20} className="animate-spin" />
                    {editingId ? "Updating..." : "Creating..."}
                  </>
                ) : (
                  <>
                    <Plus size={20} />
                    {editingId ? "Save Changes" : "Create Project"}
                  </>
                )}
              </button>

            </div>

            {/* ================= Projects ================= */}

            {loading ? (

              <div className="rounded-3xl border border-slate-700 bg-slate-800 p-8 text-center text-slate-400">
                Loading projects...
              </div>

            ) : projects.length === 0 ? (

              <div className="rounded-3xl border border-slate-700 bg-slate-800 p-10 text-center">

                <FolderKanban
                  size={60}
                  className="mx-auto mb-5 text-slate-500"
                />

                <h2 className="text-2xl font-bold">
                  No Projects Yet
                </h2>

                <p className="mt-3 text-slate-400">
                  Create your first project to get started.
                </p>

              </div>

            ) : (

              <div className="grid gap-6">

                {projects.map((project) => (

                  <div
                    key={project._id}
                    className="rounded-3xl border border-slate-700 bg-slate-800 p-7 shadow-xl transition hover:border-blue-500"
                  >

                    <div className="flex items-start justify-between">

                      <div>

                        <h2 className="text-2xl font-bold">
                          {project.title}
                        </h2>

                        <p className="mt-3 max-w-3xl text-slate-400">
                          {project.description}
                        </p>

                      </div>

                      <span
                        className={`rounded-full px-4 py-2 text-sm font-semibold ${
                          project.status === "completed"
                            ? "bg-green-500/20 text-green-400"
                            : project.status === "archived"
                            ? "bg-red-500/20 text-red-400"
                            : "bg-blue-500/20 text-blue-400"
                        }`}
                      >
                        {project.status}
                      </span>

                    </div>

                    <div className="mt-8 flex gap-4">

                      <button
                        onClick={() => {
                          setEditingId(project._id);
                          setTitle(project.title);
                          setDescription(project.description);
                          setStatus(project.status);

                          window.scrollTo({
                            top: 0,
                            behavior: "smooth",
                          });
                        }}
                        className="flex items-center gap-2 rounded-xl bg-yellow-500 px-5 py-3 font-semibold text-black transition hover:bg-yellow-400"
                      >
                        <Pencil size={18} />
                        Edit
                      </button>

                      <button
                        onClick={() => deleteProject(project._id)}
                        className="flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 font-semibold transition hover:bg-red-700"
                      >
                        <Trash2 size={18} />
                        Delete
                      </button>

                    </div>

                  </div>

                ))}

              </div>

            )}

          </main>

        </div>

      </>
    </ProtectedRoute>
  );
}