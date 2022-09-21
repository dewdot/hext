import Head from 'next/head'
import Header from '../../components/header/Header'
import PageHeader from '../../components/header/page-header'
import CardFeaturesHosting from '../../components/elements/card-features-hosting'
import PricingHosting from '../../components/elements/pricing-hosting'
export default function WebHosting() {
  return (
    <>
      <Head>
        <title>Web Hosting | Hext</title>
      </Head>
      <header className="header header-page">
        <Header />
        <PageHeader title="Web Hosting" />
      </header>
      <main className='main'>
        <div className='container'>
          <section className='section'>
            <PricingHosting />
          </section>
          <CardFeaturesHosting />
        </div>
      </main>
    </>
  )
}