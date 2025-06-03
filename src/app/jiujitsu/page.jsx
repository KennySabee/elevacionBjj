import Image from 'next/image'

import { Container } from '@/components/Container'


import bjjImage from '@/images/equipo/askArena2.jpg'
import grapplingImage from '@/images/equipo/grappling.jpg'
import defensaPersonalImage from '@/images/equipo/bjj4.jpg'
import ambienteImagen from '@/images/equipo/kids.jpg'




export const metadata = {
  title: 'Jiu-Jitsu Brasileño | La Ruta BJJ en el Valle de los Chillos',
  description:
    'Descubre los orígenes, beneficios y técnicas del Jiu-Jitsu brasileño en La Ruta BJJ. Únete a nuestra comunidad en el Valle de los Chillos y transforma tu cuerpo y mente en el tatami.',
}


export default function Projects() {
  return (
    <>
      <Container className="md:mt-16">
        <div className="mt-12 max-w-2xl sm:mt-28">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          La Ruta Brazilian Jiu Jitsu Program
          </h1>
        </div>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-2">
            {/* Tarjeta 1 */}
            <div className="mx-auto w-full max-w-xl">
              <div className="group relative overflow-hidden">
                <p className="mt-6 text-base text-zinc-600 sm:mt-20 dark:text-zinc-400">
                  El Brazilian Jiu Jitsu (BJJ) ha ganado full atención en los
                  últimos años, y no es por gusto. A diferencia de otras artes
                  marciales como el Karate o el Taekwondo, que se enfocan en
                  patadas y golpes, el BJJ se trata de grappling: control,
                  técnica y sumisión. Además de ser brutalmente efectivo, el Jiu
                  Jitsu mejora tu condición física, te prepara para defenderte y
                  es una bomba para botar el estrés del día a día.
                </p>
              </div>
            </div>

            {/* Tarjeta 2 */}
            <div className="mx-auto w-full max-w-xl sm:mt-12">
              <div className="group relative overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={bjjImage}
                  alt="Brazilian Jiu Jitsu"
                  width={800}
                  height={533}
                  className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />

                
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container className="md:mt-10">
        <div className="mt-12 max-w-2xl sm:mt-28">
          <h1 className="mb-12 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
            Grappling{' '}
          </h1>
        </div>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-2">
            {/* Tarjeta 2 */}
            <div className="mx-auto w-full max-w-xl sm:mt-12">
              <div className="group relative overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={grapplingImage}
                  alt="Brazilian Jiu Jitsu"
                  width={800}
                  height={533}
                  className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />

                
              </div>
            </div>
            {/* Tarjeta 1 */}
            <div className="mx-auto w-full max-w-xl sm:ml-8">
              <div className="group relative overflow-hidden">
                <p className="mt-6 text-base text-zinc-600 sm:mt-20 dark:text-zinc-400">
                  Aunque varias artes marciales incluyen algo de grappling, en
                  el BJJ el grappling es el corazón de todo. ¿No sabes bien qué
                  es? Tranquilo, aquí va: en vez de usar golpes o armas, el
                  grappling se enfoca en dominar al oponente físicamente hasta
                  hacerlo rendirse. Dependiendo de si entrenas con kimono (Gi) o
                  sin él (No-Gi), las técnicas cambian un poco. También hay
                  diferencias si lo haces como deporte o para defensa personal.
                  En el BJJ pasas la mayor parte del tiempo en el piso,
                  aprendiendo a controlar, estrangular y someter con técnica.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container className="md:mt-16">
        <div className="mt-12 max-w-2xl sm:mt-28">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800  dark:text-zinc-100">
            Defensa Personal y Fitness
          </h1>
        </div>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-2">
            {/* Tarjeta 1 */}
            <div className="mx-auto w-full max-w-xl">
              <div className="group relative overflow-hidden">
                <p className="mt-6 text-base text-zinc-600 sm:mt-20 dark:text-zinc-400">
                  Pensado para el mundo real, el Jiu-Jitsu Brasileño es una
                  forma de defensa personal que todos deberían aprender. Se
                  enfoca en resolver situaciones en el piso — usando agarres,
                  proyecciones, golpes controlados y varias técnicas de
                  sumisión. Lo mejor es que puedes neutralizar a alguien más
                  grande que tú, sin necesidad de hacerle daño grave. 
                  <br></br>
                  Adicional
                  el BJJ es una de las mejores formas de ponerte en forma... y
                  además, es mil veces más divertido que cualquier rutina de
                  gym. A nivel físico, ayuda a bajar de peso, tonificar, ganar
                  fuerza funcional y mejorar tus reflejos. Y a nivel mental y
                  emocional, es una joya: reduce el estrés, sube tu autoestima y
                  te da esa sensación de confianza y poder que solo te da
                  entrenar algo real.
                </p>
              </div>
            </div>

            {/* Tarjeta 2 */}
            <div className="mx-auto w-full max-w-xl sm:mt-32">
              <div className="group relative overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={defensaPersonalImage}
                  alt="Brazilian Jiu Jitsu"
                  width={800}
                  height={533}
                  className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />

                
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container className="md:mt-10">
        <div className="mt-12 max-w-2xl sm:mt-28">
          <h1 className="mb-12 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
            Un Ambiente Positivo{' '}
          </h1>
        </div>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-2">
            {/* Tarjeta 2 */}
            <div className="mx-auto w-full max-w-xl sm:mt-12">
              <div className="group relative overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={ambienteImagen}
                  alt="Brazilian Jiu Jitsu"
                  width={800}
                  height={533}
                  className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />

                
              </div>
            </div>
            {/* Tarjeta 1 */}
            <div className="mx-auto w-full max-w-xl sm:ml-8">
              <div className="group relative overflow-hidden">
                <p className="mt-6 text-base text-zinc-600 sm:mt-20 dark:text-zinc-400">
                  Vas a amar el BJJ… porque nosotros lo amamos. En
                  La Ruta BJJ vivimos para compartir el Jiu-Jitsu con nuestra
                  comunidad. Nuestro objetivo es crear un ambiente donde cada
                  persona —sea quien sea— pueda alcanzar sus metas, sin importar
                  si vienes de años entrenando MMA o si solo estás buscando algo
                  diferente al típico gimnasio. Aquí te vas a sentir bienvenido,
                  retado y motivado. Te prometemos que vamos a superar tus
                  expectativas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
