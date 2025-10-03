import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import '@/styles/tailwind.css'
import { BsWhatsapp } from 'react-icons/bs' // 👈 Importa el ícono

export const metadata = {
  title: {
    template: '%s - La Ruta BJJ',
    default: 'La Ruta BJJ - Academia de Brazilian Jiu-Jitsu en el Valle de los Chillos',
  },
  description:
    'Bienvenido a La Ruta BJJ, tu academia de Brazilian Jiu-Jitsu en el Valle de los Chillos. Somos apasionados del BJJ y enseñamos esta y otras artes marciales a todos, desde principiantes hasta avanzados. Únete a nosotros, mejora tu técnica y forma parte de una comunidad dedicada al Jiu-Jitsu.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>

          {/* Botón flotante de WhatsApp con react-icons */}
          <a
            href="https://wa.link/ffbc45"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chatear con La Ruta BJJ en WhatsApp"
            className="fixed bottom-6 right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 dark:focus:ring-offset-black"
          >
            <BsWhatsapp className="w-7 h-7 sm:w-8 sm:h-8" />
          </a>
        </Providers>
      </body>
    </html>
  )
}