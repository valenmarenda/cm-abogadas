import React from 'react'
import SEO from '../lib/seo.jsx'
import Container from '../components/Container.jsx'

const team = [
  { name: 'Elena Ruiz', role: 'Abogada de Extranjería', bio: 'Especialista en visados y nacionalidad.' },
  { name: 'Carlos Medina', role: 'Legal Advisor', bio: 'Experto en trámites para empresas y talento internacional.' },
  { name: 'Lucía Gómez', role: 'Paralegal', bio: 'Gestión documental y seguimiento de expedientes.' },
]

export default function Equipo() {
  return (
    <main>
      <SEO title="Equipo" description="Conoce al equipo del estudio legal." />
      <section className="py-12">
        <Container>
          <h1 className="font-display text-3xl font-semibold text-carbon">Equipo</h1>
          <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((p) => (
              <li key={p.name} className="rounded-lg border border-gray-200 bg-white p-5">
                <div aria-hidden className="h-16 w-16 rounded-full bg-primary/10" />
                <div className="mt-3 font-medium text-gray-900">{p.name}</div>
                <div className="text-sm text-gray-600">{p.role}</div>
                <p className="mt-2 text-sm text-gray-600">{p.bio}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <section className="bg-light py-16">
        <Container>
          <p className="text-xs tracking-[0.3em] text-gray-500">Asesoría legal especializada en extranjería</p>
          <h2 className="mt-2 font-display text-4xl font-semibold text-carbon" >Sobre nosotros</h2>
          <p className="mt-4 max-w-4xl text-gray-700">
          CM Abogadas es un despacho joven y comprometido, especializado en extranjería.
Ofrecemos un servicio moderno, cercano y adaptado a ti, combinando rigor jurídico con flexibilidad y humanidad.
Nuestro objetivo: que te sientas acompañado y respaldado en cada paso de tu proceso legal.

Nuestro enfoque se basa en la calidad y la integridad, garantizando que todo lo que hacemos refleje nuestro compromiso con la excelencia.
          </p>
          <div className="mt-8">
            <a href="/servicios" style={{ backgroundColor: "rgb(138, 37, 37)" }} className="inline-flex rounded-full bg-gold px-5 py-2 text-sm font-medium text-white hover:brightness-95">Comencemos</a>
          </div>
        </Container>
      </section>
    </main>
  )
}
