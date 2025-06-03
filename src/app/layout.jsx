import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

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
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
