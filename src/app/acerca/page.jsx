import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import contactoImage from '@/images/contacto/contacto.jpeg'

import { Container } from '@/components/Container'
import {
  TikTokIcon,
  InstagramIcon,
  FacebookIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images//equipo/kidsMuay.jpg'
import kennyImage from '@/images/equipo/kennyPerfil.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        target="_blanck"
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

const people = [
  {
    name: 'Kenny Merizalde',
    role: 'Head Coach',
    imageUrl: kennyImage,
    xUrl: '#',
  },
  
  // Agrega más miembros si quieres
]

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'Acerca de La Ruta BJJ | Jiu-Jitsu en el Valle de los Chillos',
  description:
    'En La Ruta BJJ, en el Valle de los Chillos, formamos artistas marciales dentro y fuera del tatami. Descubre nuestra pasión por el Jiu-Jitsu y cómo te ayudamos a desarrollar habilidades físicas y mentales en un ambiente de apoyo.',
}

export default function About() {
  return (
    <>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt="rutaPortada"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
              Hola somos LA RUTA JIU JITSU y formamos artistas marciales dentro
              y fuera del tatami.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                La Ruta Jiu-Jitsu, con base en Quito, Ecuador, fue creado por
                algunos de los grapplers ecuatorianos más duros y talentosos que
                han pisado los tatamis. Abrieron esta academia con una sola
                misión: ofrecer una representación actual y real del grappling
                moderno.
              </p>
              <p>
                En La Ruta BJJ, te invitamos a ser parte de una comunidad
                apasionada y comprometida. Ven y descubre la fuerza y el
                potencial que llevas dentro. Ya sea que quieras convertirte en
                un competidor de élite, mejorar tu condición física, o
                simplemente explorar el fascinante mundo del Jiu-Jitsu
                Brasileño, estamos aquí para apoyarte en cada paso del camino.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="https://www.instagram.com/larutajiujitsu/"
                icon={InstagramIcon}
                className="mt-4"
              >
                Siguenos en Instagram
              </SocialLink>
              <SocialLink
                href="https://www.tiktok.com/@larutajiujitsu"
                icon={TikTokIcon}
                className="mt-4"
              >
                Siguenos en TikTok
              </SocialLink>
              <SocialLink
                href="https://www.facebook.com/profile.php?id=61577125497294"
                icon={FacebookIcon}
                className="mt-4"
              >
                Siguenos en Facebook
              </SocialLink>
              <SocialLink
                href="mailto: larutajiujitsu@gmail.com
"
                icon={MailIcon}
                className="mt-4 border-t border-zinc-100 dark:border-zinc-700/40"
              >
                larutajiujitsu@gmail.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
      <Container className="mt-12">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-4xl dark:text-zinc-100">
            Instructores de artes marciales
          </h1>
        </div>
      </Container>

      <Container>
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
              Combinando lucha olímpica con grappling de sumisión, el equipo
              innova constantemente en el deporte, demostrando que su estilo
              funciona al más alto nivel. Se enfocan en que cada alumno entienda
              y pueda aplicar movimientos complejos en un ambiente seguro, sin
              egos y con buena vibra.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            {people.map((person) => (
              <li
                key={person.name}
                className="flex flex-col items-center text-center"
              >
                <Image
                  alt=""
                  src={person.imageUrl}
                  className="mx-auto aspect-square w-56 rounded-full object-cover"
                />
                <h3 className="mt-6 text-lg text-zinc-600 dark:text-zinc-300">
                  {person.name}
                </h3>
                <p className="text-base text-zinc-600 dark:text-zinc-500">
                  {person.role}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
      <Container className="mt-12 sm:mt-28">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-4xl dark:text-zinc-100">
            Empieza hoy en La Ruta Jiu jitsu
          </h1>
        </div>
      </Container>
      <Container className="md:mt-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-2">
            {/* Tarjeta 1 */}
            <div className="mx-auto w-full max-w-xl">
              <div className="group relative overflow-hidden">
                <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                  En La Ruta Jiu-Jitsu tenemos todo… ¡menos a ti! Únete a la
                  comunidad y empieza tu camino en las artes marciales desde hoy
                  mismo.<br></br> <br></br>
                  <a href="https://wa.link/ffbc45" target="_blank">📞 WhatsApp click aquí (+593) 984 162 681</a>
 <br></br>
                  📍 Av. Ilalo y Rio Zamora, Valle de los Chillos, Quito Ecuador
                </p>
              </div>
            </div>

            {/* Tarjeta 2 */}
            <div className="mx-auto w-full max-w-xl">
              <div className="group relative overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={contactoImage}
                  alt="Brazilian Jiu Jitsu"
                  width={800}
                  height={533}
                  className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-150"
                />

                <a
                  href="https://www.google.com/maps/place/HORNO+DE+LE%C3%91A+(sucursal+El+Tri%C3%A1ngulo)/@-0.2963972,-78.4562364,17z/data=!3m1!4b1!4m6!3m5!1s0x91d5bd7b84cc895b:0x6f64d764d89e9c4!8m2!3d-0.2963972!4d-78.4536615!16s%2Fg%2F11j0h9rr1v?entry=ttu&g_ep=EgoyMDI1MDYwNC4wIKXMDSoASAFQAw%3D%3D"
                  target='blank'
                  className="absolute inset-0 z-10"
                  aria-label="Brazilian Jiu Jitsu"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
