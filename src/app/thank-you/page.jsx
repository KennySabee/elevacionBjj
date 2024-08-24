import { SimpleLayout } from '@/components/SimpleLayout'

export const metadata = {
  title: 'Estas suscrito',
  description: 'Gracias por suscribirte a nuestra newsletter.',
}

export default function ThankYou() {
  return (
    <SimpleLayout
      title="Gracias por suscribirte."
      intro="Te enviaremos un correo electrónico cada vez que tengamos algo interesante que compartirte y que creamos que te gustaría saber. Puedes darte de baja en cualquier momento, sin resentimientos."
    />
  )
}
