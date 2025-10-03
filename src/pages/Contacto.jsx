
import SEO from '../lib/seo.jsx'
import Container from '../components/Container.jsx'
import ContactForm from '../components/ContactForm.jsx'

export default function Contacto() {
  return (
    <main>
      <SEO title="Contacto" description="Solicita una cita o envíanos tu consulta." />
      <section className="py-12">
        <Container>
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
                <p className="mt-1 text-gray-700">Oficina Madrid</p>
                <p className="text-gray-700">Calle Ejemplo 123</p>
                <p className="text-gray-700">28008</p>
              </div>
            </aside>
          </div>
        </Container>
      </section>
        </Container>
      </section>
    </main>
  )
}
