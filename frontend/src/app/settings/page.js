"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import {
  Settings,
  User,
  Lock,
  Bell,
  Database,
  Save,
  ShieldCheck,
  Download,
  Trash2,
  LoaderCircle,
} from "lucide-react";

import ProtectedRoute from "../../components/ProtectedRoute";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

export default function SettingsPage() {

  const [user, setUser] = useState({
    fullName: "",
    email: "",
  });

  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("Administrator");

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [emailNotifications, setEmailNotifications] = useState(true);
  const [browserNotifications, setBrowserNotifications] = useState(true);
  const [weeklyReports, setWeeklyReports] = useState(false);

  const [savingProfile, setSavingProfile] = useState(false);
  const [savingPassword, setSavingPassword] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleSaveProfile = async () => {

    try {

      setSavingProfile(true);

      await new Promise(resolve => setTimeout(resolve,1000));

      toast.success("Profile updated successfully");

    } catch {

      toast.error("Failed to update profile");

    } finally {

      setSavingProfile(false);

    }

  };

  const handlePasswordChange = async () => {

    if (!currentPassword || !newPassword || !confirmPassword) {

      toast.error("Please fill all password fields");
      return;

    }

    if (newPassword !== confirmPassword) {

      toast.error("Passwords do not match");
      return;

    }

    try {

      setSavingPassword(true);

      await new Promise(resolve => setTimeout(resolve,1000));

      toast.success("Password updated successfully");

      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");

    } catch {

      toast.error("Failed to update password");

    } finally {

      setSavingPassword(false);

    }

  };

  return (

    <ProtectedRoute>

      <>

        <Navbar />

        <div className="flex">

          <Sidebar />

          <main className="flex-1 min-h-screen bg-slate-900 text-white p-10">

            {/* Header */}

            <div className="flex items-center gap-4 mb-10">

              <div className="w-16 h-16 rounded-2xl bg-indigo-500/20 flex items-center justify-center">

                <Settings
                  size={34}
                  className="text-indigo-400"
                />

              </div>

              <div>

                <h1 className="text-4xl font-bold">
                  Settings
                </h1>

                <p className="text-slate-400 mt-2">
                  Manage your account and personalize Nexora AI.
                </p>

              </div>

            </div>
            {/* ================= Profile ================= */}

            <div className="mb-8 rounded-3xl border border-slate-700 bg-slate-800 p-8 shadow-xl">

              <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">

                <User size={24} />

                Profile Information

              </h2>

              <div className="grid gap-6 md:grid-cols-2">

                <div>

                  <label className="mb-2 block text-slate-300">
                    Full Name
                  </label>

                  <input
                    value={user.fullName}
                    onChange={(e) =>
                      setUser({
                        ...user,
                        fullName: e.target.value,
                      })
                    }
                    className="w-full rounded-xl border border-slate-600 bg-slate-700 p-4 outline-none transition focus:border-indigo-500"
                  />

                </div>

                <div>

                  <label className="mb-2 block text-slate-300">
                    Email
                  </label>

                  <input
                    value={user.email}
                    onChange={(e) =>
                      setUser({
                        ...user,
                        email: e.target.value,
                      })
                    }
                    className="w-full rounded-xl border border-slate-600 bg-slate-700 p-4 outline-none transition focus:border-indigo-500"
                  />

                </div>

                <div>

                  <label className="mb-2 block text-slate-300">
                    Phone Number
                  </label>

                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+94 77 123 4567"
                    className="w-full rounded-xl border border-slate-600 bg-slate-700 p-4 outline-none transition focus:border-indigo-500"
                  />

                </div>

                <div>

                  <label className="mb-2 block text-slate-300">
                    Role
                  </label>

                  <input
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full rounded-xl border border-slate-600 bg-slate-700 p-4 outline-none transition focus:border-indigo-500"
                  />

                </div>

              </div>

              <button
                onClick={handleSaveProfile}
                disabled={savingProfile}
                className="mt-8 flex items-center gap-3 rounded-xl bg-indigo-600 px-7 py-4 font-semibold transition hover:bg-indigo-700 disabled:opacity-60"
              >

                {savingProfile ? (
                  <>
                    <LoaderCircle
                      size={20}
                      className="animate-spin"
                    />
                    Saving...
                  </>
                ) : (
                  <>
                    <Save size={20} />
                    Save Profile
                  </>
                )}

              </button>

            </div>

            {/* ================= Password ================= */}

            <div className="mb-8 rounded-3xl border border-slate-700 bg-slate-800 p-8 shadow-xl">

              <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">

                <Lock size={24} />

                Change Password

              </h2>

              <div className="grid gap-5">

                <input
                  type="password"
                  placeholder="Current Password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="rounded-xl border border-slate-600 bg-slate-700 p-4 outline-none transition focus:border-indigo-500"
                />

                <input
                  type="password"
                  placeholder="New Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="rounded-xl border border-slate-600 bg-slate-700 p-4 outline-none transition focus:border-indigo-500"
                />

                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="rounded-xl border border-slate-600 bg-slate-700 p-4 outline-none transition focus:border-indigo-500"
                />

              </div>

              <button
                onClick={handlePasswordChange}
                disabled={savingPassword}
                className="mt-8 flex items-center gap-3 rounded-xl bg-emerald-600 px-7 py-4 font-semibold transition hover:bg-emerald-700 disabled:opacity-60"
              >

                {savingPassword ? (
                  <>
                    <LoaderCircle
                      size={20}
                      className="animate-spin"
                    />
                    Updating...
                  </>
                ) : (
                  <>
                    <ShieldCheck size={20} />
                    Update Password
                  </>
                )}

              </button>

            </div>

            {/* ================= Notifications ================= */}

            <div className="mb-8 rounded-3xl border border-slate-700 bg-slate-800 p-8 shadow-xl">

              <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">

                <Bell size={24} />

                Notifications

              </h2>

              <div className="space-y-5">

                <label className="flex items-center justify-between">

                  <span>Email Notifications</span>

                  <input
                    type="checkbox"
                    checked={emailNotifications}
                    onChange={() =>
                      setEmailNotifications(!emailNotifications)
                    }
                    className="h-5 w-5"
                  />

                </label>

                <label className="flex items-center justify-between">

                  <span>Browser Notifications</span>

                  <input
                    type="checkbox"
                    checked={browserNotifications}
                    onChange={() =>
                      setBrowserNotifications(!browserNotifications)
                    }
                    className="h-5 w-5"
                  />

                </label>

                <label className="flex items-center justify-between">

                  <span>Weekly Reports</span>

                  <input
                    type="checkbox"
                    checked={weeklyReports}
                    onChange={() =>
                      setWeeklyReports(!weeklyReports)
                    }
                    className="h-5 w-5"
                  />

                </label>

              </div>

            </div>

            {/* ================= Account ================= */}

            <div className="rounded-3xl border border-slate-700 bg-slate-800 p-8 shadow-xl">

              <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">

                <Database size={24} />

                Account

              </h2>

              <div className="flex flex-wrap gap-4">

                <button className="flex items-center gap-2 rounded-xl bg-sky-600 px-6 py-3 font-semibold transition hover:bg-sky-700">

                  <Download size={18} />

                  Export Data

                </button>

                <button className="flex items-center gap-2 rounded-xl bg-red-600 px-6 py-3 font-semibold transition hover:bg-red-700">

                  <Trash2 size={18} />

                  Delete Account

                </button>

              </div>

            </div>

          </main>

        </div>

      </>

    </ProtectedRoute>

  );

}