import { SimpleLayout } from '@/components/SimpleLayout'

export const metadata = {
  title: 'You’re subscribed',
  description: 'Thanks for subscribing to my newsletter.',
}

export default function ThankYou() {
  return (
    <SimpleLayout
      title="Gracias por suscribirte."
      intro="Te enviaremos un correo electrónico cada vez que tengamos algo interesante que compartirte y que creamos que te gustaría saber. Puedes darte de baja en cualquier momento, sin resentimientos."
    />
  )
}
