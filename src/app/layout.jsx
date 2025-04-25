import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Elevación BJJ',
    default:
      'Elevación BJJ - Academia de Brazilian Jiujitsu',
  },
  description:
    'Bienvenido a Elevación BJJ, tu academia de Brazilian Jiu-Jitsu. Somos apasionados del BJJ y dedicados a enseñar esta disciplina a todos, desde principiantes hasta avanzados. Únete a nosotros para mejorar tus habilidades, aprender técnicas efectivas y formar parte de una comunidad apasionada por el Jiu-Jitsu.',
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
