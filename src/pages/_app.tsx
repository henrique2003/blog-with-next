import { ThemeProvider } from 'styled-components'
import { themes, GlobalStyle } from '../styles'

function App ({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={themes}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App
