import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  TikTokIcon,
  InstagramIcon,
  FacebookIcon,  
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        target="_blanck"
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About',
  description:
    'Hola somos Sierra BJJ, estamos ubicados en el valle de los chillos, donde formamos artistas marciales dentro y fuera del tatami.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt="sierraPortada"
              
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Hola somos Sierra BJJ y formamos artistas marciales dentro y fuera del tatami.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
            Ubicados en el pintoresco Valle de Los Chillos, Sierra BJJ es más que una academia de Jiu-Jitsu Brasileño; es un lugar donde la pasión por las artes marciales se encuentra con un ambiente comunitario cálido y acogedor. Nuestro objetivo es brindar una experiencia integral de BJJ, donde cada estudiante, sin importar su edad o nivel de experiencia, pueda desarrollarse plenamente tanto en el aspecto físico como mental.
            </p>
            <p>
            En Sierra BJJ, te invitamos a ser parte de una comunidad apasionada y comprometida. Ven y descubre la fuerza y el potencial que llevas dentro. Ya sea que quieras convertirte en un competidor de élite, mejorar tu condición física, o simplemente explorar el fascinante mundo del Jiu-Jitsu Brasileño, estamos aquí para apoyarte en cada paso del camino.
            </p>
            <p>
            Visítanos en el Valle de Los Chillos y experimenta de primera mano lo que hace única a Sierra BJJ. Para más información sobre nuestras clases, horarios y tarifas, no dudes en contactarnos. ¡Esperamos verte pronto en el tatami!
            </p>
            
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            
            <SocialLink href="https://www.instagram.com/sierra_jiujitsu/" icon={InstagramIcon} className="mt-4">
              Siguenos en Instagram
            </SocialLink>
            <SocialLink href="https://www.tiktok.com/@sierrajiujitsu" icon={TikTokIcon}  className="mt-4">
              Siguenos en TikTok
            </SocialLink>
            <SocialLink href="https://www.facebook.com/sierrajiujitsu" icon={FacebookIcon} className="mt-4">
              Siguenos en Facebook
            </SocialLink>
            <SocialLink
              href="mailto:kenny@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              kenny@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
