import Head from 'next/head'
import Header from '../../components/header/Header'
import PageHeader from '../../components/header/page-header'
import CardFeaturesHosting from '../../components/elements/card-features-hosting'
import PricingWP from '../../components/elements/pricing-wp'
import FaqHosting from '../../components/elements/faq/faq-hosting'
export default function WordPressHosting() {
  return (
    <>
      <Head>
        <title>WordPress Hosting | Hext</title>
      </Head>
      <header className="header header-page">
        <Header />
        <PageHeader title="WordPress Hosting" />
      </header>
      <main className='main'>
      <div className='container'>
          <section className='section'>
            <PricingWP />
          </section>
          <CardFeaturesHosting />
          <section className='section'>
            <div className='section-title'><h2>Frequently Asked Questions</h2></div>
            <FaqHosting />
          </section>
        </div>
      </main>
    </>
  )
}