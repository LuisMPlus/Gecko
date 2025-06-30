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
    title: "Posible Solución",
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
    </main>
  );
}
