import { ReflexionCard } from "../components/closing/ReflexionCard"
import { AIToolCard } from "../components/closing/AIToolCard"
import { VentajaItem } from "../components/closing/Advantage"
import { ReflexionCriticaItem } from "../components/closing/ReflexionCriticaItem"
import { SectionHeader } from "../components/closing/SectionHeader"
import { GoogleFormContainer } from "../components/closing/GoogleForm"
import { reflexionData, aiTools, ventajas, reflexionesCriticas } from "../data/reflexion"
import { colors } from "../data/team"

export default function ReflexionFinalPage() {
  const reflexionCards = [
    { title: "¿Qué aprendimos?", content: reflexionData.aprendizajes },
    { title: "¿Qué decisiones fueron más importantes?", content: reflexionData.decisiones },
    { title: "¿Cómo se puede escalar esta propuesta?", content: reflexionData.escalamiento },
    { title: "Valoración del trabajo en equipo", content: reflexionData.trabajoEquipo },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Title */}
      <div className="py-16 px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: colors.primary }}>
              Reflexión Final de Grupo
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <main className="md:mx-5 xl:mx-30 px-6 py-16">
        {/* Preguntas de Reflexión */}
        <section className="mb-20">
          <div className="grid gap-8 md:grid-cols-2">
            {reflexionCards.map((card, index) => (
              <ReflexionCard key={index} title={card.title} content={card.content} />
            ))}
          </div>
        </section>

        {/* Aplicaciones de IA */}
        <section className="mb-20">
          <SectionHeader title="Aplicaciones de IA Utilizadas" />

          {/* IA Tools Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {aiTools.map((tool, index) => (
              <AIToolCard key={index} name={tool.name} icon={tool.icon} />
            ))}
          </div>

          {/* Ventajas y Reflexión */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Ventajas */}
            <div>
              <h3 className="text-2xl font-medium mb-6" style={{ color: "#223768" }}>
                Ventajas observadas
              </h3>
              <div className="space-y-4">
                {ventajas.map((ventaja, index) => (
                  <VentajaItem key={index} text={ventaja} />
                ))}
              </div>
            </div>

            {/* Reflexión crítica */}
            <div>
              <h3 className="text-2xl font-medium mb-6" style={{ color: "#223768" }}>
                Reflexión crítica
              </h3>
              <div className="space-y-4">
                {reflexionesCriticas.map((punto, index) => (
                  <ReflexionCriticaItem key={index} text={punto} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contenedor para Google Form */}
        <section className="mb-16">
          <SectionHeader title="Formulario de Evaluación" />
          <GoogleFormContainer />
        </section>
      </main>
    </div>
  )
}
