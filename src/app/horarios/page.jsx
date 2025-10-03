import Image from 'next/image'
import { SimpleLayout } from '@/components/SimpleLayout'
import { Container } from '@/components/Container'


import horariosImage from '@/images/horarios/horariosRutaAdultos.png'
import horariosImageKids from '@/images/horarios/horariosRutaKids.png'
import precioImage from '@/images/horarios/preciosRuta.png'
import precioImage2 from '@/images/horarios/preciosRuta2.png'

export const metadata = {
  title: 'Horarios y Precios | La Ruta BJJ - Jiu-Jitsu en el Valle de los Chillos',
  description:
    'Consulta los horarios de clases y precios en La Ruta BJJ, la academia de Jiu-Jitsu en el Valle de los Chillos. Diseñamos planes flexibles para que puedas entrenar y crecer en un ambiente amigable y de apoyo.',
}

export default function Horarios() {
  return (
    <>
      {/* Sección: Horarios */}
      <SimpleLayout
        title="Horarios de clases"
        intro="En La Ruta BJJ, ofrecemos una variedad de horarios para adaptarnos a tu estilo de vida y necesidades. Nuestras clases están diseñadas tanto para niños como para adultos, con sesiones en la mañana y en la tarde."
      >
        <div className="grid grid-cols-1 gap-8 md:grid-cols-1 md:gap-12 lg:gap-16">
          {/* Horario adultos */}
          <div className="w-full">
            <Image
              src={horariosImage}
              alt="Horario semanal de La Ruta BJJ"
              width={800} // 👈 Ancho real de tu imagen
              height={600} // 👈 Altura real de tu imagen
              className="rounded-2xl bg-zinc-100 object-contain w-full sm:mx-auto h-auto sm:w-[800px] dark:bg-zinc-800"
            />
          </div>

          {/* Horario kids */}
          <div className="w-full">
            <Image
              src={horariosImageKids}
              alt="Horario de clases para niños en La Ruta BJJ"
              width={800} // 👈 Ancho real de tu imagen
              height={600} // 👈 Altura real de tu imagen
              className="rounded-2xl bg-zinc-100 object-contain w-full sm:mx-auto  h-auto  sm:w-[800px] dark:bg-zinc-800"
            />
          </div>
        </div>
      </SimpleLayout>

      {/* Sección: Precios */}
      <SimpleLayout
        title="Precios"
        intro="En La Ruta BJJ, ofrecemos una variedad de precios para adaptarnos a tu estilo de vida y necesidades."
      >
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
          <div className="w-full">
            <Image
              src={precioImage}
              alt="Precios de La Ruta BJJ"
              width={800} // 👈 Ajusta según tu imagen real
              height={600} // 👈 Ajusta según tu imagen real
              className="rounded-2xl bg-zinc-100 object-contain w-full h-auto dark:bg-zinc-800"
            />
          </div>
          <div className="w-full">
            <Image
              src={precioImage2}
              alt="Precios adicionales de La Ruta BJJ"
              width={800} // 👈 Ajusta según tu imagen real
              height={600} // 👈 Ajusta según tu imagen real
              className="rounded-2xl bg-zinc-100 object-contain w-full h-auto dark:bg-zinc-800"
            />
          </div>
        </div>
      </SimpleLayout>

      {/* Sección: Contacto + Mapa */}
      <Container className="md:mt-16">
        <div className="max-w-2xl mt-12 sm:mt-28">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Empieza hoy en La Ruta Jiu-Jitsu
          </h1>
        </div>

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mt-12 sm:mt-20">
          <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-16 items-start">
            {/* Tarjeta 1: Información de contacto */}
            <div className="w-full max-w-xl">
              <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                En La Ruta Jiu-Jitsu 
                tenemos todo… ¡menos a ti! Únete a nuestra comunidad y empieza tu camino en las artes marciales desde hoy mismo.
              </p>

              <div className="mt-6 space-y-4">
                <div>
                  <a
                    href="https://wa.link/ffbc45"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-lg font-medium transition-colors"
                  >
                    📞 WhatsApp: (+593) 984 162 681
                  </a>
                </div>

                <div className="flex items-start gap-2">
                  <span className="text-zinc-600 dark:text-zinc-400">📍</span>
                  <span className="text-zinc-600 dark:text-zinc-400">
                    Av. Ilalo y Río Zamora, Valle de los Chillos, Quito, Ecuador
                  </span>
                </div>
              </div>
            </div>

            {/* Tarjeta 2: Mapa embebido */}
            <div className="w-full max-w-xl">
              <div className="rounded-lg overflow-hidden shadow-lg bg-white dark:bg-zinc-800">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.736849987883!2d-78.4562364!3d-0.2963972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d5bd14d755a287:0x8f9e7160321f3b37!2sLA%20RUTA%20JIU%20JITSU%20Academia%20de%20artes%20marciales%20Muay%20Thai%20y%20Jiu-jitsu%20brasile%C3%B1o!5e0!3m2!1ses!2sec!4v1717000000000!5m2!1ses!2sec"
                  width="100%"
                  height="500"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de La Ruta Jiu-Jitsu en Valle de los Chillos, Quito"
                  className="w-full h-[350px]  rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}