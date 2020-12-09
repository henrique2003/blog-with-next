import styled from 'styled-components'

export const Title = styled.h1`
  text-align: center;
  color: ${props => props.theme.colors.primary};
  margin-top: 50px;
  font-size: 30px;
`

export const Subtitle = styled.p`
  text-align: center;
  color: ${props => props.theme.colors.secondary};
  margin-top: 20px;
  font-size: 20px;
`

export const Content = styled.div`
  margin-top: 80px;
  width: 100%;
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(3, 1fr);

  @media(max-width: 1250px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media(max-width: 650px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
