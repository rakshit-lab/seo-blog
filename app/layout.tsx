import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Next.js Demo App",
  description: "Learning fundamentals by building",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900">
        <nav className="flex items-center justify-between p-6 bg-white shadow-sm">
          <h1 className="font-bold text-xl tracking-tight">Courses</h1>
          <div className="flex gap-6 font-medium">
            <Link href="/" className="hover:text-blue-600 transition">Home</Link>
            <Link href="/dashboard" className="hover:text-blue-600 transition">Dashboard</Link>
          </div>
        </nav>
        <main className="max-w-5xl mx-auto p-8">{children}</main>
      </body>
    </html>
  );
}