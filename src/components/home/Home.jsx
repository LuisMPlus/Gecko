"use client"

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">

      {/* Main Content - Solo relleno para llenar viewport */}
      <div className="flex-1 bg-gradient-to-br from-[#80b7c3] to-[#F69055]">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 lg:mb-6">
              Contenido Principal
            </h1>
            <p className="text-white/80 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
              Este es el área principal de contenido que se adapta perfectamente a todos los dispositivos
            </p>
            <div className="mt-6 sm:mt-8 lg:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6">
                <h3 className="text-white font-semibold text-sm sm:text-base mb-2">Responsive Design</h3>
                <p className="text-white/70 text-xs sm:text-sm">Optimizado para todos los dispositivos</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6">
                <h3 className="text-white font-semibold text-sm sm:text-base mb-2">Navegación Intuitiva</h3>
                <p className="text-white/70 text-xs sm:text-sm">Fácil acceso en móviles y desktop</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 sm:col-span-2 lg:col-span-1">
                <h3 className="text-white font-semibold text-sm sm:text-base mb-2">Experiencia Optimizada</h3>
                <p className="text-white/70 text-xs sm:text-sm">Rendimiento en todas las pantallas</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
