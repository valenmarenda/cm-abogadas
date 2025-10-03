import React from 'react'
import SEO from '../lib/seo.jsx'
import Container from '../components/Container.jsx'
import FAQ from '../components/FAQ.jsx'

export default function ServicioNacionalidad() {
  const faqs = [
    { q: '¿Quién puede solicitar?', a: 'Personas que cumplan requisitos de residencia o vínculos.' },
    { q: '¿Cuánto tarda el proceso?', a: 'Depende del expediente y la administración; te orientamos en consulta.' },
  ]
  return (
    <main>
      <SEO title="Nacionalidad" description="Trámite de nacionalidad española con acompañamiento integral." />
      <section className="py-12">
        <Container>
          <h1 className="font-display text-3xl font-semibold text-carbon">Nacionalidad</h1>
          <div className="prose prose-gray max-w-none">
            <h2>Qué incluye</h2>
            <ul>
              <li>Análisis de viabilidad</li>
              <li>Checklist y revisión documental</li>
              <li>Presentación y seguimiento</li>
            </ul>
            <h2>Proceso</h2>
            <ol>
              <li>Evaluación inicial</li>
              <li>Preparación del expediente</li>
              <li>Presentación y respuesta a requerimientos</li>
            </ol>
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
