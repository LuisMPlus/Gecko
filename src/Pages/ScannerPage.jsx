"use client"

// Importaciones de imágenes de Scanner
import codebeamImg from "../assets/imgs/Scanner/codebeam.png";
import flujocodebeamImg from "../assets/imgs/Scanner/flujocodebeam.png";
import escanerintroralImg from "../assets/imgs/Scanner/escanerintraoral.png";
import cajanegraescanerintroralImg from "../assets/imgs/Scanner/cajanegraescanerintraoral.png";
import cajanegracodebeamImg from "../assets/imgs/Scanner/cajanegracodebeam.png";
import invisalignImg from "../assets/imgs/Scanner/invisalign.jpg";
import sensoresutilizadosescanerintroralImg from "../assets/imgs/Scanner/sensoresutilizadosescanerintraoral.png";
import cajanegrainvisalignImg from "../assets/imgs/Scanner/cajanegrainvisalign.png";
import resumensensoresclavfeImg from "../assets/imgs/Scanner/resumensensoresclavfe.png";
import sensoresinvisalignImg from "../assets/imgs/Scanner/sensoresinvisalign.png";


// Constantes para el contenido del scanner
const SCANNER_CONTENT = {
  title: "Tecnologías de Diagnóstico Avanzado",
  subtitle: "Sistemas de Captura y Análisis Digital",
  description:
    "Contamos con un historial sólido en el tratamiento de diversos archivos, incluyendo aquellos generados mediante tecnologías aplicadas a la odontología. Entre ellas se destacan:",

  tecnologias: [
    "La tomografía computarizada de haz cónico (CBCT) también conocida como Cone Beam",
    "Escáner intraoral 3D",
    "Invisalign",
  ],

  coneBeam: {
    title: "Cone Beam",
    descripcion:
      "Funciona como un sistema de captura y conversión de imágenes. Es una técnica de imagen seccional tridimensional utilizada en odontología para examinar los tejidos calcificados como huesos y dientes. Ofrece imágenes detalladas y precisas, lo que la convierte en una herramienta valiosa para el diagnóstico y la planificación de tratamientos.",
    funcionamiento:
      "Utiliza un haz de rayos X en forma de cono que rota alrededor de la zona a examinar, generando una serie de imágenes 2D. Luego, un software especializado reconstruye estas imágenes 2D en una representación 3D tridimensional.",
    beneficios: [
      "Proporciona una imagen digital tridimensional integral de cara y mandíbula",
      "Útil para el diagnóstico de afecciones dentales complejas",
      "Más rápido, más seguro y más cómodo que una tomografía computarizada médica",
      "Crea planes de tratamiento mejores y más efectivos",
    ],
    magnitudesAnalogicas: [
      {
        titulo: "Radiación Electromagnética (Rayos X)",
        magnitud: "Flujo de fotones (intensidad de rayos X), energía en kiloelectronvoltios (keV)",
        sensor: "Detector de rayos X",
      },
      {
        titulo: "Corriente y voltaje del tubo de rayos X",
        magnitud:
          "kVp (kilovoltios pico): voltaje aplicado entre el ánodo y el cátodo. mA (miliamperios): corriente que determina la cantidad de fotones generados",
        sensor: "Monitores internos del generador de rayos X",
      },
      {
        titulo: "Movimiento mecánico (rotación del brazo)",
        magnitud: "Posición/ángulo de rotación, velocidad",
        sensor: "Encoders rotatorios (ópticos o magnéticos)",
      },
    ],
    magnitudesDigitales: [
      {
        titulo: "Señal digital de imagen (números digitales)",
        magnitud: "Valores en escala de grises (unidades arbitrarias o HU en tomografía)",
        funcion: "Representan la atenuación de rayos X en cada punto del volumen",
      },
      {
        titulo: "Datos de reconstrucción",
        magnitud: "Matrices de datos (voxeles)",
        funcion: "Permiten construir una imagen volumétrica en 3D a partir de múltiples proyecciones",
      },
      {
        titulo: "Parámetros del software de adquisición",
        magnitud: "Pantalla y sistema operativo del equipo",
        funcion: "Controlan la lógica de adquisición y aseguran la calidad diagnóstica",
      },
    ],
  },

  escanerIntraoral: {
    title: "Escáner intraoral 3D",
    descripcion:
      "Es una herramienta capaz de generar imágenes 3D de la boca del paciente. El escáner intraoral dispone de un programa informático en el que se introducen los datos del paciente y, dispone además, de un sensor que se introduce en la boca del paciente, con el objetivo de tomar imágenes de su interior.",
    ventajas: ["Menos incomodidad", "Mayor precisión", "Ahorro de tiempo", "Archivos 3D", "Mejor comunicación"],
    magnitudesAnalogicas: [
      "Luz reflejada: Intensidad y color de la luz que rebota en los tejidos dentales y gingivales",
      "Distancia y profundidad: Espacio entre el escáner y las superficies del diente o encía",
      "Movimiento: Cambios en la posición del escáner o del paciente",
    ],
    magnitudesDigitales: [
      "Nube de puntos: Representación 3D de coordenadas obtenidas de la superficie oral escaneada",
      "Malla digital: Superficie generada al unir puntos para formar una representación tridimensional continua",
      "Textura RGB: Información de color aplicada al modelo 3D para hacerlo más realista",
    ],
  },

  invisalign: {
    title: "Invisalign",
    descripcion:
      "Es un sistema de ortodoncia que utiliza alineadores transparentes y removibles para corregir pequeñas malposiciones dentales.",
    ventajas: ["Discreción", "Comodidad", "Higiene", "Precisión"],
    magnitudesDigitales: [
      "Coordenadas tridimensionales de las piezas dentarias",
      "Ángulos de inclinación y rotación dentaria",
      "Distancias interdentales y relaciones oclusales",
      "Secuencia de movimiento y tiempo por etapa",
      "Espesor y geometría de los alineadores",
    ],
    magnitudesAnalogicas: [
      "Temperatura del proceso de termoformado",
      "Presión del termoformado",
      "Espesor de la lámina termoplástica",
      "Calidad superficial y dimensional del modelo 3D impreso",
    ],
  },
}

export default function ScannerPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 px-4 text-center bg-gradient-to-br from-sky-50 to-blue-50">
        <div className="mx:4 md:mx-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-900">{SCANNER_CONTENT.title}</h1>
          <h2 className="text-2xl font-semibold text-orange-400 mb-6">{SCANNER_CONTENT.subtitle}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">{SCANNER_CONTENT.description}</p>

          {/* Lista de tecnologías */}
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-2xl mx-auto">
            <ul className="space-y-3">
              {SCANNER_CONTENT.tecnologias.map((tech, index) => (
                <li key={index} className="flex items-center text-left">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700 font-medium">{tech}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="mx:4 md:mx-16 px-4 sm:px-6 lg:px-8 py-16">
        {/* Cone Beam Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-blue-900">{SCANNER_CONTENT.coneBeam.title}</h2>
            <div className="w-24 h-1 mx-auto rounded-full bg-orange-400"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              

              {/* Imagen ilustrativa */}
              <div>
                <img src={codebeamImg} alt="Cone Beam" className="w-full h-full object-contain transition-transform duration-300 rounded-xl" />
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-gray-700 text-lg">{SCANNER_CONTENT.coneBeam.descripcion}</p>
              <p className="text-gray-600">{SCANNER_CONTENT.coneBeam.funcionamiento}</p>
              <div>
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Algunos beneficios:</h3>
                <div className="space-y-3">
                  {SCANNER_CONTENT.coneBeam.beneficios.map((beneficio, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{beneficio}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Magnitudes Analógicas */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-blue-900 mb-6">Magnitudes Analógicas:</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {SCANNER_CONTENT.coneBeam.magnitudesAnalogicas.map((magnitud, index) => (
                <div key={index} className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h4 className="font-bold text-blue-800 mb-3">{magnitud.titulo}</h4>
                  <p className="text-blue-700 text-sm mb-2">
                    <strong>Magnitud física:</strong> {magnitud.magnitud}
                  </p>
                  <p className="text-blue-700 text-sm">
                    <strong>Sensor asociado:</strong> {magnitud.sensor}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Magnitudes Digitales */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-blue-900 mb-6">Magnitudes Digitales:</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {SCANNER_CONTENT.coneBeam.magnitudesDigitales.map((magnitud, index) => (
                <div key={index} className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h4 className="font-bold text-green-800 mb-3">{magnitud.titulo}</h4>
                  <p className="text-green-700 text-sm mb-2">
                    <strong>Magnitud:</strong> {magnitud.magnitud}
                  </p>
                  <p className="text-green-700 text-sm">
                    <strong>Función:</strong> {magnitud.funcion}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Imágenes técnicas */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-xl h-48 overflow-hidden transition-shadow duration-300">
              <img src={cajanegracodebeamImg} alt="Diagrama caja negra Cone Beam" className="w-full h-full object-contain transition-transform duration-300" />
            </div>
            <div className="rounded-xl h-48 overflow-hidden transition-shadow duration-300">
              <img src={flujocodebeamImg} alt="Flujo de señal Cone Beam" className="w-full h-full object-contain transition-transform duration-300" />
            </div>
            <div className="rounded-xl h-48 overflow-hidden transition-shadow duration-300">
              <img src={resumensensoresclavfeImg} alt="Sensores clave" className="w-full h-full object-contain transition-transform duration-300" />
            </div>
          </div>
        </section>

        {/* Escáner Intraoral Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-blue-900">{SCANNER_CONTENT.escanerIntraoral.title}</h2>
            <div className="w-24 h-1 mx-auto rounded-full bg-orange-400"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <div className="space-y-6">
              <p className="text-gray-700 text-lg">{SCANNER_CONTENT.escanerIntraoral.descripcion}</p>

              {/* Imagen del escáner */}
              <div className="rounded-xl h-64">
                <img src={escanerintroralImg} alt="Escáner intraoral 3D" className="w-full h-full object-contain transition-transform duration-300 rounded-xl" />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Ventajas del escáner intraoral:</h3>
                <div className="space-y-3 mb-6">
                  {SCANNER_CONTENT.escanerIntraoral.ventajas.map((ventaja, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-gray-700 font-medium">{ventaja}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Imagen caja negra */}
              <div className="rounded-xl ">
                <img src={cajanegraescanerintroralImg} alt="Modelo caja negra escáner intraoral" className="w-full h-full object-contain transition-transform duration-300" />
              </div>
            </div>
          </div>

          {/* Magnitudes del escáner */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Magnitudes analógicas</h3>
              <ul className="space-y-2">
                {SCANNER_CONTENT.escanerIntraoral.magnitudesAnalogicas.map((magnitud, index) => (
                  <li key={index} className="text-blue-700 text-sm">
                    • {magnitud}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-4">Magnitudes digitales</h3>
              <ul className="space-y-2">
                {SCANNER_CONTENT.escanerIntraoral.magnitudesDigitales.map((magnitud, index) => (
                  <li key={index} className="text-green-700 text-sm">
                    • {magnitud}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Imagen de sensores */}
          <div className="flex justify-center">
            <div className="rounded-xl h-64 w-full">
              <img src={sensoresutilizadosescanerintroralImg} alt="Cuadro de sensores utilizados" className="w-full h-full object-contain transition-transform duration-300 rounded-xl" />
            </div>
          </div>
        </section>

        {/* Invisalign Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-blue-900">{SCANNER_CONTENT.invisalign.title}</h2>
            <div className="w-24 h-1 mx-auto rounded-full bg-orange-400"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            <div className="space-y-6">
              <p className="text-gray-700 text-lg">{SCANNER_CONTENT.invisalign.descripcion}</p>
              <div>
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Ventajas:</h3>
                <div className="space-y-3">
                  {SCANNER_CONTENT.invisalign.ventajas.map((ventaja, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-gray-700 font-medium">{ventaja}</span>
                    </div>
                  ))}
                </div>
              </div>
              
            </div>

            <div className="space-y-6">
              {/* Imagen de ejemplo */}
              <div className="rounded-xl h-64 overflow-hidden">
                <img src={invisalignImg} alt="Invisalign" className="w-full h-full object-contain transition-transform duration-300" />
              </div>
            </div>

              {/* Imagen caja negra - usar una imagen existente o crear un placeholder más apropiado */}
              <div className="rounded-xl h-80 overflow-hidden flex items-center justify-center">
                <img src={cajanegrainvisalignImg} alt="Invisalign" className="w-full h-full object-contain transition-transform duration-300" />
              </div>
          </div>

          {/* Magnitudes de Invisalign */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-4">
                Magnitudes Digitales (derivadas del modelo digital del paciente):
              </h3>
              <ul className="space-y-2">
                {SCANNER_CONTENT.invisalign.magnitudesDigitales.map((magnitud, index) => (
                  <li key={index} className="text-green-700 text-sm">
                    • {magnitud}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Magnitudes Analógicas</h3>
              <ul className="space-y-2">
                {SCANNER_CONTENT.invisalign.magnitudesAnalogicas.map((magnitud, index) => (
                  <li key={index} className="text-blue-700 text-sm">
                    • {magnitud}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Imagen final */}
          <div className="flex justify-center">
            <img src={sensoresinvisalignImg} alt="Invisalign" className="w-full h-full object-contain transition-transform duration-300" style={{ width: "40vw" }} />
          </div>
        </section>

      </main>
    </div>
  )
}
