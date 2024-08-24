import Image from 'next/image'
import Link from 'next/link'
import { SimpleLayout } from '@/components/SimpleLayout'
import contactoImage from '@/images/contacto/contacto.png'

export const metadata = {
  title: 'Contacto',
  description: 'Información de contacto, profesores.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Contáctanos"
      intro=" ¿Tienes alguna pregunta o quieres saber más sobre nuestras clases? ¡Nos encantaría saber de ti! Estamos aquí para ayudarte en tu camino en el Jiu-Jitsu Brasileño."
    >
      <div className="">
        <h2 className="text-lg font-bold tracking-tight text-zinc-800 sm:text-2xl dark:text-zinc-100">
          Dirección:
        </h2>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          Encuentra nuestra academia en el corazón del Valle de Los Chillos, al frente del hipermarket Sierra BJJ, donde ofrecemos un ambiente acogedor y profesional para
          todos nuestros estudiantes.
        </p>
        <div className='mt-8 max-w-sm md:max-w-lg lg:max-w-xl '>
          <Link
            href="https://www.google.com/maps/place/Sierra+Jiu-jitsu/@-0.3093008,-78.4457347,17.25z/data=!4m6!3m5!1s0x91d5bdd671bd4a2b:0x26f8b1ca62c2f449!8m2!3d-0.3092594!4d-78.4443016!16s%2Fg%2F11q4bmvh9c?entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
          >
            <Image
              className="rounded-xl duration-300 ease-in hover:scale-105"
              src={contactoImage}
              alt="contact image"
            />
          </Link>
        </div>
        <h2 className="mt-20 text-lg font-bold tracking-tight text-zinc-800 sm:text-2xl dark:text-zinc-100">
          Teléfono:
        </h2>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          Llámanos al (+593) 996234984 para hablar directamente con uno de
          nuestros instructores o para más información sobre horarios,
          inscripciones y más.
        </p>
      </div>
    </SimpleLayout>
  )
}
