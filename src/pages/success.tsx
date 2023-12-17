import Link from 'next/link'
import { ImageContainer, SucessContainer } from '../styles/pages/sucess'

export default function Success() {
  return (
    <SucessContainer>
      <h1>Compra efetuada!</h1>
      <ImageContainer>
        <p>
          Uhuul <strong>Breno Costa</strong>, sua
          <strong>Camiseta Beyond The Limits</strong> já está a caminho do seu
          destino.
        </p>

        <Link href="/">Voltar ao catálogo</Link>
      </ImageContainer>
    </SucessContainer>
  )
}
