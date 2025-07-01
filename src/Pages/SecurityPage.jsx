"use client";

// Constantes para el contenido de seguridad
const SEGURIDAD_CONTENT = {
  title: "Seguridad y Ética Digital",
  subtitle:
    "Medidas de Seguridad y Cifrado para Proteger la Privacidad y la Ética",
  description:
    "Implementamos las más altas medidas de seguridad y protocolos éticos para garantizar la protección de datos sensibles y el cumplimiento de normativas legales en el ámbito sanitario.",

  medidas: [
    {
      id: 1,
      titulo: "Cifrado de datos en reposo y en tránsito",
      descripcion: {
        reposo:
          "Los datos que están almacenados en bases de datos o servidores deben estar cifrados con algoritmos como AES-256.",
        transito:
          "Todo dato que viaje entre el navegador y el servidor debe ir cifrado usando HTTPS (SSL/TLS).",
        porque:
          "Protege la información frente a ataques o accesos físicos al servidor.",
      },
      definicion: {
        titulo: "¿Qué es AES-256? (Advanced Encryption Standard)",
        descripcion:
          "Es un método de cifrado simétrico fuerte, este es el estándar más seguro actual",
      },
    },
    {
      id: 2,
      titulo: "Control de accesos por roles (RBAC)",
      descripcion: {
        niveles: [
          "Recepcionistas no deben ver diagnósticos",
          "Odontólogos no deben acceder a registros de otros pacientes sin justificación",
          "Solo administradores pueden cambiar configuraciones o borrar registros",
        ],
        porque: "Evita el acceso indebido a información sensible.",
      },
      definicion: {
        titulo: "RBAC: Control de Acceso Basado en Roles",
        descripcion:
          "Facilita la gestión de permisos en organizaciones, de esta manera puede ayudar a cumplir con las regulaciones de seguridad y privacidad.",
      },
    },
    {
      id: 3,
      titulo: "Bitácoras de actividad (logs)",
      descripcion: {
        registros: [
          "Qué usuario accedió a qué ficha",
          "Qué datos se modificaron y cuándo",
          "Quién descargó documentos o imágenes",
        ],
        porque:
          "Fomenta la ética y la trazabilidad. Si hay una fuga, se puede saber quién accedió.",
      },
      definicion: {
        titulo: "¿Qué son los logs (o bitácoras de actividad)?",
        descripcion:
          "Los logs son fundamentales para asegurar que todo lo que pasa en tu sistema quede registrado, y son clave tanto para la ciberseguridad como para la transparencia profesional.",
        detalle:
          "Los logs son registros automáticos que lleva el sistema sobre todo lo que hacen los usuarios, el servidor o la aplicación. Actúan como una caja negra que guarda una huella digital de cada acción importante que ocurre en el sistema.",
        importancia: [
          "Seguridad y auditoría: Si alguien accede indebidamente a un registro, podés saber quién fue y cuándo",
          "Ética laboral: Si un empleado accede a fichas sin autorización, queda registrado",
          "Detección de errores: También se usan para registrar fallos del sistema",
          "Cumplimiento legal: En muchos países son obligatorios para proteger datos sensibles",
        ],
      },
    },
    {
      id: 4,
      titulo: "Autenticación robusta",
      descripcion: {
        medidas: [
          "Contraseñas fuertes obligatorias (mínimo 8 caracteres, símbolos, etc.)",
          "Verificación en dos pasos (2FA): código adicional por email o app de autenticación",
          "Tokens de sesión cifrados y con expiración",
        ],
        porque:
          "Reduce riesgos por robo de contraseñas o accesos no autorizados.",
      },
    },
    {
      id: 5,
      titulo: "Encriptación de backups",
      descripcion: {
        medidas: [
          "Todos los respaldos automáticos (diarios o semanales) deben almacenarse cifrados",
          "Pueden guardarse en la nube o local, pero nunca sin cifrado",
          "Incluso si el backup se roba, no se puede leer (Se implementa el AES-256)",
        ],
      },
    },
    {
      id: 6,
      titulo: "Consentimiento informado digital",
      descripcion: {
        implementacion:
          "Implementa una pantalla donde el paciente firme un consentimiento digital sobre el uso y tratamiento de sus datos.",
        almacenamiento:
          "Guarda el documento firmado y protegelo como prueba legal.",
        porque: "Refuerza la transparencia y la ética profesional.",
      },
    },
    {
      id: 7,
      titulo: "Normativas legales que debés cumplir",
      descripcion: {
        argentina:
          "En Argentina: Ley 25.326 de Protección de Datos Personales.",
        objetivo:
          "Su objetivo principal es garantizar el derecho a la privacidad y protección de los datos personales de los individuos, regulando su recolección, almacenamiento, uso y transferencia tanto en el ámbito público como privado",
      },
    },
    {
      id: 8,
      titulo: "Prevención de ingeniería social y capacitaciones",
      descripcion: {
        capacitacion: [
          "No compartir usuarios",
          "No dejar sesiones abiertas",
          "Reconocer correos o links sospechosos",
        ],
      },
    },
  ],
};

export default function SeguridadPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 px-4 text-center bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-900">
            {SEGURIDAD_CONTENT.title}
          </h1>
          <h2 className="text-2xl font-semibold text-orange-400 mb-6">
            {SEGURIDAD_CONTENT.subtitle}
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            {SEGURIDAD_CONTENT.description}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="mx:4 md:mx-16 px-4 sm:px-6 lg:px-8 py-16">
        {/* Grupo 1: Cifrado y Control de Acceso (1-2) */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Medida 1: Cifrado */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                  1
                </div>
                <h2 className="text-xl font-bold text-blue-900">
                  Cifrado de datos en reposo y en tránsito
                </h2>
              </div>

              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-semibold text-blue-800 mb-2">
                    En reposo:
                  </h3>
                  <p className="text-blue-700 text-sm">
                    {SEGURIDAD_CONTENT.medidas[0].descripcion.reposo}
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-semibold text-blue-800 mb-2">
                    En tránsito:
                  </h3>
                  <p className="text-blue-700 text-sm">
                    {SEGURIDAD_CONTENT.medidas[0].descripcion.transito}
                  </p>
                </div>
                <div className="bg-orange-100 rounded-lg p-4">
                  <h3 className="font-semibold text-orange-800 mb-2">
                    ¿Por qué?
                  </h3>
                  <p className="text-orange-700 text-sm">
                    {SEGURIDAD_CONTENT.medidas[0].descripcion.porque}
                  </p>
                </div>
                <div className="bg-gray-100 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">
                    {SEGURIDAD_CONTENT.medidas[0].definicion.titulo}
                  </h3>
                  <p className="text-gray-700 text-sm">
                    {SEGURIDAD_CONTENT.medidas[0].definicion.descripcion}
                  </p>
                </div>
              </div>
            </div>

            {/* Medida 2: RBAC */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-green-700 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                  2
                </div>
                <h2 className="text-xl font-bold text-green-900">
                  Control de accesos por roles (RBAC)
                </h2>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-green-800 mb-2">
                    Asignar niveles de acceso según el rol:
                  </h3>
                  <div className="space-y-2">
                    {SEGURIDAD_CONTENT.medidas[1].descripcion.niveles.map(
                      (nivel, idx) => (
                        <div
                          key={idx}
                          className="bg-red-100 border-l-4 border-red-400 p-2 rounded-r text-sm"
                        >
                          <p className="text-red-700 font-medium">{nivel}</p>
                        </div>
                      )
                    )}
                  </div>
                </div>
                <div className="bg-orange-100 rounded-lg p-4">
                  <h3 className="font-semibold text-orange-800 mb-2">
                    ¿Por qué?
                  </h3>
                  <p className="text-orange-700 text-sm">
                    {SEGURIDAD_CONTENT.medidas[1].descripcion.porque}
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">
                    {SEGURIDAD_CONTENT.medidas[1].definicion.titulo}
                  </h3>
                  <p className="text-gray-700 text-sm">
                    {SEGURIDAD_CONTENT.medidas[1].definicion.descripcion}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Grupo 2: Logs (3) - Sección completa por su extensión */}
        <section className="mb-16">
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-purple-700 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                3
              </div>
              <h2 className="text-2xl font-bold text-purple-900">
                Bitácoras de actividad (logs)
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-purple-800 mb-3">
                    Registrar:
                  </h3>
                  <div className="space-y-2">
                    {SEGURIDAD_CONTENT.medidas[2].descripcion.registros.map(
                      (registro, idx) => (
                        <div
                          key={idx}
                          className="bg-blue-100 border-l-4 border-blue-400 p-3 rounded-r text-sm"
                        >
                          <p className="text-blue-700 font-medium">
                            {registro}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </div>
                <div className="bg-orange-100 rounded-lg p-4">
                  <h3 className="font-semibold text-orange-800 mb-2">
                    ¿Por qué?
                  </h3>
                  <p className="text-orange-700 text-sm">
                    {SEGURIDAD_CONTENT.medidas[2].descripcion.porque}
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-3">
                  {SEGURIDAD_CONTENT.medidas[2].definicion.titulo}
                </h3>
                <p className="text-gray-700 text-sm mb-3">
                  {SEGURIDAD_CONTENT.medidas[2].definicion.descripcion}
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  {SEGURIDAD_CONTENT.medidas[2].definicion.detalle}
                </p>

                <h4 className="font-semibold text-gray-800 mb-2 text-sm">
                  Su importancia:
                </h4>
                <div className="space-y-2">
                  {SEGURIDAD_CONTENT.medidas[2].definicion.importancia.map(
                    (punto, idx) => (
                      <div key={idx} className="bg-gray-100 rounded p-2">
                        <p className="text-gray-700 text-xs">{punto}</p>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Grupo 3: Autenticación y Backups (4-5) */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Medida 4: Autenticación */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-yellow-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                  4
                </div>
                <h2 className="text-xl font-bold text-yellow-900">
                  Autenticación robusta
                </h2>
              </div>

              <div className="space-y-3">
                {SEGURIDAD_CONTENT.medidas[3].descripcion.medidas.map(
                  (medidaAuth, idx) => (
                    <div
                      key={idx}
                      className="bg-green-100 border-l-4 border-green-400 p-3 rounded-r"
                    >
                      <p className="text-green-700 font-medium text-sm">
                        {medidaAuth}
                      </p>
                    </div>
                  )
                )}
                <div className="bg-orange-100 rounded-lg p-4">
                  <h3 className="font-semibold text-orange-800 mb-2">
                    ¿Por qué?
                  </h3>
                  <p className="text-orange-700 text-sm">
                    {SEGURIDAD_CONTENT.medidas[3].descripcion.porque}
                  </p>
                </div>
              </div>
            </div>

            {/* Medida 5: Backups */}
            <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-indigo-700 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                  5
                </div>
                <h2 className="text-xl font-bold text-indigo-900">
                  Encriptación de backups
                </h2>
              </div>

              <div className="space-y-3">
                {SEGURIDAD_CONTENT.medidas[4].descripcion.medidas.map(
                  (medidaBackup, idx) => (
                    <div
                      key={idx}
                      className="bg-purple-100 border-l-4 border-purple-400 p-3 rounded-r"
                    >
                      <p className="text-purple-700 font-medium text-sm">
                        {medidaBackup}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Grupo 4: Consentimiento y Normativas (6-7) */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Medida 6: Consentimiento */}
            <div className="bg-teal-50 border border-teal-200 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-teal-700 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                  6
                </div>
                <h2 className="text-xl font-bold text-teal-900">
                  Consentimiento informado digital
                </h2>
              </div>

              <div className="space-y-4">
                <div className="bg-blue-100 rounded-lg p-4">
                  <h3 className="font-semibold text-blue-800 mb-2">
                    Implementación:
                  </h3>
                  <p className="text-blue-700 text-sm">
                    {SEGURIDAD_CONTENT.medidas[5].descripcion.implementacion}
                  </p>
                </div>
                <div className="bg-green-100 rounded-lg p-4">
                  <h3 className="font-semibold text-green-800 mb-2">
                    Almacenamiento:
                  </h3>
                  <p className="text-green-700 text-sm">
                    {SEGURIDAD_CONTENT.medidas[5].descripcion.almacenamiento}
                  </p>
                </div>
                <div className="bg-orange-100 rounded-lg p-4">
                  <h3 className="font-semibold text-orange-800 mb-2">
                    ¿Por qué?
                  </h3>
                  <p className="text-orange-700 text-sm">
                    {SEGURIDAD_CONTENT.medidas[5].descripcion.porque}
                  </p>
                </div>
              </div>
            </div>

            {/* Medida 7: Normativas */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-red-700 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                  7
                </div>
                <h2 className="text-xl font-bold text-red-900">
                  Normativas legales que debés cumplir
                </h2>
              </div>

              <div className="space-y-4">
                <div className="bg-red-100 rounded-lg p-4">
                  <h3 className="font-semibold text-red-800 mb-2">
                    Normativa Argentina:
                  </h3>
                  <p className="text-red-700 font-medium text-sm">
                    {SEGURIDAD_CONTENT.medidas[6].descripcion.argentina}
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Objetivo:
                  </h3>
                  <p className="text-gray-700 text-sm">
                    {SEGURIDAD_CONTENT.medidas[6].descripcion.objetivo}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Grupo 5: Capacitación (8) */}
        <section className="mb-16">
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 max-w-4xl mx-auto">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-orange-700 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                8
              </div>
              <h2 className="text-2xl font-bold text-orange-900">
                Prevención de ingeniería social y capacitaciones
              </h2>
            </div>

            <div>
              <h3 className="font-semibold text-orange-800 mb-3">
                La seguridad no solo es técnica, también es humana ya que se
                lleva a cabo la capacitación dell personal sobre:
              </h3>
              <div className="space-y-2">
                {SEGURIDAD_CONTENT.medidas[7].descripcion.capacitacion.map(
                  (tema, idx) => (
                    <div
                      key={idx}
                      className="bg-yellow-100 border-l-4 border-yellow-400 p-3 rounded-r"
                    >
                      <p className="text-yellow-700 font-medium text-sm">
                        {tema}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
