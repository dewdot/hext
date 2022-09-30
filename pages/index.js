import Head from 'next/head'
import Header from '../components/header/Header'
import FrontHero from '../components/header/front-hero'
import Services from '../components/elements/services'
import Features from '../components/elements/features'
import SectionFasterHosting from '../components/elements/section-faster-hosting'

export default function Home() {
  return (
    <>
      <Head>
        <title>Hext | Free Web Hosting Template</title>
      </Head>
			<header className="header header-front">
				<Header />
			</header>
      <FrontHero />
      <main className='main'>
        <div className='container'>
          <Services />
          <SectionFasterHosting />
          <Features />
        </div>
      </main>
    </>
  )
}
