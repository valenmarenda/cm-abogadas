
import Container from './Container.jsx'
import { Link } from 'react-router-dom'
import heroImg from '../assets/olga-tutunaru-plbb7pkEjkQ-unsplash.jpg'

export default function Hero() {
  return (
    <section
      aria-label="Hero principal"
      className="relative"
    >
      <div
        className="bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="relative">
          <div className="absolute inset-0 bg-black/50" aria-hidden />
          <Container className="relative flex min-h-[60vh] items-center py-20 sm:min-h-[70vh]">
            <div className="max-w-4xl text-white">
              <h1 className="font-display text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
                CM ABOGADAS
              </h1>
              <p className="mt-4 text-lg text-white/90">
                MIGRAR CON PLAN, MIGRAR MEJOR.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/contacto"  style={{ backgroundColor: "rgb(138, 37, 37)" }} className="rounded-md bg-accent px-5 py-3 font-semibold text-carbon shadow hover:brightness-95 text-white">
                  Pedir cita
                </Link>
                <Link to="/servicios" className="rounded-md border border-white/70 px-5 py-3 font-semibold text-white hover:bg-white/10">
                  Ver servicios
                </Link>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </section>
  )
}
