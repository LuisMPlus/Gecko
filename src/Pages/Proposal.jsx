"use client";

import prototipo1 from "@/assets/imgs/Proposal/prototipo1.png";
import prototipo2 from "@/assets/imgs/Proposal/prototipo2.png";
import explicacionprototipo from "@/assets/imgs/Proposal/explicacionprototipo.png";
import aspectos from "@/assets/imgs/Proposal/aspectos.png";

import aspecto1 from "@/assets/imgs/Proposal/primeraspecto.png";
import aspecto2 from "@/assets/imgs/Proposal/segundoaspecto.png";
import aspecto3 from "@/assets/imgs/Proposal/terceraspecto.jpg";

import fdi from "@/assets/imgs/Proposal/FDI.jpg";

// Constantes para el contenido del prototipo
const PROTOTIPO_CONTENT = {
  title: "Prototipo del Sistema",
  subtitle: "Interfaz y Funcionalidades Principales",
  description:
    "Presentamos el prototipo de nuestro sistema de historial clínico digital, diseñado con una interfaz intuitiva y funcionalidades avanzadas para optimizar la gestión odontológica.",

  escaneo: {
    title: "Nuestra funcionalidad de Escaneo",
    subtitle:
      "Para incentivar a los profesionales, especialmente a aquellos con mayor antigüedad, se implementó una función de escaneo del odontograma.",
    pasos: {
      title: "EN TAN SOLO 3 SIMPLES PASOS:",
      items: [
        {
          title: "CLICK",
          description:
            "Clickea en el perfil del paciente cuyo archivo deseas escanear. Haz click en el botón 'ESCANEAR'.",
          image: aspecto1,
        },
        {
          title: "ESCANEAR",
          description:
            "Pon el documento boca abajo. Asegúrese que esté se encuentre limpio y sin arrugas. Listo.",
          image: aspecto2,
        },
        {
          title: "CONFIRMAR",
          description:
            "Mire en su pantalla y confirme que todo esté correcto. Su nuevo documento ya ha sido escaneado.",
          image: aspecto3,
        },
      ],
    },
    fundamento: {
      title: "¿En qué nos basamos?",
      description:
        "Argentina, como gran parte del mundo utiliza la notación FDI (La notación de la Federación Dental Internacional); para identificar los dientes.",
      detalles:
        "Todo esto permite al programa identificar facilmente el historial dental, y asi poder transformarlo en un archivo digital, cumple con la notacion FDI.",
    },
  },
};

export default function PrototipoPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 px-4 text-center bg-gradient-to-br from-sky-50 to-blue-50">
        <div className="mx:4 md:mx-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-900">
            {PROTOTIPO_CONTENT.title}
          </h1>
          <h2 className="text-2xl font-semibold text-orange-400 mb-6">
            {PROTOTIPO_CONTENT.subtitle}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            {PROTOTIPO_CONTENT.description}
          </p>

          {/* Dos imágenes del prototipo */}
          <div className="grid md:grid-cols-2 gap-8  mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-4">
              <div className="text-center">
                <img
                  src={prototipo1}
                  alt="Prototipo 1"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-4">
              <div className="text-center">
                <img
                  src={prototipo2}
                  alt="Prototipo 2"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <div className="">
              <img
                src={explicacionprototipo}
                alt="Explicación Prototipo"
                className="w-full h-full object-contain mb-4 rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="mx:4 md:mx-16 px-4 sm:px-6 lg:px-8 py-16">
        {/* Aspectos del Prototipo */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-blue-900">
              Aspectos Principales del Prototipo
            </h2>
            <div className="w-24 h-1 mx-auto rounded-full bg-orange-400"></div>
          </div>

          <div className="mx:4 md:mx-16 xl:mx-60">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="text-center">
                <img
                  src={aspectos}
                  alt="Aspectos del Prototipo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Funcionalidad de Escaneo */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-8 md:p-12">
            {/* Header de la funcionalidad */}
            <div className="flex flex-row lg:flex-row items-start  mb-12">
              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-4">
                  {PROTOTIPO_CONTENT.escaneo.title}
                </h2>
                <p className="text-gray-700 text-lg">
                  {PROTOTIPO_CONTENT.escaneo.subtitle}
                </p>
              </div>

              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mb-4 ml-auto">
                <svg
                  className="w-8 h-8 text-blue-900"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
            </div>

            {/* 3 Pasos del escaneo */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-center text-blue-900 mb-8">
                {PROTOTIPO_CONTENT.escaneo.pasos.title}
              </h3>

              <div className="grid md:grid-cols-3 gap-6">
                {PROTOTIPO_CONTENT.escaneo.pasos.items.map((paso, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-200 hover:border-orange-400 transition-colors duration-200"
                  >
                    <div className="text-center">
                      <img
                        src={paso.image}
                        alt={paso.title}
                        className="object-contain w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mx-auto mb-4 rounded-2xl"
                      />
                    </div>
                    <h4 className="font-bold text-blue-900 text-center mb-2">
                      {paso.title}
                    </h4>
                    <p className="text-gray-600 text-sm text-center">
                      {paso.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Fundamento del sistema */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">
                {PROTOTIPO_CONTENT.escaneo.fundamento.title}
              </h3>

              <div className="flex flex-col lg:flex-row items-center gap-8 justify-center">
                <img
                  src={fdi}
                  alt="Explicación Prototipo"
                  className="w-96 object-contain mb-4"
                />

                <div className=" max-w-2xl">
                  <p className="text-gray-700 text-lg mb-4 font-medium">
                    {PROTOTIPO_CONTENT.escaneo.fundamento.description}
                  </p>
                  <p className="text-gray-600">
                    {PROTOTIPO_CONTENT.escaneo.fundamento.detalles}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
