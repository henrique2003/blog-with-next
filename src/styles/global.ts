import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Poppins', sans-serif;
    src: url('/poppins.ttf') format('truetype');
  }

 body {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   outline: none;
   font-family: 'Poppins', sans-serif;
 }
`

export default GlobalStyle
