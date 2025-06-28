export function AIToolCard({ name, icon }) {
  return (
    <div
      className="group p-6 rounded-2xl text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer border border-gray-100"
      style={{ backgroundColor: "#80b7c3" }}
    >
      <div
        className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
        style={{ backgroundColor: "#F69055" }}
      >
        <span className="text-white font-medium text-xl">{icon}</span>
      </div>
      <p className="font-medium" style={{ color: "#030500" }}>
        {name}
      </p>
    </div>
  )
}
