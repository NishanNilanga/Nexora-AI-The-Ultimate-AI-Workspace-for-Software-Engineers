"use client";

import { useEffect, useState } from "react";
import axios from "axios";

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

  const createProject = async () => {
  if (!title.trim()) {
    alert("Project title is required");
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

    // Clear form
    setTitle("");
    setDescription("");

    // Refresh project list
    fetchProjects();

  } catch (error) {
    console.log(error);
    alert("Failed to create project");
  } finally {
    setCreating(false);
  }
};

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

    // Refresh projects
    fetchProjects();

  } catch (error) {
    console.log(error);
    alert("Failed to delete project");
  }
};

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
    } finally {
      setLoading(false);
    }
  };

  const updateProject = async () => {
  if (!title.trim()) {
    alert("Project title is required");
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

    // Reset form
    setEditingId(null);
    setTitle("");
    setDescription("");
    setStatus("active");

    // Refresh projects
    fetchProjects();

  } catch (error) {
    console.log(error);
    alert("Failed to update project");
  } finally {
    setCreating(false);
  }
};

  return (
    <ProtectedRoute>
      <>
        <Navbar />

        <div className="flex">
          <Sidebar />

          <main className="flex-1 min-h-screen bg-slate-900 text-white p-10">

            <h1 className="text-4xl font-bold mb-8">
              📁 My Projects
            </h1>

            <div className="bg-slate-800 p-6 rounded-xl mb-8 border border-slate-700">

                <h2 className="text-2xl font-bold mb-4">
                    ➕ Create New Project
                </h2>

                <input
                    type="text"
                    placeholder="Project Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full mb-4 p-3 rounded-lg bg-slate-700 border border-slate-600 outline-none"
                />

                <textarea
                    placeholder="Project Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={4}
                    className="w-full mb-4 p-3 rounded-lg bg-slate-700 border border-slate-600 outline-none"
                />

                <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="w-full mb-4 p-3 rounded-lg bg-slate-700 border border-slate-600 outline-none"
                    >
                    <option value="active">Active</option>
                    <option value="completed">Completed</option>
                    <option value="archived">Archived</option>
                </select>

                <button
                    onClick={editingId ? updateProject : createProject}
                    disabled={creating}
                    className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold disabled:opacity-50"
                    >
                    {creating
                        ? editingId
                        ? "Updating..."
                        : "Creating..."
                        : editingId
                        ? "Save Changes"
                        : "Create Project"}
                </button>

                </div>

            {loading ? (
              <p className="text-gray-400">Loading projects...</p>
            ) : projects.length === 0 ? (
              <div className="bg-slate-800 rounded-xl p-6">
                <p className="text-gray-400">
                  No projects found.
                </p>
              </div>
            ) : (
              <div className="grid gap-6">
                {projects.map((project) => (
                  <div
                    key={project._id}
                    className="bg-slate-800 rounded-xl p-6 border border-slate-700"
                  >
                  <h2 className="text-2xl font-bold">
                    {project.title}
                    </h2>

                    <p className="text-gray-400 mt-2">
                    {project.description}
                    </p>

                    <div className="mt-4">
                    <span className="px-3 py-1 bg-green-600 rounded-full text-sm">
                        {project.status}
                    </span>
                    </div>

                    <div className="flex gap-3 mt-6">
                    <button
                        onClick={() => {
                            setEditingId(project._id);
                            setTitle(project.title);
                            setDescription(project.description);
                            setStatus(project.status);
                        }}
                        className="px-5 py-2 rounded-lg bg-yellow-500 hover:bg-yellow-600 font-semibold"
                        >
                        ✏️ Edit
                    </button>

                    <button
                        onClick={() => deleteProject(project._id)}
                        className="px-5 py-2 rounded-lg bg-red-600 hover:bg-red-700 font-semibold"
                    >
                        🗑 Delete
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