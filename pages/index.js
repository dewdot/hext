import Head from 'next/head'
import FrontHero from '../components/elements/header/front-hero'

export default function Home() {
  return (
    <>
      <Head>
        <title>Nextjs Free Web Hosting Template</title>
      </Head>
      <FrontHero />
      <main className='main'>
        <div className='container'>
          This is main content
        </div>
      </main>

    </>
  )
}
