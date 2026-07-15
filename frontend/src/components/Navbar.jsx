"use client";

export default function Navbar() {
  return (
    <header className="h-18 bg-slate-800 border-b border-slate-700 flex items-center justify-between px-8">

      <div>
        <h1 className="text-2xl font-bold text-white">
          Nexora AI 🚀
        </h1>

        <p className="text-sm text-slate-400">
          AI Project Management Platform
        </p>
      </div>

      <div className="flex items-center gap-4">

        <div className="text-right">
          <p className="text-white font-semibold">
            Nishan Nilanga
          </p>

          <p className="text-slate-400 text-sm">
            Admin
          </p>
        </div>

        <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
          N
        </div>

      </div>

    </header>
  );
}