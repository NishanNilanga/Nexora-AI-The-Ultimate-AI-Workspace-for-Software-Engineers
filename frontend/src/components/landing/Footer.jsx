import Link from "next/link";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#050816]">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 lg:grid-cols-4">

          {/* Logo */}

          <div>
            <Link href="/" className="inline-block">
              <h2 className="text-3xl font-bold text-white">
                Nexora{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  AI
                </span>
              </h2>
            </Link>

            <p className="mt-5 leading-8 text-gray-400">
              AI-powered project management platform that helps teams manage
              projects, collaborate efficiently and boost productivity with AI.
            </p>
          </div>

          {/* Product */}

          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">
              Product
            </h3>

            <ul className="space-y-4 text-gray-400">
              <li>
                <Link href="#" className="hover:text-cyan-400 transition">
                  Features
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:text-cyan-400 transition">
                  Dashboard
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:text-cyan-400 transition">
                  Analytics
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:text-cyan-400 transition">
                  AI Assistant
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}

          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">
              Company
            </h3>

            <ul className="space-y-4 text-gray-400">
              <li>
                <Link href="#" className="hover:text-cyan-400 transition">
                  About
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:text-cyan-400 transition">
                  Contact
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:text-cyan-400 transition">
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:text-cyan-400 transition">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}

          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">
              Connect
            </h3>

            <div className="flex gap-4">

              <a
                href="#"
                className="rounded-2xl border border-white/10 p-4 text-white transition hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-400"
              >
                <FaGithub size={22} />
              </a>

              <a
                href="#"
                className="rounded-2xl border border-white/10 p-4 text-white transition hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-400"
              >
                <FaLinkedin size={22} />
              </a>

              <a
                href="mailto:info@nexora.ai"
                className="rounded-2xl border border-white/10 p-4 text-white transition hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-400"
              >
                <Mail size={22} />
              </a>

            </div>
          </div>

        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-gray-500">
          © {new Date().getFullYear()} Nexora AI. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}