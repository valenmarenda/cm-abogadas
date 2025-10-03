import React from 'react'
import SEO from '../lib/seo.jsx'
import Container from '../components/Container.jsx'

export default function Privacidad() {
  return (
    <main>
      <SEO title="Privacidad" description="Política de privacidad del sitio." />
      <section className="py-12">
        <Container>
          <h1 className="font-display text-3xl font-semibold text-carbon">Privacidad</h1>
          <div className="prose prose-gray max-w-none">
            <p>Este documento describe el tratamiento de datos personales a modo de ejemplo.</p>
          </div>
        </Container>
      </section>
    </main>
  )
}
