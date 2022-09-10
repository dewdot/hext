import Head from 'next/head'
import '../styles/style.css'
import Footer from '../components/footer/Footer'
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="description" content="change app description" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@500&family=Roboto&display=swap" rel="stylesheet"></link>
      </Head>
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
export default MyApp
