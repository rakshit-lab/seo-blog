import React from 'react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex min-h-screen">
      <aside className="w-64 bg-gray-100 p-6 border-r">
        <nav className="flex flex-col gap-2">
          <span className="font-bold text-gray-500 uppercase text-xs">Menu</span>
          <a href="/dashboard" className="text-blue-600 hover:font-bold">Overview</a>
          <a href="/dashboard/settings" className="text-gray-600">Settings</a>
        </nav>
      </aside>
      
      <main className="flex-1 p-10">
        {children}
      </main>
    </section>
  );
}