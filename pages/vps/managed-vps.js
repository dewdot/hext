import Head from 'next/head'
import Header from '../../components/header/Header'
import PageHeader from '../../components/header/page-header'
import FeaturesVps from '../../components/elements/features-vps'
import FaqVps from '../../components/elements/faq/faq-vps'
import PricingManagedVPS from '../../components/elements/pricing-managed-vps'
export default function ManagedVps() {
  return (
    <>
      <Head>
        <title>Managed VPS | Hext</title>
      </Head>
      <header className="header header-page">
        <Header />
        <PageHeader title="Managed VPS" />
      </header>
      <main className='main'>
        <div className='container'>
          <section className='section'>
            <div className='section-title'>
              <h2>Fully Managed VPS</h2>
            </div>
            <PricingManagedVPS />
          </section>
          <section className='section'>
            <div className='section-title'>
              <h2>Why Hext Managed VPS</h2>
            </div>
            <FeaturesVps />
          </section>
          <section className='section'>
            <div className='section-title'>
              <h2>Frequently Asked Questions</h2>
            </div>
            <FaqVps />
          </section>
        </div>
      </main>
    </>
  )
}