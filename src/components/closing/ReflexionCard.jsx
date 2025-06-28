
export function ReflexionCard({ title, content }) {
  return (
    <div
      className="group p-8 rounded-2xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
      style={{ backgroundColor: "#80b7c3" }}
    >
      <h2 className="text-2xl font-medium mb-6" style={{ color: "#030500" }}>
        {title}
      </h2>
      <div className="bg-white rounded-xl p-6 min-h-[120px] border border-white/20 transition-all duration-300 group-hover:border-white/40">
        <p className="text-base leading-relaxed" style={{ color: "#030500" }}>
          {content}
        </p>
      </div>
    </div>
  )
}
