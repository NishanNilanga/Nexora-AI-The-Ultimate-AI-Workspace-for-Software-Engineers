export default function Card({ title, value, color }) {
  return (
    <div
      className={`${color} rounded-2xl p-6 shadow-xl hover:scale-105 transition duration-300`}
    >
      <p className="text-gray-100 text-lg">
        {title}
      </p>

      <h2 className="text-4xl font-bold mt-3">
        {value}
      </h2>
    </div>
  );
}