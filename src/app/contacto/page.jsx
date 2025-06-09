import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/Container'
import contactoImage from '@/images/contacto/contacto.jpeg'

export const metadata = {
  title: 'Contacto | La Ruta BJJ - Jiu-Jitsu en el Valle de los Chillos',
  description:
    '¿Listo para comenzar tu camino en el Jiu-Jitsu? Contáctanos en La Ruta BJJ, ubicada en el Valle de los Chillos, y déjanos ayudarte a desarrollar tus habilidades marciales en un ambiente lleno de apoyo y pasión.',
}


export default function Uses() {
  return (
    <Container className="md:mt-16">
      <div className="max-w-2xl mt-12 sm:mt-28">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Empieza hoy en La Ruta Jiu jitsu
          </h1>
        </div>  
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-2">
                {/* Tarjeta 1 */}
                <div className="mx-auto w-full max-w-xl">
                  <div className="group relative overflow-hidden">
                    <p className="mt-6 sm:mt-20 text-base text-zinc-600 dark:text-zinc-400">
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
                <div className="sm:mt-12 mx-auto w-full max-w-xl">
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
  )
}
