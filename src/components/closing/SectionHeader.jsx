export function SectionHeader({ title }) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-4xl font-light mb-4" style={{ color: "#223768" }}>
        {title}
      </h2>
      <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: "#e0ff4f" }}></div>
    </div>
  )
}