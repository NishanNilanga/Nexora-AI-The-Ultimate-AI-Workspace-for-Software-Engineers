"use client";

import { useEffect, useState } from "react";
import {
  Search,
  Settings,
  BrainCircuit,
} from "lucide-react";

import NotificationBell from "@/components/notifications/NotificationBell";

export default function Navbar() {
  const [user, setUser] =useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const firstLetter = user?.fullName
    ? user.fullName.charAt(0).toUpperCase()
    : "U";

  return (
    <header className="sticky top-0 z-50 h-20 border-b border-slate-800 bg-slate-900/80 backdrop-blur-xl">

      <div className="h-full px-8 flex items-center justify-between">

        {/* ================= Left ================= */}

        <div className="flex items-center gap-4">

          <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center shadow-xl">

            <BrainCircuit size={30} className="text-white" />

          </div>

          <div>

            <h1 className="text-2xl font-extrabold text-white tracking-tight">
              Nexora AI
            </h1>

            <p className="text-sm text-slate-400">
              Smart Project Management Platform
            </p>

          </div>

        </div>

        {/* ================= Search ================= */}

        <div className="hidden lg:flex flex-1 justify-center px-10">

          <div className="relative w-full max-w-xl">

            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
            />

            <input
              type="text"
              placeholder="Search projects, tasks..."
              className="w-full rounded-2xl bg-slate-800 border border-slate-700 py-3 pl-12 pr-5 text-white placeholder:text-slate-500 outline-none transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            />

          </div>

        </div>

        {/* ================= Right ================= */}

        <div className="flex items-center gap-3">



          <NotificationBell />


        

          {/* Settings */}

          <button className="group flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-700 bg-slate-800 transition-all duration-300 hover:border-blue-500 hover:bg-slate-700">

            <Settings
              size={20}
              className="text-slate-300 group-hover:rotate-90 group-hover:text-white transition-all duration-300"
            />

          </button>

          {/* User */}

          <div className="ml-2 flex items-center gap-3 rounded-2xl border border-slate-700 bg-slate-800 px-3 py-2">

            <div className="hidden text-right sm:block">

              <p className="font-semibold text-white">
                {user?.fullName || "User"}
              </p>

              <p className="text-sm text-slate-400">
                Administrator
              </p>

            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-lg font-bold text-white shadow-lg">

              {firstLetter}

            </div>

          </div>

        </div>

      </div>

    </header>
  );
}