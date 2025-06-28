"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import Logo from "../Logo" // Importa tu componente de logo aquí

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  return (
    <header className="bg-gradient-to-r from-blue-900 to-sky-400 shadow-lg text-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <div className="flex items-center">
            <Logo className="w-14 h-14 mr-4" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10">
            <Link to="/" className="text-white hover:text-yellow-400 font-semibold transition-colors duration-200 py-2 text-xl">
              Inicio
            </Link>
            <Link
              to="/"
              className="text-white hover:text-yellow-400 font-semibold transition-colors duration-200 py-2 text-xl"
            >
              Diagnóstico sanitario
            </Link>

            {/* Dropdown */}
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="text-white hover:text-yellow-400 font-medium transition-colors duration-200 flex items-center"
              >
                Sistema informático
                <svg
                  className={`ml-1 w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                  <div className="p-4">
                    {/* Introducción */}
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-blue-900 mb-3 border-b border-orange-400 pb-2">
                        Introducción
                      </h3>
                      <div className="space-y-2">
                        <Link
                          to="/propuesta"
                          className="block text-gray-700 hover:text-orange-400 hover:bg-gray-50 px-3 py-2 rounded transition-colors duration-200"
                        >
                          Propuesta
                        </Link>
                        <Link
                          to="/usuario"
                          className="block text-gray-700 hover:text-orange-400 hover:bg-gray-50 px-3 py-2 rounded transition-colors duration-200"
                        >
                          Usuario
                        </Link>
                      </div>
                    </div>

                    {/* Aplicaciones técnicas */}
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-blue-900 mb-3 border-b border-orange-400 pb-2">
                        Aplicaciones técnicas
                      </h3>
                      <div className="space-y-2">
                        <Link
                          to="/diagrama"
                          className="block text-gray-700 hover:text-orange-400 hover:bg-gray-50 px-3 py-2 rounded transition-colors duration-200"
                        >
                          Diagrama
                        </Link>
                        <Link
                          to="/conceptos"
                          className="block text-gray-700 hover:text-orange-400 hover:bg-gray-50 px-3 py-2 rounded transition-colors duration-200"
                        >
                          Aplicación de conceptos técnicos
                        </Link>
                        <Link
                          to="/ventajas"
                          className="block text-gray-700 hover:text-orange-400 hover:bg-gray-50 px-3 py-2 rounded transition-colors duration-200"
                        >
                          Ventajas
                        </Link>
                      </div>
                    </div>

                    {/* Soporte */}
                    <div>
                      <h3 className="text-lg font-semibold text-blue-900 mb-3 border-b border-orange-400 pb-2">
                        Soporte
                      </h3>
                      <div className="space-y-2">
                        <Link
                          to="/seguridad"
                          className="block text-gray-700 hover:text-orange-400 hover:bg-gray-50 px-3 py-2 rounded transition-colors duration-200"
                        >
                          Seguridad y ética digital
                        </Link>
                        <Link
                          to="/recursos"
                          className="block text-gray-700 hover:text-orange-400 hover:bg-gray-50 px-3 py-2 rounded transition-colors duration-200"
                        >
                          Recursos necesarios
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link to="/team" className="text-white hover:text-yellow-400 font-semibold transition-colors duration-200 py-2 text-xl">
              Equipo
            </Link>
            <Link to="/closing" className="text-white hover:text-yellow-400 font-semibold transition-colors duration-200 py-2 text-xl">
              Cierre
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button onClick={toggleMenu} className="lg:hidden text-white hover:text-yellow-400 focus:outline-none">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-6">
            <div className="space-y-6">
              <Link
                to="/"
                className="block text-white hover:text-yellow-400 font-semibold py-3 transition-colors duration-200 text-xl"
              >
                Inicio
              </Link>
              <Link
                to="/"
                className="block text-white hover:text-yellow-400 font-semibold py-3 transition-colors duration-200 text-xl"
              >
                Diagnóstico sanitario
              </Link>

              {/* Mobile Dropdown */}
              <div>
                <button
                  onClick={toggleDropdown}
                  className="w-full text-left text-white hover:text-yellow-400 font-medium py-2 transition-colors duration-200 flex items-center justify-between"
                >
                  Sistema informático
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {isDropdownOpen && (
                  <div className="ml-4 mt-2 space-y-3">
                    <div>
                      <h4 className="text-sm font-semibold text-orange-400 mb-2">Introducción</h4>
                      <div className="ml-2 space-y-1">
                        <Link
                          to="/"
                          className="block text-gray-300 hover:text-yellow-400 py-1 text-sm transition-colors duration-200"
                        >
                          Propuesta
                        </Link>
                        <Link
                          to="/"
                          className="block text-gray-300 hover:text-yellow-400 py-1 text-sm transition-colors duration-200"
                        >
                          Usuario
                        </Link>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-orange-400 mb-2">Aplicaciones técnicas</h4>
                      <div className="ml-2 space-y-1">
                        <Link
                          to="/"
                          className="block text-gray-300 hover:text-yellow-400 py-1 text-sm transition-colors duration-200"
                        >
                          Diagrama
                        </Link>
                        <Link
                          to="/"
                          className="block text-gray-300 hover:text-yellow-400 py-1 text-sm transition-colors duration-200"
                        >
                          Aplicación de conceptos técnicos
                        </Link>
                        <Link
                          to="/"
                          className="block text-gray-300 hover:text-yellow-400 py-1 text-sm transition-colors duration-200"
                        >
                          Ventajas
                        </Link>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-orange-400 mb-2">Soporte</h4>
                      <div className="ml-2 space-y-1">
                        <Link
                          to="/"
                          className="block text-gray-300 hover:text-yellow-400 py-1 text-sm transition-colors duration-200"
                        >
                          Seguridad y ética digital
                        </Link>
                        <Link
                          to="/"
                          className="block text-gray-300 hover:text-yellow-400 py-1 text-sm transition-colors duration-200"
                        >
                          Recursos necesarios
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/equipo"
                className="block text-white hover:text-yellow-400 font-semibold py-3 transition-colors duration-200 text-xl"
              >
                Equipo
              </Link>
              <Link
                to="/cierre"
                className="block text-white hover:text-yellow-400 font-semibold py-3 transition-colors duration-200 text-xl"
              >
                Cierre
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
