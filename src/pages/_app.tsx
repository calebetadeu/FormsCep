import { AppProps } from 'next/app'
import Header from '../components/Header'
import { FormsProvider } from '../hooks/UseFormProvider'
import { GlobalStyle } from '../styles/GlobalStyle'
import '../styles/GlobalStyle.ts'

function MyApp({ Component, pageProps }: AppProps ) {
  return(
    <FormsProvider>
    <GlobalStyle/>
    <Header/>
    <Component {...pageProps} />
    </FormsProvider>
  ) 
}

export default MyApp
