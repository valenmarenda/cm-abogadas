import React from 'react'
import SEO from '../lib/seo.jsx'
import Container from '../components/Container.jsx'
import FAQ from '../components/FAQ.jsx'

export default function ServicioVisados() {
  const faqs = [
    { q: '¿Qué visado me conviene?', a: 'Depende de tu perfil e intención; lo evaluamos en consulta.' },
    { q: '¿Se puede hacer a distancia?', a: 'Sí, realizamos el proceso online cuando es posible.' },
  ]
  return (
    <main>
      <SEO title="Visados" description="Visados de inversor, trabajo y nómada digital." />
      <section className="py-12">
        <Container>
          <h1 className="font-display text-3xl font-semibold text-carbon">Visados</h1>
          <div className="prose prose-gray max-w-none">
            <h2>Visado de inversor</h2>
            <p>Acompañamiento en la preparación, presentación y seguimiento del expediente.</p>
            <h2>Visado de trabajo</h2>
            <p>Asesoría para contratos, requisitos y documentación.</p>
            <h2>Visado de nómada digital</h2>
            <p>Guía completa para profesionales remotos que desean residir en España.</p>
          </div>
          <div className="mt-8">
            <h2 className="font-display text-2xl">FAQs relacionadas</h2>
            <FAQ items={faqs} />
          </div>
        </Container>
      </section>
    </main>
  )
}
