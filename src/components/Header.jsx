
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Container from './Container.jsx'
import logo from "../assets/image-high-4fxvzd.webp"
const navItems = [
  { to: '/', label: 'Home' },
  { to: '/servicios', label: 'Servicios' },
  { to: '/equipo', label: 'Equipo' },
  { to: '/contacto', label: 'Contacto' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/85 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <Container className="flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2" aria-label="Inicio">
         <img
            src={logo}
            alt="LexStudio Logo"
            className="h-12 w-auto"  
          />
        </Link>
        <nav aria-label="Principal" className="hidden gap-6 md:flex">
          {navItems.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-primary ${isActive ? 'text-primary' : 'text-gray-700'}`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden md:block">
          <Link
            to="/contacto"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
             style={{ backgroundColor: "rgb(138, 37, 37)" }}
          >
            Pedir cita
          </Link>
        </div>
        <button
          type="button"
          className="inline-flex items-center rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-700 md:hidden"
          aria-label="Abrir menú"
          aria-expanded={open ? 'true' : 'false'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Cerrar' : 'Menú'}
        </button>
      </Container>
      {open && (
        <div className="md:hidden">
          <div className="space-y-1 border-t border-gray-200 bg-white px-4 py-3">
            {navItems.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block rounded px-2 py-2 text-sm ${isActive ? 'bg-light text-primary' : 'text-gray-800 hover:bg-light'}`
                }
              >
                {n.label}
              </NavLink>
            ))}
            <Link
              to="/contacto"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white"
              style={{ backgroundColor: "rgb(138, 37, 37)" }}
            >
              Pedir cita
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
