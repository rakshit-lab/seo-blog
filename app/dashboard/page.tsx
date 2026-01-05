export default function DashboardPage() {

  const envLabel = process.env.NEXT_PUBLIC_API_URL || "Development";

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Admin Statistics</h2>
      <div className="p-4 bg-blue-50 border border-blue-100 rounded-lg">
        <p className="text-blue-800">
          Current Environment: <strong>{envLabel}</strong>
        </p>
      </div>
      <p className="text-slate-600">
        This page uses a <strong>Nested Layout</strong>. Notice how the top navbar stayed the same, but we added a sidebar on the left.
      </p>
    </div>
  );
}