import Logo from "./Logo";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <Logo className="w-12 h-12 mr-3" />
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Soluciones tecnológicas innovadoras para el sector sanitario. Transformamos la atención médica a través de
              sistemas informáticos avanzados.
            </p>
            
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-400">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/fundamentals" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Fundamentos
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Equipo
                </Link>
              </li>
              <li>
                <Link to="/closing" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Cierre
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-400">Contacto</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +1 (555) 123-4567
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@sistema.com
              </li>
              <li className="flex items-start">
                <svg className="w-4 h-4 mr-2 mt-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                123 Tech Street, Ciudad, País
              </li>
            </ul>
          </div>
        </div>

        {/* Línea divisoria y copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2025 Gecko. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
