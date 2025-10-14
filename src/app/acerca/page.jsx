"use client"
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { useState } from 'react'

import { Container } from '@/components/Container'
import {
  TikTokIcon,
  InstagramIcon,
  FacebookIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/equipo/portraitImage.jpeg'
import kennyImage from '@/images/equipo/kennyPerfil.jpg'

// 🖼️ Importa tus fotos (mejor para rendimiento en Next.js)
import photo1 from '@/images/photos/image-1.webp'
import photo2 from '@/images/photos/image-2.webp'
import photo3 from '@/images/photos/image-3.webp'
import photo4 from '@/images/photos/image-4.webp'
import photo5 from '@/images/photos/image-5.webp'
import photo6 from '@/images/photos/image-6.webp'
import photo7 from '@/images/photos/image-7.webp'
import photo8 from '@/images/photos/image-8.webp'
import photo9 from '@/images/photos/image-9.webp'
import photo10 from '@/images/photos/image-10.webp'
import photo11 from '@/images/photos/image-11.webp'
import photo12 from '@/images/photos/image-12.webp'
import photo13 from '@/images/photos/image-13.webp'
import photo14 from '@/images/photos/image-14.webp'
import photo15 from '@/images/photos/image-15.webp'
import photo16 from '@/images/photos/image-16.webp'
// import photo17 from '@/images/photos/image-17.webp'
// import photo18 from '@/images/photos/image-18.webp'
// import photo19 from '@/images/photos/image-19.webp'
// import photo20 from '@/images/photos/image-20.webp'

// Agrega más si tienes (hasta donde necesites)

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        target="_blank"
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

// 📸 Array de fotos (mejor mantenimiento)
const galleryPhotos = [
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
  photo7,
  photo8,
  photo9,
  photo10,
  photo11,
  photo12,
  photo13,
  photo14,
  photo15,
  photo16,
  // photo17,
  // photo18,
  // photo19,
  // photo20,
  // Añade más aquí si importas más
]


export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0)
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
                href="https://www.tiktok.com/@la_ruta_bjj"
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
                href="mailto:larutajiujitsu@gmail.com"
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
              Combinando lucha olímpica con grappling de sumisión y muay thai, el equipo
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
      </Container>{/* ======================================== */}
{/* 🔸 CARRUSEL DE GALERÍA - Una imagen a la vez (Optimizado + Animación) 🔸 */}
{/* ======================================== */}
<Container className="mt-16 sm:mt-24">
  <div className="max-w-2xl">
    <h2 className="text-3xl font-bold tracking-tight text-zinc-800 sm:text-4xl dark:text-zinc-100">
      Conócenos
    </h2>
    <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
      Momentos de entrenamiento, competencias y hermandad en el tatami.
    </p>
  </div>

  <div className="mt-8 flex items-center justify-center">
    {/* Botón izquierda */}
    <button
      onClick={() => setCurrentIndex((prev) => (prev === 0 ? galleryPhotos.length - 1 : prev - 1))}
      className="mx-2 rounded-full bg-white/80 p-2 text-zinc-700 shadow-md hover:bg-white hover:text-teal-600 dark:bg-zinc-800/80 dark:text-zinc-200 dark:hover:bg-zinc-700 dark:hover:text-teal-400"
      aria-label="Foto anterior"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
    </button>

    {/* Contenedor con transición */}
    <div className="relative h-[400px] w-full max-w-2xl overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800">
      {/* Imagen actual con animación */}
      <div className="absolute inset-0 transition-opacity duration-1000 ease-in-out">
        <Image
          src={galleryPhotos[currentIndex]}
          alt={`Foto ${currentIndex + 1} - La Ruta Jiu Jitsu`}
          fill
          className="object-contain"
          placeholder="blur"
          priority={currentIndex === 0}
          // Precarga la imagen actual + la siguiente y anterior
          loading={currentIndex === 0 ? 'eager' : 'lazy'}
        />
      </div>

      {/* Pre-carga de la imagen siguiente (invisible) */}
      {galleryPhotos[(currentIndex + 1) % galleryPhotos.length] && (
        <div className="absolute inset-0 opacity-0 pointer-events-none">
          <Image
            src={galleryPhotos[(currentIndex + 1) % galleryPhotos.length]}
            alt=""
            fill
            className="object-contain"
            loading="eager"
            style={{ display: 'none' }} // oculto pero cargado
          />
        </div>
      )}

      {/* Pre-carga de la imagen anterior (invisible) */}
      {galleryPhotos[(currentIndex - 1 + galleryPhotos.length) % galleryPhotos.length] && (
        <div className="absolute inset-0 opacity-0 pointer-events-none">
          <Image
            src={galleryPhotos[(currentIndex - 1 + galleryPhotos.length) % galleryPhotos.length]}
            alt=""
            fill
            className="object-contain"
            loading="eager"
            style={{ display: 'none' }} // oculto pero cargado
          />
        </div>
      )}
    </div>

    {/* Botón derecha */}
    <button
      onClick={() => setCurrentIndex((prev) => (prev === galleryPhotos.length - 1 ? 0 : prev + 1))}
      className="mx-2 rounded-full bg-white/80 p-2 text-zinc-700 shadow-md hover:bg-white hover:text-teal-600 dark:bg-zinc-800/80 dark:text-zinc-200 dark:hover:bg-zinc-700 dark:hover:text-teal-400"
      aria-label="Siguiente foto"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </div>

  {/* Indicadores */}
  <div className="mt-4 flex justify-center space-x-2">
    {galleryPhotos.map((_, index) => (
      <button
        key={index}
        onClick={() => setCurrentIndex(index)}
        className={`h-2 w-2 rounded-full ${
          index === currentIndex ? 'bg-teal-600' : 'bg-zinc-400 dark:bg-zinc-600'
        }`}
        aria-label={`Ir a foto ${index + 1}`}
      />
    ))}
  </div>
</Container>

      {/* ======================================== */}
      {/* 👇 Sección "Empieza hoy" (sin cambios) 👇 */}
      {/* ======================================== */}
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
            <div className="mx-auto w-full max-w-xl">
              <div className="group relative overflow-hidden">
                <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                  En La Ruta Jiu-Jitsu tenemos todo… ¡menos a ti! Únete a la
                  comunidad y empieza tu camino en las artes marciales desde hoy
                  mismo.<br /><br />
                  <a
                    href="https://wa.link/ffbc45"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300"
                  >
                    📞 WhatsApp click aquí (+593) 984 162 681
                  </a>
                  <br />
                  📍 Av. Ilalo y Rio Zamora, Valle de los Chillos, Quito Ecuador
                </p>
              </div>
            </div>

            <div className="mx-auto w-full max-w-xl sm:mt-12">
              <div className="group relative overflow-hidden rounded-lg shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.736849987883!2d-78.4562364!3d-0.2963972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d5bd14d755a287:0x8f9e7160321f3b37!2sLA%20RUTA%20JIU%20JITSU%20Academia%20de%20artes%20marciales%20Muay%20Thai%20y%20Jiu-jitsu%20brasile%C3%B1o!5e0!3m2!1ses!2sec!4v1717000000000!5m2!1ses!2sec"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de LA RUTA JIU JITSU"
                  className="h-[350px] w-full rounded-lg object-cover sm:h-[300px]"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}