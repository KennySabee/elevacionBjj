import Image from 'next/image'
import { SimpleLayout } from '@/components/SimpleLayout'
import horariosImage from '@/images/horarios/horarios.jpg'
import faqsImage from '@/images/horarios/faqs.jpg'



export const metadata = {
  title: 'Horarios',
  description:
    'I’ve spoken at events all around the world and been interviewed for many podcasts.',
}

export default function Horarios() {
  return (
    <SimpleLayout
      title="Horarios de clases"
      intro="En Sierra BJJ, ofrecemos una variedad de horarios para adaptarnos a tu estilo de vida y necesidades. Nuestras clases están diseñadas tanto para niños como para adultos, con sesiones en la mañana y en la tarde."
    >
      <div className="max-w-xs px-2.5 md:max-w-s lg:max-w-md md:flex gap-16">
      <Image
              src={horariosImage}
              alt="sierraHorario"
              
              className="mb-10 aspect-square -rotate-3 rounded-2xl bg-zinc-100 object-center dark:bg-zinc-800"
            />
            <Image
              src={faqsImage}
              alt="sierraFaqs"
              
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-center dark:bg-zinc-800"
            />
        
      </div>
    </SimpleLayout>
  )
}
