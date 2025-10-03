
import { Link } from 'react-router-dom'
import SEO from '../lib/seo.jsx'
import Container from '../components/Container.jsx'
import ServicePricingCard from '../components/ServicePricingCard.jsx'
import FAQ from '../components/FAQ.jsx'

const faqs = [
  { q: '¿Cómo empiezo mi trámite?', a: 'Agenda una consulta inicial para evaluar tu caso y definir el plan.' },
  { q: '¿Atienden de forma online?', a: 'Sí, podemos realizar el proceso de forma remota y segura.' },
  { q: '¿Qué documentos necesito?', a: 'Depende del trámite; te enviaremos un checklist personalizado.' },
  { q: '¿Trabajan en toda España?', a: 'Atendemos en Madrid y Murcia, y también online para todo el país.' },
  { q: '¿Ofrecen presupuesto?', a: 'Tras la evaluación inicial, te indicaremos tiempos orientativos y honorarios.' },
  { q: '¿Pueden revisar mi expediente?', a: 'Sí, realizamos revisiones para detectar riesgos y mejoras.' },
]

export default function Servicios() {
  return (
    <main>
      <SEO title="Servicios" description="Asesoría legal especializada en extranjería: visados, nacionalidad y más." />
      <section className="pt-6">
        <Container>
          <nav aria-label="Breadcrumb" className="text-sm text-gray-600">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span className="px-2" aria-hidden>›</span>
            <span className="text-gray-800">Servicios</span>
          </nav>
        </Container>
      </section>
      <section aria-labelledby="servicios" className="bg-light py-12">
        <Container>
          <p className="text-xs tracking-[0.3em] text-gray-500">NUESTROS SERVICIOS</p>
          <h1 id="servicios" className="mt-2 font-display text-3xl font-semibold text-carbon">Asesoría legal especializada en extranjería</h1>
          <p className="mt-4 max-w-3xl text-gray-700">Explora opciones habituales de asesoría y gestión.</p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <ServicePricingCard
              title="Asesoría online"
              price="49.99"
              features={['Análisis del caso','Verificación de documentación','Viabilidad de procedimientos','Presupuesto final']}
            />
            <ServicePricingCard
              title="Visados"
              price="449"
              features={['Estudio de documental','Armado de expediente','Ingreso de solicitud','Seguimiento de expediente','Recursos']}
            />
            <ServicePricingCard
              title="Nacionalidad española"
              price="499"
              features={['Análisis de viabilidad','Búsqueda / Solicitud de actas','Armado de expediente','Ingreso de solicitud','Subsanación de requerimientos']}
            />
          </div>
        </Container>
      </section>
      <section aria-labelledby="conocenos" className="py-12">
        <Container>
          <h2 id="conocenos" className="font-display text-3xl font-semibold text-carbon">Conoce más acerca de nuestros servicios</h2>
          <p className="mt-1 font-display text-2xl text-carbon">Preguntas frecuentes</p>
          <div className="mt-6 rounded-lg border border-gray-200 bg-white">
            <FAQ items={faqs} defaultOpenIndex={0} />
          </div>
        </Container>
      </section>
    </main>
  )
}
