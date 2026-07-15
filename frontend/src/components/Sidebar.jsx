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
    <aside className="w-64 min-h-[calc(100vh-72px)] bg-slate-800 border-r border-slate-700">
      <nav className="p-5 space-y-2">
        {menus.map((menu) => {
          const isActive = pathname === menu.href;

          return (
            <Link
              key={menu.href}
              href={menu.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                isActive
                  ? "bg-blue-600 text-white shadow-lg"
                  : "text-slate-300 hover:bg-slate-700 hover:text-white"
              }`}
            >
              <span className="text-xl">{menu.icon}</span>
              <span>{menu.name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}