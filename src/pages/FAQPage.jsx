import React from 'react'
import SEO from '../lib/seo.jsx'
import Container from '../components/Container.jsx'
import FAQ from '../components/FAQ.jsx'

export default function FAQPage() {
  const items = [
    { q: '¿Qué incluye la consulta?', a: 'Evaluación del caso y plan de acción sugerido.' },
    { q: '¿Cómo agendo?', a: 'Desde la página de contacto puedes solicitar cita.' },
    { q: '¿Trabajan con empresas?', a: 'Sí, asesoramos a compañías con talento internacional.' },
    { q: '¿Atención remota?', a: 'Sí, según el trámite, podemos gestionarlo online.' },
    { q: '¿Presupuestos?', a: 'Tras evaluar tu caso, te compartimos una propuesta.' },
    { q: '¿Idiomas?', a: 'Atendemos en español e inglés.' },
  ]
  return (
    <main>
      <SEO title="Preguntas frecuentes" description="Respuestas a dudas frecuentes sobre extranjería." />
      <section className="py-12">
        <Container>
          <h1 className="font-display text-3xl font-semibold text-carbon">Preguntas frecuentes</h1>
          <div className="mt-6"><FAQ items={items} /></div>
        </Container>
      </section>
    </main>
  )
}
