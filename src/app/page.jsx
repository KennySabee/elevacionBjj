import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  FacebookIcon,
  InstagramIcon,
  TikTokIcon,
  WhatsAppIcon,
} from '@/components/SocialIcons'

import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'
import acercaImage from '@/images/equipo/acercaImage.jpeg'
import bjjImage from '@/images/equipo/bjjImage.jpeg'



import { getAllArticles } from '@/lib/articles'

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800',
              rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width:640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 4)

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            LA RUTA JIU JITSU, academia de artes marciales.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            En LA RUTA JIU JITSU, te guiamos de la mano de Kenny Merizalde y su
            equipo, quienes cuentan con más de 10 años de experiencia en artes
            marciales como Muay Thai y Brazilian Jiu-Jitsu. Aquí, tu pasión y tu
            potencial encuentran el lugar perfecto para crecer. Mejora tu
            técnica, tu físico y tu confianza en un ambiente amigable y lleno de
            apoyo.
          </p>

          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://www.tiktok.com/@la_ruta_bjj"
              target="_blanck"
              aria-label="Follow on TikTok"
              icon={TikTokIcon}
            />
            <SocialLink
              href="https://www.instagram.com/larutajiujitsu/"
              target="_blanck"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="https://www.facebook.com/profile.php?id=61577125497294"
              target="_blanck"
              aria-label="Follow on Facebook"
              icon={FacebookIcon}
            />
          </div>
        </div>
      </Container>
      <Photos />

      <Container className="mt-24 md:mt-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-2">
            {/* Tarjeta 1 */}
            <div className="mx-auto w-full max-w-xl">
              {/* Aqui empieza acerca de nosotros de la landing page */}
              <div className="group relative overflow-hidden rounded-sm shadow-lg">
                <Image
                  src={acercaImage}
                  alt="About Us"
                  width={800}
                  height={533}
                  className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-black/50 p-6 text-white">
                  <h2 className="text-2xl font-bold">Acerca de nosotros</h2>
                  <p className="text-base">
                    Nos esforzamos por mantener un ambiente donde te sientas
                    animado, apoyado y motivado. Pero más que todo, lo que más
                    queremos… es verte crecer y triunfar.
                  </p>
                </div>
                <a
                  href="/acerca"
                  className="absolute inset-0 z-10"
                  aria-label="About Us"
                />
              </div>
            </div>

              {/* Aqui empieza bjj de la landing page */}
            <div className="mx-auto w-full max-w-xl">
              <div className="group relative overflow-hidden rounded-sm shadow-lg">
                <Image
                  src={bjjImage}
                  alt="Brazilian Jiu Jitsu"
                  width={800}
                  height={533}
                  className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-black/50 p-6 text-white">
                  <h2 className="text-2xl font-bold">Brazilian Jiu Jitsu</h2>
                  <p className="text-base">
                    El BJJ se enfoca en enfrentar situaciones cuerpo a cuerpo en
                    el piso, usando controles, proyecciones, golpes controlados
                    y una variedad de técnicas de sumisión.
                  </p>
                </div>
                <a
                  href="/jiujitsu"
                  className="absolute inset-0 z-10"
                  aria-label="Brazilian Jiu Jitsu"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
      {/* ======================================== */}
{/* 🔸 Video introductorio - ¿Qué es La Ruta? 🔸 */}
{/* ======================================== */}
<Container className="mt-24 sm:mt-28">
  <div className="max-w-3xl text-left">
    <h2 className="text-3xl font-bold tracking-tight text-zinc-800 sm:text-4xl dark:text-zinc-100 ">
      ¿Qué es La Ruta?
    </h2>
    <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
      Descubre nuestra filosofía, nuestro enfoque y por qué entrenar con nosotros
      puede transformar tu vida dentro y fuera del tatami.
    </p>
  </div>

  <div className="mt-10 flex justify-center">
    <div className="relative w-full max-w-[350px] sm:max-w-[400px] overflow-hidden rounded-2xl bg-zinc-900 shadow-xl">
      <video
        src="/videos/videoPrincipal.mp4"
        controls
        playsInline
        className="w-full h-auto object-contain"
        preload="metadata"
      >
        Tu navegador no soporta el elemento de video.
      </video>
    </div>
  </div>
</Container>
      <Container className="mt-12">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-4xl dark:text-zinc-100">
            Contáctanos hoy mismo
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

           {/* Tarjeta 2: Mapa embebido de LA RUTA JIU JITSU - más alto y responsivo */}
            <div className="mx-auto w-full max-w-xl sm:mt-12">
              <div className="group relative overflow-hidden rounded-lg shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.736849987883!2d-78.4562364!3d-0.2963972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d5bd14d755a287:0x8f9e7160321f3b37!2sLA%20RUTA%20JIU%20JITSU%20Academia%20de%20artes%20marciales%20Muay%20Thai%20y%20Jiu-jitsu%20brasile%C3%B1o!5e0!3m2!1ses!2sec!4v1717000000000!5m2!1ses!2sec"
                  // 👈 Aumentado de 450 a 500 (puedes probar 600 si quieres más)
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de LA RUTA JIU JITSU - Academia de Jiu-Jitsu y Muay Thai"
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
