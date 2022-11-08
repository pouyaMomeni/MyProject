import { useEffect } from 'react'
import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { appWithTranslation } from 'next-i18next'
import Locale from 'components/button/language'
import { useRouter } from 'next/router'


function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();
  const dir = locale === 'fa' ? 'rtl' : 'ltr';

  useEffect(() => {
    document.documentElement.dir = dir;
  }, [dir]);
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <Component {...pageProps} />
        <Locale />
      </ChakraProvider>
    </QueryClientProvider>
  )
}

export default appWithTranslation(MyApp)
