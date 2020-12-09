import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  border-radius: 10px;
  border: 1px solid ${props => props.theme.colors.border};
  background: transparent;
  overflow: hidden;

  section {
    padding: 10px 25px;

    h3 {
      font-size: 19px;
      font-weight: normal;
      padding-bottom: 5px;
      border-bottom: 1px solid ${props => props.theme.colors.border};
    }

    p {
      margin-top: 10px;
      font-size: 16px;
      color: ${props => props.theme.colors.secondary};
    }

    footer {
      width: 100%;
      margin-top: 35px;
      padding-bottom: 20px;

      a {
        text-decoration: none;
        background: ${props => props.theme.colors.primary};
        border: 1px solid transparent;
        color: white;
        text-align: center;
        font-size: 17px;
        padding: 10px 35px;
        border-radius: 5px;
        transition: all .3s ease;

        &:hover {
          transition: all .3s ease;
          background: transparent;
          color: ${props => props.theme.colors.primary};
          border: 1px solid ${props => props.theme.colors.primary};
        }
      }
    }
  }
`

interface NewsImageProps {
  url: string
}

export const NewsImage = styled.div<NewsImageProps>`
  width: 100%;
  height: 200px;
  background: url(${props => props.url});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
`
