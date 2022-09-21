import Head from 'next/head'
import CardFeaturesHosting from '../components/elements/card-features-hosting'
import ServicesHosting from '../components/elements/services-hosting'
import Header from '../components/header/Header'
import PageHeader from '../components/header/page-header'
export default function Hosting() {
  return (
    <>
      <Head>
        <title>Powerful Web Hosting</title>
      </Head>
      <header className="header header-page">
        <Header />
        <PageHeader title="Powerful Web Hosting" />
      </header>
      <main className='main'>
        <div className='container'>
          <ServicesHosting />
          <CardFeaturesHosting />
        </div>
      </main>
    </>
  )
}