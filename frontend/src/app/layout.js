import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nexora AI",
  description: "AI Powered Project Management Platform",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-slate-900 text-white">

        {children}

        <Toaster
          position="bottom-right"
          reverseOrder={false}
          gutter={12}
          toastOptions={{
            duration: 3000,

            style: {
              background: "#1E293B",
              color: "#fff",
              border: "1px solid #334155",
              borderRadius: "14px",
              padding: "16px",
              fontSize: "14px",
              fontWeight: "600",
            },

            success: {
              iconTheme: {
                primary: "#22C55E",
                secondary: "#ffffff",
              },
            },

            error: {
              iconTheme: {
                primary: "#EF4444",
                secondary: "#ffffff",
              },
            },
          }}
        />

      </body>
    </html>
  );
}