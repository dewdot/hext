import Head from 'next/head'
import '../styles/style.css'
import Header from '../components/sections/Header'
import Footer from '../components/sections/Footer'
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="description" content="change app description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
      <Footer />
    </>
  )


}

export default MyApp
