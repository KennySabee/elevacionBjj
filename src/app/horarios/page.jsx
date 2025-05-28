import Image from 'next/image'
import { SimpleLayout } from '@/components/SimpleLayout'
import { Container } from '@/components/Container'

import contactoImage from '@/images/contacto/contacto.png'
import horariosImage from '@/images/horarios/horarios.jpg'
import faqsImage from '@/images/horarios/faqs.jpg'



export const metadata = {
  title: 'Horarios',
  description:
    'I’ve spoken at events all around the world and been interviewed for many podcasts.',
}

export default function Horarios() {
  return (
    <>
    
    <SimpleLayout
      title="Horarios de clases"
      intro="En Elevación BJJ, ofrecemos una variedad de horarios para adaptarnos a tu estilo de vida y necesidades. Nuestras clases están diseñadas tanto para niños como para adultos, con sesiones en la mañana y en la tarde."
    >
      <div className="max-w-xs px-2.5 md:max-w-s lg:max-w-md md:flex gap-16">
      <Image
              src={horariosImage}
              alt="sierraHorario"
              
              className="mb-10 aspect-square  rounded-2xl bg-zinc-100 object-center dark:bg-zinc-800"
            />
            <Image
              src={faqsImage}
              alt="sierraFaqs"
              
              className="aspect-square rounded-2xl bg-zinc-100 object-center dark:bg-zinc-800"
            />
        
      </div>
    </SimpleLayout>
    <Container className="md:mt-16">
          <div className="max-w-2xl mt-12 sm:mt-28">
              <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-4xl dark:text-zinc-100">
                Empieza hoy en Elevación Jiu jitsu
              </h1>
            </div>  
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                  <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-2">
                    {/* Tarjeta 1 */}
                    <div className="mx-auto w-full max-w-xl">
                      <div className="group relative overflow-hidden">
                        <p className="mt-6 sm:mt-20 text-base text-zinc-600 dark:text-zinc-400">
                          En Elevación Jiu-Jitsu tenemos todo… ¡menos a ti! Únete a la
                          comunidad y empieza tu camino en las artes marciales desde hoy
                          mismo.<br></br> <br></br>
                          📞 (+593) 982 418 562 <br></br>
                          📍 Valle de los Chillos, Quito Ecuador
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
                          href="https://bteamjj.com/brazilian-jiu-jitsu/"
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
