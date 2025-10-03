import React from 'react'
import SEO from '../lib/seo.jsx'
import Container from '../components/Container.jsx'

export default function AvisoLegal() {
  return (
    <main>
      <SEO title="Aviso legal" description="Información legal del sitio." />
      <section className="py-12">
        <Container>
          <h1 className="font-display text-3xl font-semibold text-carbon">Aviso legal</h1>
          <div className="prose prose-gray max-w-none">
            <p>Este es un sitio demostrativo con contenidos de ejemplo.</p>
          </div>
        </Container>
      </section>
    </main>
  )
}
