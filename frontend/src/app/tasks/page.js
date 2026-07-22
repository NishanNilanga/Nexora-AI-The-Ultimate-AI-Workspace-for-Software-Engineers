"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

import {
  ClipboardCheck,
  Plus,
  Pencil,
  Trash2,
  LoaderCircle,
} from "lucide-react";

import ProtectedRoute from "../../components/ProtectedRoute";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

export default function TasksPage() {
  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("medium");
  const [project, setProject] = useState("");
  const [dueDate, setDueDate] = useState("");

  const [creating, setCreating] = useState(false);
  const [loading, setLoading] = useState(true);

  const [editingId, setEditingId] = useState(null);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    fetchProjects();
    fetchTasks();
  }, []);

  // ===========================
  // Fetch Projects
  // ===========================

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

      if (res.data.projects.length > 0) {
        setProject(res.data.projects[0]._id);
      }

    } catch (error) {
      console.log(error);
      toast.error("Failed to load projects");
    }
  };

  // ===========================
  // Fetch Tasks
  // ===========================

  const fetchTasks = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:5000/api/tasks",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setTasks(res.data.tasks);

    } catch (error) {
      console.log(error);
      toast.error("Failed to load tasks");
    } finally {
      setLoading(false);
    }
  };

  // ===========================
  // Create Task
  // ===========================

  const createTask = async () => {

    if (!title.trim()) {
      toast.error("Task title is required");
      return;
    }

    if (!project) {
      toast.error("Please create a project first");
      return;
    }

    try {

      setCreating(true);

      const token = localStorage.getItem("token");

      await axios.post(
        "http://localhost:5000/api/tasks",
        {
          title,
          description,
          priority,
          dueDate,
          project,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Task created successfully");

      setTitle("");
      setDescription("");
      setPriority("medium");

      if (projects.length > 0) {
        setProject(projects[0]._id);
      } else {
        setProject("");
      }

      setDueDate("");

      fetchTasks();

    } catch (error) {
      console.log(error);
      toast.error("Failed to create task");
    } finally {
      setCreating(false);
    }

  };

  // ===========================
  // Delete Task
  // ===========================

  const deleteTask = async (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this task?"
    );

    if (!confirmDelete) return;

    try {

      const token = localStorage.getItem("token");

      await axios.delete(
        `http://localhost:5000/api/tasks/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Task deleted successfully");

      fetchTasks();

    } catch (error) {
      console.log(error);
      toast.error("Failed to delete task");
    }

  };

  // ===========================
  // Start Edit
  // ===========================

  const startEdit = (task) => {

    setEditingId(task._id);

    setTitle(task.title);
    setDescription(task.description);
    setPriority(task.priority);
    setProject(task.project._id);

    if (task.dueDate) {
      setDueDate(task.dueDate.substring(0, 10));
    } else {
      setDueDate("");
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };

  // ===========================
  // Update Task
  // ===========================

  const updateTask = async () => {

    if (!title.trim()) {
      toast.error("Task title is required");
      return;
    }

    try {

      setEditing(true);

      const token = localStorage.getItem("token");

      await axios.put(
        `http://localhost:5000/api/tasks/${editingId}`,
        {
          title,
          description,
          priority,
          project,
          dueDate,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Task updated successfully");

      setEditingId(null);

      setTitle("");
      setDescription("");
      setPriority("medium");

      if (projects.length > 0) {
        setProject(projects[0]._id);
      } else {
        setProject("");
      }

      setDueDate("");

      fetchTasks();

    } catch (error) {
      console.log(error);
      toast.error("Failed to update task");
    } finally {
      setEditing(false);
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

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/20">
                <ClipboardCheck
                  size={34}
                  className="text-cyan-400"
                />
              </div>

              <div>

                <h1 className="text-4xl font-bold">
                  My Tasks
                </h1>

                <p className="mt-1 text-slate-400">
                  Create, organize and manage your daily tasks.
                </p>

              </div>

            </div>

            {/* ================= Form ================= */}

            <div className="mb-10 rounded-3xl border border-slate-700 bg-slate-800 p-8 shadow-2xl">

              <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">

                <Plus size={24} />

                {editingId ? "Edit Task" : "Create New Task"}

              </h2>

              <input
                type="text"
                placeholder="Task Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="mb-5 w-full rounded-xl border border-slate-600 bg-slate-700 p-4 outline-none transition focus:border-cyan-500"
              />

              <textarea
                rows={4}
                placeholder="Task Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="mb-5 w-full rounded-xl border border-slate-600 bg-slate-700 p-4 outline-none transition focus:border-cyan-500"
              />

              <select
                value={project}
                onChange={(e) => setProject(e.target.value)}
                className="mb-5 w-full rounded-xl border border-slate-600 bg-slate-700 p-4 outline-none transition focus:border-cyan-500"
              >
                {projects.map((item) => (
                  <option
                    key={item._id}
                    value={item._id}
                  >
                    {item.title}
                  </option>
                ))}
              </select>

              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="mb-5 w-full rounded-xl border border-slate-600 bg-slate-700 p-4 outline-none transition focus:border-cyan-500"
              >
                <option value="low">Low Priority</option>
                <option value="medium">Medium Priority</option>
                <option value="high">High Priority</option>
              </select>

              <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="mb-6 w-full rounded-xl border border-slate-600 bg-slate-700 p-4 outline-none transition focus:border-cyan-500"
              />

              <button
                onClick={editingId ? updateTask : createTask}
                disabled={creating || editing}
                className="flex items-center gap-3 rounded-xl bg-cyan-600 px-7 py-4 font-semibold transition hover:bg-cyan-700 disabled:opacity-60"
              >

                {(creating || editing) ? (
                  <>
                    <LoaderCircle
                      size={20}
                      className="animate-spin"
                    />

                    {editingId
                      ? "Updating..."
                      : "Creating..."}
                  </>
                ) : (
                  <>
                    <Plus size={20} />

                    {editingId
                      ? "Save Changes"
                      : "Create Task"}
                  </>
                )}

              </button>

            </div>

            {/* ================= Task List ================= */}

            {loading ? (

              <div className="rounded-3xl border border-slate-700 bg-slate-800 p-8 text-center text-slate-400">
                Loading tasks...
              </div>

            ) : tasks.length === 0 ? (

              <div className="rounded-3xl border border-slate-700 bg-slate-800 p-10 text-center">

                <ClipboardCheck
                  size={60}
                  className="mx-auto mb-5 text-slate-500"
                />

                <h2 className="text-2xl font-bold">
                  No Tasks Yet
                </h2>

                <p className="mt-3 text-slate-400">
                  Create your first task to get started.
                </p>

              </div>

            ) : (

              <div className="grid gap-6">

                {tasks.map((task) => (

                  <div
                    key={task._id}
                    className="rounded-3xl border border-slate-700 bg-slate-800 p-7 shadow-xl transition hover:border-cyan-500"
                  >

                    <div className="flex items-start justify-between">

                      <div>

                        <h2 className="text-2xl font-bold">
                          {task.title}
                        </h2>

                        <p className="mt-3 text-slate-400">
                          {task.description}
                        </p>

                      </div>

                      <span
                        className={`rounded-full px-4 py-2 text-sm font-semibold ${
                          task.status === "completed"
                            ? "bg-green-500/20 text-green-400"
                            : task.status === "in-progress"
                            ? "bg-blue-500/20 text-blue-400"
                            : "bg-yellow-500/20 text-yellow-400"
                        }`}
                      >
                        {task.status}
                      </span>

                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">

                      <span className="rounded-full bg-cyan-500/20 px-4 py-2 text-sm text-cyan-400">
                        📁 {task.project?.title}
                      </span>

                      <span
                        className={`rounded-full px-4 py-2 text-sm ${
                          task.priority === "high"
                            ? "bg-red-500/20 text-red-400"
                            : task.priority === "medium"
                            ? "bg-yellow-500/20 text-yellow-400"
                            : "bg-green-500/20 text-green-400"
                        }`}
                      >
                        {task.priority}
                      </span>

                    </div>

                    {task.dueDate && (

                      <p className="mt-5 text-slate-400">
                        📅 Due :
                        {" "}
                        {new Date(task.dueDate).toLocaleDateString()}
                      </p>

                    )}

                    <div className="mt-8 flex gap-4">

                      <button
                        onClick={() => startEdit(task)}
                        className="flex items-center gap-2 rounded-xl bg-yellow-500 px-5 py-3 font-semibold text-black transition hover:bg-yellow-400"
                      >
                        <Pencil size={18} />
                        Edit
                      </button>

                      <button
                        onClick={() => deleteTask(task._id)}
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