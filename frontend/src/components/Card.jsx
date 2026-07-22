export default function Card({ title, value, color }) {
  const getIcon = () => {
    switch (title) {
      case "Projects":
        return "📁";
      case "Tasks":
        return "✅";
      case "Completed":
        return "🎉";
      case "Pending":
        return "⏳";
      case "High Priority":
        return "🔥";
      case "Progress":
        return "📈";
      default:
        return "📊";
    }
  };

  return (
    <div
      className={`
        relative
        overflow-hidden
        rounded-3xl
        ${color}
        p-6
        shadow-2xl
        border
        border-white/10
        backdrop-blur-md
        transition-all
        duration-300
        hover:-translate-y-2
        hover:scale-[1.03]
        hover:shadow-blue-500/20
      `}
    >
      {/* Background Decoration */}
      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/10 blur-xl"></div>

      {/* Header */}
      <div className="flex items-center justify-between relative z-10">
        <p className="text-white/80 text-sm font-medium tracking-wide uppercase">
          {title}
        </p>

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 text-2xl backdrop-blur-md">
          {getIcon()}
        </div>
      </div>

      {/* Value */}
      <h2 className="relative z-10 mt-6 text-5xl font-extrabold text-white">
        {value}
      </h2>

      {/* Footer */}
      <div className="relative z-10 mt-6 flex items-center justify-between">
        <span className="text-sm text-white/70">
          Updated just now
        </span>

        <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold">
          Live
        </span>
      </div>
    </div>
  );
}