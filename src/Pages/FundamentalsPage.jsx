"use client"
// Imagenes para los usuarios beneficiarios
import impactosocial from "@/assets/imgs/Fundamentals/beneficiaries/impactosocial.png"
import institusciones from "@/assets/imgs/Fundamentals/beneficiaries/instituciones.png"
import pacientes from "@/assets/imgs/Fundamentals/beneficiaries/pacientes.png"
import profesionales from "@/assets/imgs/Fundamentals/beneficiaries/profesionaldelasalud.png"
import recursosdeformacion from "@/assets/imgs/Fundamentals/necessaryResources/recursosdeformacion.png"
import recursoshumanos from "@/assets/imgs/Fundamentals/necessaryResources/recursoshumanos.png"
import recursosnormativos from "@/assets/imgs/Fundamentals/necessaryResources/recursosnormativosylegales.png"
import recursostecnologicos from "@/assets/imgs/Fundamentals/necessaryResources/recursostecnologicos.png"
import cajaNegra from "@/assets/imgs/Fundamentals/cajanegradelsistema.png"


// Constantes de texto
const FUNDAMENTOS_CONTENT = {
  title: "Fundamentos",
  introduction:
    "Los fundamentos de nuestro sistema informático sanitario se basan en principios sólidos de ingeniería de software, experiencia de usuario y tecnologías de vanguardia. Este sistema ha sido diseñado para transformar la manera en que se gestionan los procesos sanitarios, optimizando la eficiencia operativa y mejorando la calidad de atención al paciente.",

  usuarios: {
    title: "Usuarios Beneficiarios",
    introduction:
      "Nuestro sistema está diseñado para beneficiar a múltiples actores del ecosistema sanitario, desde profesionales médicos hasta pacientes y administradores. Cada grupo de usuarios tiene necesidades específicas que el sistema aborda de manera integral y personalizada.",
  },

  cajaNegra: {
    title: "Arquitectura del Sistema - Caja Negra",
    description:
      "La representación en caja negra muestra las entradas y salidas principales del sistema, proporcionando una visión clara de cómo interactúan los diferentes componentes sin revelar la complejidad interna de la implementación.",
  },

  recursos: {
    title: "Recursos Necesarios para el Desarrollo del Sistema",
    description:
      "El desarrollo exitoso de este sistema informático requiere una combinación estratégica de recursos tecnológicos, humanos y de infraestructura. Cada componente es fundamental para garantizar la calidad, seguridad y eficiencia del producto final.",
    categories: [
      "Infraestructura Tecnológica",
      "Equipo de Desarrollo",
      "Herramientas de Software",
      "Recursos de Seguridad",
    ],
  },
}

const objetivosEspecificos = [
    {
        nombre: "Mejorar la calidad y seguridad de la atención odontológica",
        descripcion: "Garantizar que la información clínica esté siempre actualizada, accesible y centralizada, permitiendo tomar decisiones más seguras y personalizadas."
    },
    {
        nombre: "Optimizar la gestión de la información",
        descripcion: "Reducir el uso del papel, evitar duplicaciones y agilizar procesos administrativos y clínicos."
    },
    {
        nombre: "Facilitar el acceso rápido y remoto a los datos clínicos",
        descripcion: "Permitir a profesionales y pacientes consultar la historia clínica en cualquier momento."
    },
    {
        nombre: "Promover la participación activa del paciente",
        descripcion: "Involucrar al paciente en su propio cuidado, dándole acceso a diagnósticos, tratamientos y recomendaciones."
    },
    {
        nombre: "Cumplir con normativas legales y de protección de datos",
        descripcion: "Asegurar la confidencialidad y seguridad de la información, respetando las leyes vigentes (por ejemplo la Ley 25.326 en Argentina)."
    },
    {
        nombre: "Favorecer la interoperabilidad con otros sistemas de salud",
        descripcion: "Permitir que la información odontológica pueda integrarse con otros registros médicos para brindar una visión integral del estado de salud del paciente."
    },
    {
        nombre: "Fomentar la prevención y el seguimiento continuo",
        descripcion: "Usar alertas y recordatorios para promover controles periódicos y hábitos de cuidado bucal."
    },

]

const recursosNecesarios = [
    {
        nombre: "Recursos de información",
        imagen: recursosdeformacion
    },
    {
        nombre: "Recursos humanos",
        imagen: recursoshumanos
    },
    {
        nombre: "Recursos normativos",
        imagen: recursosnormativos
    },
    {
        nombre: "Recursos tecnológicos",
        imagen: recursostecnologicos
    }
]

const usuariosBeneficiarios = [
  {
    nombre: "Impacto social",
    imagen: impactosocial,
  },
  {
    nombre: "Instituciones",
    imagen: institusciones,
  },
  {
    nombre: "Pacientes",
    imagen: pacientes,
  },
  {
    nombre: "Profesionales de la salud",
    imagen: profesionales,
  },
]

export default function FundamentosPage() {
  return (
    <div className="min-h-screen bg-white">
      

      <main className="mx:4 md:mx-16  px-4 sm:px-6 lg:px-8 py-12">
        {/* Título principal e introducción */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-6">{FUNDAMENTOS_CONTENT.title}</h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed">{FUNDAMENTOS_CONTENT.introduction}</p>
          </div>
        </section>

        {/* Objetivos específicos */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-orange-400 to-yellow-400 rounded-2xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-black mb-6 text-center">Objetivos Específicos del Sistema</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {objetivosEspecificos.map((objetivo, index) => (
              <div key={index} className="bg-gray-50 border-l-4 border-orange-400 p-6 rounded-lg flex flex-col gap-2">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-900 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm mt-1">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900 mb-1">{objetivo.nombre}</h3>
                    <p className="text-gray-700 leading-relaxed">{objetivo.descripcion}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Usuarios beneficiarios */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-sky-400 to-blue-900 rounded-2xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-white mb-4 text-center">{FUNDAMENTOS_CONTENT.usuarios.title}</h2>
            <p className="text-white opacity-90 text-center max-w-3xl mx-auto">
              {FUNDAMENTOS_CONTENT.usuarios.introduction}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {usuariosBeneficiarios.map((categoria, index) => (
              <div key={index}>
                <div className="flex items-center justify-center mb-4 ">
                    <div className="text-center">
                        <img
                            src={categoria.imagen}
                            alt={categoria.nombre}
                            className="h-full w-full object-contain "
                        />
                    </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Caja negra */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-black mb-4 text-center">{FUNDAMENTOS_CONTENT.cajaNegra.title}</h2>
            <p className="text-black opacity-80 text-center max-w-3xl mx-auto">
              {FUNDAMENTOS_CONTENT.cajaNegra.description}
            </p>
          </div>

          <div className="flex justify-center">
            <div className=" w-full max-w-2xl h-96 flex items-center justify-center ">
              <div className="text-center">
                
                <img src={cajaNegra} alt="Diagrama de Caja Negra del Sistema" />

              </div>
            </div>
          </div>
        </section>

        {/* Recursos necesarios */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-900 to-sky-400 rounded-2xl p-8 mb-20">
            <h2 className="text-3xl font-bold text-white mb-4 text-center">{FUNDAMENTOS_CONTENT.recursos.title}</h2>
            <p className="text-white opacity-90 text-center max-w-3xl mx-auto">
              {FUNDAMENTOS_CONTENT.recursos.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recursosNecesarios.map((recurso, index) => (
              <div key={index}>
                <div className=" flex items-center justify-center mb-4">
                  <div className="text-center">
                   <img src={recurso.imagen} alt={recurso.nombre} className="h-full w-full object-contain" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        
      </main>

    </div>
  )
}
