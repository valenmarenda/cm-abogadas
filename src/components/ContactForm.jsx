import React from 'react'
import { useForm } from 'react-hook-form'

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm()

  async function onSubmit(data) {
    try {
      await new Promise((res) => setTimeout(res, 800))
      await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) }).catch(() => {})
      alert('¡Gracias! Hemos recibido tu consulta.')
      reset()
    } catch (e) {
      alert('Hubo un error. Inténtalo nuevamente.')
    }
  }

  const inputBase = 'mt-1 w-full border-0 border-b border-gray-300 bg-transparent px-0 py-3 focus:border-primary focus:outline-none'

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Tu nombre</label>
        <input
          id="nombre"
          type="text"
          className={inputBase}
          {...register('nombre', { required: 'Este campo es obligatorio' })}
          aria-invalid={errors.nombre ? 'true' : 'false'}
        />
        {errors.nombre && <p className="mt-1 text-sm text-red-600">{errors.nombre.message}</p>}
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Tu correo electrónico</label>
        <input
          id="email"
          type="email"
          className={inputBase}
          {...register('email', { required: 'Ingresa un email válido', pattern: { value: /[^@\s]+@[^@\s]+\.[^@\s]+/, message: 'Formato de email inválido' } })}
          aria-invalid={errors.email ? 'true' : 'false'}
        />
        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
      </div>
      <div>
        <label htmlFor="asunto" className="block text-sm font-medium text-gray-700">Asunto</label>
        <input
          id="asunto"
          type="text"
          className={inputBase}
          {...register('asunto')}
        />
      </div>
      <div>
        <label htmlFor="telefono" className="block text-sm font-medium text-gray-700">Teléfono</label>
        <input
          id="telefono"
          type="tel"
          className={inputBase}
          {...register('telefono', { required: 'Este campo es obligatorio' })}
          aria-invalid={errors.telefono ? 'true' : 'false'}
        />
        {errors.telefono && <p className="mt-1 text-sm text-red-600">{errors.telefono.message}</p>}
      </div>
      <div>
        <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700">Tu mensaje</label>
        <textarea
          id="mensaje"
          rows={6}
          className={inputBase}
          {...register('mensaje', { required: 'Cuéntanos en qué podemos ayudarte' })}
          aria-invalid={errors.mensaje ? 'true' : 'false'}
        />
        {errors.mensaje && <p className="mt-1 text-sm text-red-600">{errors.mensaje.message}</p>}
      </div>
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-800 hover:border-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-60"
        >
          {isSubmitting ? 'Enviando…' : 'Enviar'}
        </button>
      </div>
    </form>
  )
}
