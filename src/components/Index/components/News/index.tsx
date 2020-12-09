import Link from 'next/link'
import { Container, NewsImage } from './styles'
import { Next } from '../../../../assets'

interface Props {
  id: string
  title: string
}

const News: React.FC<Props> = ({ id, title }) => {
  return (
    <Container>
      <NewsImage url={Next}/>
      <section>
        <h3>Nova feature do next js</h3>
        <p>O framework chamado Next Js, feito com base no React Js teve sua 10.5 versão lts publicada hoje as 9:50 desta manhã...</p>
        <footer>
          <Link href={`/news/${id}/${title}`}>
            <a>Ler mais !</a>
          </Link>
        </footer>
      </section>
    </Container>
  )
}

export default News
