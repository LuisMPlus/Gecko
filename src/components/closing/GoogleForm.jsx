export function GoogleFormContainer() {
  return (
    <div
      className="group p-2 rounded-2xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-lg"
    >
      <div className="bg-white rounded-xl overflow-hidden">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScblQwfQMx5TwiGcfZ5X3svl9JRiIX-CkHu6LeOIxb-0WzPPQ/viewform?embedded=true"
          width="100%"
          height="600"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Cargando…
        </iframe>
      </div>
    </div>
  );
}
