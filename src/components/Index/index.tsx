import { Container } from '../../styles'
import { News } from './components'
import { Title, Content, Subtitle } from './styles'

const Index: React.FC = () => {
  return (
    <Container>
      <Title>Ùltimas notícias</Title>
      <Subtitle>veja as últimas notícias da atualidade</Subtitle>
      <Content>
        <News id="1" title="Nova feature do next js" />
        <News id="2" title="Nova feature do next js" />
        <News id="3" title="Nova feature do next js" />
      </Content>
    </Container>
  )
}

export default Index
