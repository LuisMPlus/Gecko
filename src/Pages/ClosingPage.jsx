"use client"

// Constantes de datos para la reflexión
const REFLEXION_DATA = {
  aprendizajes:
    "Durante el desarrollo de este proyecto, aprendimos la importancia de la integración tecnológica en el sector sanitario. Comprendimos cómo los sistemas digitales pueden transformar procesos tradicionales, mejorando la eficiencia y reduciendo errores. También adquirimos conocimientos sobre metodologías ágiles, trabajo colaborativo y la importancia de centrar el diseño en las necesidades del usuario final.",

  decisiones:
    "Las decisiones más importantes incluyeron la elección de una arquitectura escalable, la implementación de protocolos de seguridad robustos, y la adopción de una metodología ágil para el desarrollo. También fue crucial decidir enfocar el sistema en la experiencia del usuario, priorizando la simplicidad y accesibilidad por encima de funcionalidades complejas innecesarias.",

  escalamiento:
    "Esta propuesta puede escalarse mediante la implementación modular, permitiendo agregar nuevas funcionalidades según las necesidades específicas de cada institución. Se puede expandir a otras especialidades médicas, integrar con sistemas hospitalarios existentes, y desarrollar APIs para conectar con servicios externos como laboratorios y farmacias.",

  trabajoEquipo:
    "El trabajo en equipo fue fundamental para el éxito del proyecto. La diversidad de perspectivas enriqueció las soluciones propuestas, mientras que la comunicación constante y la distribución equitativa de tareas permitieron cumplir con los objetivos establecidos. La metodología ágil facilitó la colaboración y la adaptación a los cambios durante el desarrollo.",
}

const AI_TOOLS = [
  { name: "ChatGPT", icon: "🤖" },
  { name: "Claude", icon: "🧠" },
  { name: "GitHub Copilot", icon: "💻" },
  { name: "Figma AI", icon: "🎨" },
  { name: "Notion AI", icon: "📝" },
  { name: "Canva AI", icon: "🖼️" },
  { name: "Grammarly", icon: "✍️" },
  { name: "DeepL", icon: "🌐" },
]

const VENTAJAS = [
  "Aceleración significativa en la generación de código y documentación",
  "Mejora en la calidad y consistencia del contenido escrito",
  "Optimización del tiempo de investigación y análisis",
  "Facilitación de la creatividad y generación de ideas innovadoras",
  "Automatización de tareas repetitivas y de bajo valor agregado",
  "Mejora en la precisión de traducciones y correcciones gramaticales",
]

const REFLEXIONES_CRITICAS = [
  "Es importante mantener un equilibrio entre la eficiencia de la IA y la creatividad humana",
  "La dependencia excesiva de herramientas de IA puede limitar el desarrollo de habilidades propias",
  "Se debe verificar siempre la precisión y relevancia de la información generada por IA",
  "La ética en el uso de IA debe ser una consideración constante en todos los proyectos",
  "Es fundamental comprender las limitaciones de cada herramienta para usarlas efectivamente",
]

export default function ReflexionFinalPage() {
  const reflexionCards = [
    { title: "¿Qué aprendimos?", content: REFLEXION_DATA.aprendizajes },
    { title: "¿Qué decisiones fueron más importantes?", content: REFLEXION_DATA.decisiones },
    { title: "¿Cómo se puede escalar esta propuesta?", content: REFLEXION_DATA.escalamiento },
    { title: "Valoración del trabajo en equipo", content: REFLEXION_DATA.trabajoEquipo },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Title */}
      <div className="py-16 px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-900">Reflexión Final de Grupo</h1>
          <p className="text-xl text-gray-600">Análisis crítico y aprendizajes del desarrollo del sistema</p>
        </div>
      </div>

      {/* Main Content */}
      <main className="mx:4 md:mx-16 mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Preguntas de Reflexión */}
        <section className="mb-20">
          <div className="grid gap-8 md:grid-cols-2">
            {reflexionCards.map((card, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-gray-50"
              >
                <h2 className="text-2xl font-semibold mb-6 text-blue-900">{card.title}</h2>
                <div className="bg-white rounded-xl p-6 min-h-[120px] border border-gray-100 transition-all duration-300 group-hover:border-orange-400">
                  <p className="text-base leading-relaxed text-gray-700">{card.content}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Aplicaciones de IA */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-blue-900">Aplicaciones de IA Utilizadas</h2>
            <div className="w-24 h-1 mx-auto rounded-full bg-orange-400"></div>
          </div>

          {/* IA Tools Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {AI_TOOLS.map((tool, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer bg-white border border-gray-200 hover:border-orange-400"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 bg-orange-400">
                  <span className="text-white font-medium text-xl">{tool.icon}</span>
                </div>
                <p className="font-medium text-blue-900">{tool.name}</p>
              </div>
            ))}
          </div>

          {/* Ventajas y Reflexión */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Ventajas */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-blue-900">Ventajas observadas</h3>
              <div className="space-y-4">
                {VENTAJAS.map((ventaja, index) => (
                  <div
                    key={index}
                    className="group flex items-center p-4 rounded-xl transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 cursor-pointer bg-white border border-gray-200 hover:border-orange-400"
                  >
                    <div className="w-3 h-3 rounded-full mr-4 transition-all duration-300 group-hover:scale-125 bg-orange-400"></div>
                    <span className="font-medium text-gray-700">{ventaja}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Reflexión crítica */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-blue-900">Reflexión crítica</h3>
              <div className="space-y-4">
                {REFLEXIONES_CRITICAS.map((punto, index) => (
                  <div
                    key={index}
                    className="group p-4 rounded-xl border-l-4 border-l-orange-400 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 cursor-pointer bg-white border border-gray-200 hover:border-orange-400"
                  >
                    <p className="font-medium text-gray-700">{punto}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contenedor para Google Form */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-blue-900">Formulario de Evaluación</h2>
            <div className="w-24 h-1 mx-auto rounded-full bg-orange-400"></div>
            <p className="text-gray-600 mt-4">Comparte tu feedback sobre el proyecto y el sistema desarrollado</p>
          </div>

          <div className="group p-2 rounded-2xl shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-xl bg-gray-50">
            <div className="bg-white rounded-xl overflow-hidden">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLScblQwfQMx5TwiGcfZ5X3svl9JRiIX-CkHu6LeOIxb-0WzPPQ/viewform?embedded=true"
                width="100%"
                height="600"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                className="w-full"
              >
                Cargando formulario...
              </iframe>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
