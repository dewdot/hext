import Head from 'next/head'
import Header from '../components/sections/Header'
import FrontHero from '../components/elements/header/front-hero'

export default function Home() {
  return (
    <>
      <Head>
        <title>Nextjs Free Web Hosting Template</title>
      </Head>
      <Header />
      <FrontHero />
      <main className='main'>
        <div className='container'>
          This is main content
        </div>
      </main>

    </>
  )
}
