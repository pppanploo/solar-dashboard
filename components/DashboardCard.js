export default function DashboardCard({ title, value }) {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h2 className="text-lg font-semibold text-gray-700">{title}</h2>
      <p className="text-2xl font-bold text-orange-500">{value}</p>
    </div>
  );
}