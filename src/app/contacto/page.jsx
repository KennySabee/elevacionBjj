import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/Container'

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
  )
}
