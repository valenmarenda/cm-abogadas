
import SEO from '../lib/seo.jsx'
import Container from '../components/Container.jsx'
import Hero from '../components/Hero.jsx'
import ServicePricingCard from '../components/ServicePricingCard.jsx'
import FAQ from '../components/FAQ.jsx'

import ContactForm from '../components/ContactForm.jsx'



const faqs = [
  { q: '¿Cómo empiezo mi trámite?', a: 'Agenda una consulta inicial para evaluar tu caso y definir el plan.' },
  { q: '¿Atienden de forma online?', a: 'Sí, podemos realizar el proceso de forma remota y segura.' },
  { q: '¿Qué documentos necesito?', a: 'Depende del trámite; te enviaremos un checklist personalizado.' },
  { q: '¿Trabajan en toda España?', a: 'Atendemos en Madrid y Murcia, y también online para todo el país.' },
  { q: '¿Ofrecen presupuesto?', a: 'Tras la evaluación inicial, te indicaremos tiempos orientativos y honorarios.' },
  { q: '¿Pueden revisar mi expediente?', a: 'Sí, realizamos revisiones para detectar riesgos y mejoras.' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'CM Abogadas',
  areaServed: [{ '@type': 'City', name: 'Madrid' }, { '@type': 'City', name: 'Murcia' }],
  telephone: '+34 999 999 999',
  email: 'contacto@example.com',
}

export default function Home() {
  return (
    <main>
      <SEO title="Extranjería y Nacionalidad" description="Estudio legal especializado en extranjería, visados y nacionalidad en España." jsonLd={jsonLd} />
      <Hero />
      <section aria-labelledby="mision" className="bg-white py-16">
        <Container>
          <h2 id="mision" className="sr-only">Nuestra misión</h2>
          <p className="font-display text-3xl leading-snug text-carbon sm:text-4xl md:text-5xl">
            En <span className="text-[rgb(138,37,37)]">CM ABOGADAS</span>, somos una firma dedicada exclusivamente al
            <span className="text-[rgb(138,37,37)]"> Derecho migratorio y de extranjería en España.</span> Nuestro objetivo es acompañarte en <span className="text-[rgb(138,37,37)]">cada paso de tu proceso</span> ofreciéndote la seguridad de contar con un equipo de
            <span className="text-[rgb(138,37,37)]"> profesionales</span> con amplia experiencia en la materia.
            <span className="ml-3 underline decoration-2 decoration-gold">pedir cita</span>
          </p>
        </Container>
      </section>
      <section aria-labelledby="servicios" className="bg-light py-12">
        <Container>
          <p className="text-xs tracking-[0.3em] text-gray-500">NUESTROS SERVICIOS</p>
          <h2 id="servicios" className="mt-2 font-display text-3xl font-semibold text-carbon">Asesoría legal especializada en extranjería</h2>
          <p className="mt-4 max-w-3xl text-gray-700">Entendemos que los trámites pueden generar incertidumbre. Ofrecemos asesoría personalizada para realizar tu proceso de manera efectiva y segura.</p>
          <div className="mt-8">
            <a href="/servicios" style={{ backgroundColor: "rgb(138, 37, 37)" }} className="inline-flex rounded-full bg-gold px-5 py-2 text-sm font-medium text-white hover:brightness-95">Más servicios</a>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <ServicePricingCard
              title="Asesoría legal individual y personalizada "
              price="49.99"
              features={[
                'Análisis del caso',
                'Verificación de documentación',
                'Viabilidad de procedimientos',
                'Presupuesto final',
              ]}
            />
            <ServicePricingCard
              title="Trámites Migratorios "
              price="449"
              features={[
                'Estudio de documental',
                'Armado de expediente',
                'Ingreso de solicitud',
                'Seguimiento de expediente',
                'Recursos',
              ]}
            />
            <ServicePricingCard
              title="Conoce a nuestros colaboradores"
              price="499"
              features={[
                'Análisis de viabilidad',
                'Búsqueda / Solicitud de actas',
                'Armado de expediente',
                'Ingreso de solicitud',
                'Subsanación de requerimientos',
              ]}
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
      <section aria-labelledby="contacto" className="bg-white py-16">
        <Container>
          <p className="text-xs tracking-[0.3em] text-gray-500">ENVÍA UN MENSAJE</p>
          <h2 id="contacto" className="mt-2 font-display text-3xl font-semibold text-carbon">Contáctanos</h2>
          <div className="mt-8 grid gap-10 md:grid-cols-2">
            <div>
              <ContactForm />
            </div>
            <aside className="space-y-8">
              <div>
                <h3 className="font-display text-xl text-carbon">Whatsapp</h3>
                <p className="mt-1 text-gray-700">+34 999 999 999</p>
              </div>
              <div>
                <h3 className="font-display text-xl text-carbon">Correo</h3>
                <p className="mt-1 text-gray-700">contacto@example.com</p>
              </div>
              <div>
                <h3 className="font-display text-xl text-carbon">¿Dónde estamos?</h3>
                <p className="mt-1 text-gray-700">Oficina Barcelona</p>
                <p className="text-gray-700">Calle Ejemplo 123</p>
                <p className="text-gray-700">28008</p>
              </div>
            </aside>
          </div>
        </Container>
      </section>
      {/* <section aria-labelledby="testimonios" className="bg-light py-12">
        <Container>
          <h2 id="testimonios" className="font-display text-2xl font-semibold text-carbon">Testimonios</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <Testimonial quote="Proceso claro y sin estrés." author="María" role="Residencia" />
            <Testimonial quote="Gran acompañamiento, resolvieron mis dudas." author="Luis" role="Nacionalidad" />
          </div>
        </Container>
      </section> */}
    </main>
  )
}
