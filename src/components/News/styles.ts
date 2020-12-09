import styled from 'styled-components'

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;

  @media(max-width: 850px) {
    margin: 0 30px;
  }
`

export const BackArrow = styled.div`
  margin-top: 50px;

  a {
    display: flex;
    flex-direction: row;
    text-decoration: none;

    p {
      color: ${props => props.theme.colors.primary};
      font-size: 19px;
      margin-left: 10px;
    }

    svg {
      font-size: 25px;
      color: ${props => props.theme.colors.primary};
      margin-top: 18px;
    }
  }
`

export const Title = styled.div`
  margin-top: 40px;
  font-size: 30px;
  color: ${props => props.theme.colors.primary};
`

interface ImageProps {
  url: string
}

export const Image = styled.div<ImageProps>`
  margin-top: 30px;
  width: 100%;
  min-height: 500px;
  background: url(${props => props.url});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
`

export const Content = styled.div`
  margin-top: 40px;
  border-bottom: 1px solid ${props => props.theme.colors.border};
  padding-bottom: 15px;
  margin-bottom: 50px;

  p {
    font-size: 16px;
    color: ${props => props.theme.colors.secondary};
    margin-top: 15px;
    line-height: 25px;
  }
`
