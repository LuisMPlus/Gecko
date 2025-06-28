export function VentajaItem({ text }) {
  return (
    <div
      className="group flex items-center p-4 rounded-xl transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 cursor-pointer border border-gray-100"
      style={{ backgroundColor: "#80b7c3" }}
    >
      <div
        className="w-3 h-3 rounded-full mr-4 transition-all duration-300 group-hover:scale-125"
        style={{ backgroundColor: "#e0ff4f" }}
      ></div>
      <span className="font-medium" style={{ color: "#030500" }}>
        {text}
      </span>
    </div>
  )
}
