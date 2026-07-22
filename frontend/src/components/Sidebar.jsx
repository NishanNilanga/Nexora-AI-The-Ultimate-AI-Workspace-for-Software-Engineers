"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const menus = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: "🏠",
    },
    {
      name: "Projects",
      href: "/projects",
      icon: "📁",
    },
    {
      name: "Tasks",
      href: "/tasks",
      icon: "✅",
    },
    {
      name: "Settings",
      href: "/settings",
      icon: "⚙️",
    },
  ];

  return (
    <aside className="w-72 min-h-[calc(100vh-80px)] bg-slate-900 border-r border-slate-800 flex flex-col justify-between">

      {/* ================= Logo ================= */}

      <div>

        <div className="px-6 py-7 border-b border-slate-800">

          <div className="flex items-center gap-4">

            {/* Logo */}

            <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg flex-shrink-0">

              <span className="text-3xl">
                🚀
              </span>

            </div>

            {/* Text */}

            <div>

              <h2 className="text-3xl font-extrabold text-white leading-none tracking-tight">
                Nexora AI
              </h2>

              <p className="text-slate-400 text-base mt-1">
                Project Workspace
              </p>

            </div>

          </div>

        </div>

        {/* ================= Navigation ================= */}

        <div className="px-5 pt-8">

          <p className="text-xs uppercase tracking-[0.25em] text-slate-500 font-semibold mb-5">
            Navigation
          </p>

          <nav className="space-y-3">

            {menus.map((menu) => {
              const isActive = pathname === menu.href;

              return (
                <Link
                  key={menu.href}
                  href={menu.href}
                  className={`group flex items-center justify-between rounded-2xl px-5 py-4 transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-xl"
                      : "text-slate-300 hover:bg-slate-800 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-4">

                    <span className="text-2xl">
                      {menu.icon}
                    </span>

                    <span className="font-semibold text-lg">
                      {menu.name}
                    </span>

                  </div>

                  {isActive && (
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  )}

                </Link>
              );
            })}

          </nav>

        </div>

      </div>

      {/* ================= Footer ================= */}

      <div className="p-6 border-t border-slate-800">

        <div className="rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 p-5">

          <h3 className="text-white font-bold text-lg">
            🚀 Nexora AI
          </h3>

          <p className="text-slate-400 text-sm leading-6 mt-2">
            Smart AI-powered Project Management Platform built with the MERN Stack.
          </p>

          <div className="flex items-center justify-between mt-5">

            <span className="text-slate-500 text-xs">
              Version
            </span>

            <span className="bg-blue-600 px-3 py-1 rounded-full text-xs font-semibold text-white">
              v2.0
            </span>

          </div>

        </div>

      </div>

    </aside>
  );
}