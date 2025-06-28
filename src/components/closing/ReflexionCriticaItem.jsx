export function ReflexionCriticaItem({ text }) {
  return (
    <div
      className="group p-4 rounded-xl border-l-4 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 cursor-pointer border border-gray-100"
      style={{ backgroundColor: "#80b7c3", borderLeftColor: "#F69055" }}
    >
      <p className="font-medium" style={{ color: "#030500" }}>
        {text}
      </p>
    </div>
  )
}
