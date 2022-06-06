import React from "react"
import { AppProps } from 'next/app'
import { ThemeProvider } from "styled-components"

import GlobalStyle from '../styles/global'
import theme from  '../styles/theme'
import '../components/modules/Post/post.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default MyApp;
