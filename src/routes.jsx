import React, { Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

// Pages
import Home from './pages/Home.jsx'
import Servicios from './pages/Servicios.jsx'
import ServicioNacionalidad from './pages/ServicioNacionalidad.jsx'
import ServicioVisados from './pages/ServicioVisados.jsx'
import FAQPage from './pages/FAQPage.jsx'
import Equipo from './pages/Equipo.jsx'
import Contacto from './pages/Contacto.jsx'
import AvisoLegal from './pages/AvisoLegal.jsx'
import Privacidad from './pages/Privacidad.jsx'
import Cookies from './pages/Cookies.jsx'

export function RouterView() {
  return (
    <Suspense fallback={<div className="p-6">Cargando…</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/servicios/nacionalidad" element={<ServicioNacionalidad />} />
        <Route path="/servicios/visados" element={<ServicioVisados />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/equipo" element={<Equipo />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/aviso-legal" element={<AvisoLegal />} />
        <Route path="/privacidad" element={<Privacidad />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  )
}

export default RouterView
