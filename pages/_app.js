import { Layout } from '@/components'
import { StateContext } from '@/context/StaticContext'
import '@/styles/globals.css'
import { Toaster } from 'react-hot-toast';

export default function App({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Toaster/>
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  )
}
