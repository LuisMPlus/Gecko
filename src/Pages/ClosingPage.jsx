"use client"
export const REFLEXION_DATA = {
  aprendizajes: [
    "A lo largo de este proyecto, como grupo pudimos aprender no solo sobre la importancia y el funcionamiento de la Historia Clínica Digital en odontología, sino también sobre el valor de la tecnología en la mejora de la atención médica y la experiencia del paciente.",
    "Fortalecimos nuestras habilidades de trabajo en equipo: aprendimos a escuchar otras opiniones, a coordinar tareas, a adaptarnos frente a imprevistos y a valorar el aporte de cada integrante.",
    "Pudimos poner en práctica conceptos de planificación, análisis sistémico y metodologías ágiles (como SCRUM), que son herramientas clave para cualquier proyecto tecnológico."
  ],

  decisiones: [
    "Elección del tema de enfoque: Decidir trabajar con la Historia Clínica Digital en odontología fue fundamental, ya que nos permitió abordar un problema real y actual en el ámbito de la salud.",
    "Diseño del sistema y selección de subsistemas que permitieran un enfoque integral del problema.",
    "Análisis profundo del problema del sistema actual para identificar oportunidades de mejora.",
    "Organización y distribución de roles en el equipo para maximizar las fortalezas individuales."
  ],

  escalamiento: [
    "Interoperabilidad con otros sistemas de salud para crear un ecosistema médico integrado.",
    "Expansión a otras especialidades médicas para ampliar el alcance del sistema.",
    "Implementación en diferentes instituciones de salud a nivel regional y nacional.",
    "Integración con tecnologías emergentes como IA y machine learning para diagnósticos predictivos."
  ],

  trabajoEquipo: [
    "El trabajo en equipo fue una parte fundamental para el desarrollo y éxito de este proyecto.",
    "Nos permitió combinar diferentes habilidades, experiencias y perspectivas, enriqueciendo cada etapa de la propuesta.",
    "Desarrollamos habilidades de comunicación efectiva y resolución colaborativa de problemas.",
    "Aprendimos a gestionar el tiempo y coordinar tareas de manera eficiente entre todos los miembros."
  ],
}

export const AI_TOOLS = [
  { name: "ChatGPT", icon: "C" },
  { name: "Canva IA", icon: "C" },
  { name: "Copilot", icon: "A" },
]

export const VENTAJAS = [
  "Acceso rápido a información compleja: Permite explicar conceptos técnicos (como protocolos, modelos de red, bases de datos, etc.) de forma sencilla y fácil de entender.",
  "Apoyo en la redacción y organización de trabajos: Facilita la redacción de informes, la estructuración de contenidos y la preparación de presentacioness",
  "Personalización del aprendizaje: La IA puede adaptarse al ritmo y estilo de cada uno de nosotros, ofreciendo ejemplos y explicaciones personalizadas.",
  "Ahorro de tiempo: Permite generar borradores iniciales o resúmenes rápidamente, liberando tiempo para el análisis y la comprensión crítica.",
  "Fomento de la creatividad: Ayuda a proponer ideas, preguntas de retroalimentación y nuevas perspectivas para enriquecer el trabajo grupal."
]

export const REFLEXIONES_CRITICAS = [
  "Si bien la IA generativa ofrece grandes ventajas, su uso debe ser crítico y responsable. Es importante no depender completamente de la IA ni usarla para sustituir el pensamiento propio o el aprendizaje profundo. Debemos validar la información generada, complementarla con fuentes confiables y reflexionar sobre los contenidos en lugar de copiarlos de forma literal. Además, es fundamental considerar aspectos éticos, como el respeto a la autoría y el uso de datos de manera transparente y segura. Por ello, la IA generativa debe verse como una herramienta de apoyo y no como un reemplazo del proceso de estudio y razonamiento crítico personal. Su uso responsable fomenta el aprendizaje autónomo, la creatividad y el desarrollo de pensamiento analítico."
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
                  {Array.isArray(card.content) ? (
                    <ul className="space-y-3">
                      {card.content.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-2 h-2 rounded-full bg-orange-400 mt-2 mr-3 flex-shrink-0"></div>
                          <p className="text-base leading-relaxed text-gray-700">{item}</p>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-base leading-relaxed text-gray-700">{card.content}</p>
                  )}
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
