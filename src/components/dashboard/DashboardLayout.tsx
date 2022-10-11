import React from 'react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto mt-5 w-full max-w-4xl bg-gray-50">
      <div className="flex flex-col justify-start gap-5">
        <h1 className="text-4xl font-bold">Dashboard</h1>
        {children}
      </div>
    </div>
  );
}
