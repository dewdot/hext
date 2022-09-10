import Head from 'next/head'
import Header from '../components/header/Header'
import FrontHero from '../components/header/front-hero'
import CardServices from '../components/elements/card-services'
import CardFeatures from '../components/elements/card-features'

export default function Home() {
  return (
    <>
      <Head>
        <title>Hext | Free Web Hosting Template</title>
      </Head>
      <Header />
      <FrontHero />
      <main className='main'>
        <div className='container'>
          <CardServices />
          <CardFeatures />
        </div>
      </main>

    </>
  )
}
