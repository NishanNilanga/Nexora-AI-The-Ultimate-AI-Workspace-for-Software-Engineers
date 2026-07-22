"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Features", href: "#features" },
    { name: "Solutions", href: "#solutions" },
    { name: "About", href: "#about" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-black/40 border-b border-white/10 shadow-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        {/* Logo */}

        <Link
          href="/"
          className="flex items-center gap-3"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 shadow-lg shadow-cyan-500/30">

            <Sparkles className="text-white" size={22} />

          </div>

          <div>

            <h1 className="text-xl font-bold text-white">

              Nexora AI

            </h1>

            <p className="text-xs text-gray-400">

              AI Project Management

            </p>

          </div>
        </Link>

        {/* Desktop Menu */}

        <nav className="hidden items-center gap-10 md:flex">

          {links.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative text-gray-300 transition hover:text-cyan-400"
            >
              {item.name}
            </a>
          ))}

        </nav>

        {/* Desktop Buttons */}

        <div className="hidden items-center gap-4 md:flex">

          <Link
            href="/login"
            className="rounded-xl border border-white/10 px-5 py-2 text-gray-200 transition hover:border-cyan-400 hover:text-cyan-400"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-2 font-semibold text-white transition hover:scale-105"
          >
            Get Started
          </Link>

        </div>

        {/* Mobile */}

        <button
          className="text-white md:hidden"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      <AnimatePresence>

        {mobileMenu && (

          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.3 }}
            className="border-t border-white/10 bg-[#050816]/95 backdrop-blur-xl md:hidden"
          >

            <div className="flex flex-col gap-6 p-6">

              {links.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-lg text-gray-300"
                  onClick={() => setMobileMenu(false)}
                >
                  {item.name}
                </a>
              ))}

              <Link
                href="/login"
                className="rounded-xl border border-white/10 py-3 text-center text-white"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3 text-center font-semibold text-white"
              >
                Get Started
              </Link>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </header>
  );
}