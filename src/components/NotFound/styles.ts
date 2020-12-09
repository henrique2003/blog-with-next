import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: ${props => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    color: white;
    font-size: 150px;
  }
`
