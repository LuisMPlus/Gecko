"use client";

import hero from "@/assets/imgs/home/HCE-image.png";
import portalPaciente from "@/assets/imgs/home/portalPaciente.jpg";
import portalProfesional from "@/assets/imgs/home/portalProfesional.jpg";
import conectividad from "@/assets/imgs/home/conectividad.jpg";
import multimedia from "@/assets/imgs/home/multimedia.jpeg";
import tiemporeal from "@/assets/imgs/home/tiemporeal.webp";

// Constantes de contenido
const HOME_CONTENT = {
  hero: {
    title: "Historial Clínica Digital",
    subtitle: "Revolucionando la Gestión Odontológica",
    description:
      "La Historial Clínica Digital (también conocida como Historial Clínica Electrónica) fue elegida porque representa uno de los principales avances tecnológicos aplicados al sistema de salud en los últimos años. Este sistema permite reemplazar los registros en papel por una plataforma digital centralizada, en la cual se almacena toda la información médica del paciente de forma ordenada, segura y accesible.",
  },

  sistemaActual: {
    title: "Sistema Actual",
    subtitle: "Desafíos en la Gestión Odontológica",
    description:
      "Hoy en día, en el área odontológica, una de las principales dificultades es la gestión fragmentada de la información clínica. Muchos consultorios todavía utilizan historias clínicas en papel o sistemas digitales aislados, lo que genera problemas como:",
    problemas: [
      {
        title: "Pérdida de información importante",
        description:
          "Documentos físicos extraviados o dañados que comprometen el historial del paciente",
        icon: "warning",
      },
      {
        title: "Acceso limitado al historial",
        description:
          "Dificultad para acceder rápidamente al historial completo del paciente durante consultas",
        icon: "clock",
      },
      {
        title: "Errores en diagnósticos",
        description:
          "Errores en diagnósticos y tratamientos por falta de datos actualizados y completos",
        icon: "alert",
      },
      {
        title: "Baja integración",
        description:
          "Falta de conexión con laboratorios, obras sociales y otros servicios médicos",
        icon: "disconnect",
      },
    ],
    conclusion:
      "Esto no solo afecta la calidad de atención, sino también la seguridad y la confianza del paciente.",
  },

  solucion: {
    title: "Solución implementada",
    subtitle: "Historial Clínico Digital Odontológico",
    description:
      "Nuestra propuesta es desarrollar e implementar un Historial Clínico Digital Odontológico, moderno, seguro y centralizado, que permita:",
    beneficios: [
      {
        title: "Acceso en tiempo real",
        description:
          "Acceso rápido y en tiempo real al historial clínico desde cualquier dispositivo (web o móvil)",
        image: tiemporeal,
      },
      {
        title: "Integración multimedia",
        description:
          "Integración con imágenes radiográficas y fotografías intraorales de alta calidad",
        image: multimedia,
      },
      {
        title: "Conectividad total",
        description:
          "Conexión directa con farmacias, laboratorios y obras sociales para un flujo completo",
        image: conectividad,
      },
    ],
    objetivos:
      "Con esta solución, buscamos modernizar y digitalizar el proceso odontológico, reduciendo errores, mejorando la experiencia del paciente y optimizando la gestión interna del consultorio.",
    metodologia:
      "Además, la implementación basada en metodología ágil (SCRUM) permite adaptar el sistema a las necesidades de cada institución, realizar mejoras continuas y garantizar una adopción rápida y efectiva.",
  },

  stats: [
    { number: "70%", label: "Reducción en errores" },
    { number: "50%", label: "Tiempo ahorrado" },
    { number: "95%", label: "Satisfacción del paciente" },
    { number: "24/7", label: "Disponibilidad" },
  ],
};

// Constantes FODA
const FODA_DATA = {
  fortalezas: [
    "Servicio más personalizado",
    "Velocidad en la búsqueda de registros de pacientes",
    "Agilización en la asignación de turnos",
    "Agilización de los tratamientos",
    "Registrar citas de manera automática o sin intervención del personal",
  ],
  oportunidades: [
    "Expansión de las telecomunicaciones a las distintas regiones de la provincia/país incrementando la conexión a internet de la población",
    "Implementación gubernamental obligatoria de un sistema digital de salud pública",
    "Aumento progresivo de la población profesional joven, que poseen ya conocimientos digitales",
  ],
  debilidades: [
    "Demoras en el pasaje de historias clínicas tradicionales (papel) a las digitales",
    "Manejo del tiempo del servicio a cada paciente",
  ],
  amenazas: ["Privacidad de los datos o padecimientos de pacientes", "Corte de suministro eléctrico"],
}


export default function Home() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="bg-gradient-to-br from-blue-900 via-sky-400 to-yellow-400">
          <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                  {HOME_CONTENT.hero.title}
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-yellow-400">
                  {HOME_CONTENT.hero.subtitle}
                </h2>
                <p className="text-xl mb-8 opacity-90 leading-relaxed">
                  {HOME_CONTENT.hero.description}
                </p>
              </div>

              {/* Hero Image */}
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <img src={hero} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sistema Actual Section */}
      <section className="py-20  mx:4 md:mx-16">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              {HOME_CONTENT.sistemaActual.title}
            </h2>
            <h3 className="text-2xl font-semibold text-orange-400 mb-6">
              {HOME_CONTENT.sistemaActual.subtitle}
            </h3>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              {HOME_CONTENT.sistemaActual.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {HOME_CONTENT.sistemaActual.problemas.map((problema, index) => (
              <div
                key={index}
                className="bg-red-50 border-l-4 border-red-400 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200"
              >
                <div className="flex items-start">
                  <div className="bg-red-400 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-800 mb-2">
                      {problema.title}
                    </h4>
                    <p className="text-red-700 text-sm">
                      {problema.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-red-100 border border-red-300 rounded-xl p-8 text-center">
            <p className="text-red-800 text-lg font-medium">
              {HOME_CONTENT.sistemaActual.conclusion}
            </p>
          </div>
        </div>
      </section>

      {/* Solución Section */}
      <section className="py-20 bg-gradient-to-br from-sky-50 to-blue-50 ">
        <div className=" px-4 sm:px-6 lg:px-8  mx:4 md:mx-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              {HOME_CONTENT.solucion.title}
            </h2>
            <h3 className="text-2xl font-semibold text-orange-400 mb-6">
              {HOME_CONTENT.solucion.subtitle}
            </h3>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              {HOME_CONTENT.solucion.description}
            </p>
          </div>

          {/* Beneficios con imágenes */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {HOME_CONTENT.solucion.beneficios.map((beneficio, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200"
              >
                <div className="text-center flex items-center justify-center bg-gray-100" style={{minHeight: '220px'}}>
                  <img
                    src={beneficio.image}
                    alt={beneficio.title}
                    className="object-cover w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 mx-auto rounded-xl shadow-md transition-all duration-200"
                  />
                </div>

                <div className="p-6">
                  <h4 className="text-xl font-semibold text-blue-900 mb-3">
                    {beneficio.title}
                  </h4>
                  <p className="text-gray-600">{beneficio.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Objetivos y Metodología */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-orange-400 to-yellow-400 rounded-xl p-8 text-black">
              <h4 className="text-2xl font-bold mb-4">Nuestros Objetivo</h4>
              <p className="leading-relaxed">
                {HOME_CONTENT.solucion.objetivos}
              </p>
            </div>
            <div className="bg-gradient-to-r from-blue-900 to-sky-400 rounded-xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-4">Metodología Ágil</h4>
              <p className="leading-relaxed">
                {HOME_CONTENT.solucion.metodologia}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Imagen de demostración del sistema */}
      <section className="py-16 bg-gray-50 ">
        <div className="px-4 sm:px-6 lg:px-8  mx:4 md:mx-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-blue-900 mb-4">
              Vista del Sistema en Acción
            </h3>
            <p className="text-gray-600">
              Interfaz intuitiva diseñada para profesionales de la salud
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="flex items-center justify-center">
                <img
                  src={portalPaciente}
                  alt="Portal Paciente"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src={portalProfesional}
                  alt="Portal Profesional"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Análisis FODA */}
      <section className="py-20 bg-gray-50">
        <div className=" mx:4 md:mx-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-blue-900">Análisis FODA del Sistema</h2>
            <div className="w-24 h-1 mx-auto rounded-full bg-orange-400"></div>
            <p className="text-gray-600 mt-4">
              Evaluación estratégica de fortalezas, oportunidades, debilidades y amenazas
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Fortalezas */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-center mb-4">
                <div className="bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-3">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-green-800">Fortalezas</h3>
              </div>
              <ul className="space-y-3">
                {FODA_DATA.fortalezas.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-green-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Oportunidades */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-center mb-4">
                <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-3">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-800">Oportunidades</h3>
              </div>
              <ul className="space-y-3">
                {FODA_DATA.oportunidades.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-blue-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Debilidades */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-3">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-yellow-800">Debilidades</h3>
              </div>
              <ul className="space-y-3">
                {FODA_DATA.debilidades.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-yellow-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Amenazas */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-center mb-4">
                <div className="bg-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-3">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-red-800">Amenazas</h3>
              </div>
              <ul className="space-y-3">
                {FODA_DATA.amenazas.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-red-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Resumen del análisis */}
          <div className="mt-8 bg-gradient-to-r from-blue-900 to-sky-400 rounded-xl p-6 text-white">
            <h4 className="text-xl font-bold mb-3">Conclusión del Análisis FODA</h4>
            <p className="opacity-90">
              El análisis FODA revela que el sistema de historial clínico digital presenta más fortalezas y
              oportunidades que debilidades y amenazas. Las principales ventajas se centran en la eficiencia operativa y
              la mejora del servicio al paciente, mientras que los desafíos principales están relacionados con la
              implementación y la seguridad de datos.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
