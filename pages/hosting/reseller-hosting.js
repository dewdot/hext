import Head from 'next/head'
import Header from '../../components/header/Header'
import PageHeader from '../../components/header/page-header'
import CardFeaturesHosting from '../../components/elements/card-features-hosting'
import PricingReseller from '../../components/elements/pricing-reseller'
import FaqHosting from '../../components/elements/faq/faq-hosting'
export default function ResellerHosting() {
  return (
    <>
      <Head>
        <title>Reseller hosting | Hext</title>
      </Head>
      <header className="header header-page">
        <Header />
        <PageHeader title="Reseller hosting" />
      </header>
      <main className='main'>
        <div className='container'>
          <section className='section'>
            <PricingReseller />
          </section>
          <section className='section'>
            <CardFeaturesHosting />
          </section>
          <section className='section'>
            <div className='section-title'><h2>Frequently Asked Questions</h2></div>
            <FaqHosting />
          </section>
        </div>
      </main>
    </>
  )
}