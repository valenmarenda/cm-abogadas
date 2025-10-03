
import { Link } from 'react-router-dom'
import Container from './Container.jsx'

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200 bg-gray-50">
      <Container className="grid gap-8 py-10 md:grid-cols-3">
        <div>
          <div className="font-display text-lg font-semibold text-primary">CM Abogadas</div>
          <p className="mt-2 text-sm text-gray-600">Estudio legal — Extranjería y empresas.</p>
          <p className="mt-2 text-sm text-gray-600">Madrid · Murcia</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-800">Contacto</h3>
          <ul className="mt-2 space-y-1 text-sm text-gray-600">
            <li><a href="tel:+34999999999" className="hover:text-primary">+34 999 999 999</a></li>
            <li><a href="mailto:contacto@example.com" className="hover:text-primary">contacto@example.com</a></li>
            <li>Calle Ejemplo 123, Madrid</li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-800">Legal</h3>
          <ul className="mt-2 space-y-1 text-sm text-gray-600">
            <li><Link className="hover:text-primary" to="/aviso-legal">Aviso legal</Link></li>
            <li><Link className="hover:text-primary" to="/privacidad">Privacidad</Link></li>
            <li><Link className="hover:text-primary" to="/cookies">Cookies</Link></li>
          </ul>
        </div>
      </Container>
      <div className="border-t border-gray-200 py-4 text-center text-xs text-gray-500">© {new Date().getFullYear()} CM Abogadas. Todos los derechos reservados.</div>
    </footer>
  )
}
