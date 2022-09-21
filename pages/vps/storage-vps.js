import Head from 'next/head'
import Header from '../../components/header/Header'
import PageHeader from '../../components/header/page-header'
import FeaturesStorage from '../../components/elements/features-storage'
import PricingStorage from '../../components/elements/pricing-storage'
import FaqVps from '../../components/elements/faq/faq-vps'
export default function StorageVps() {
  return (
    <>
      <Head>
        <title>Storage VPS | Hext</title>
      </Head>
      <header className="header header-page">
        <Header />
        <PageHeader title="Storage VPS" />
      </header>
      <main className='main'>
        <div className='container'>
          <section className='section'>
            <div className='section-title'>
              <h2>Affordable KVM Storage VPS</h2>
              <p>KVM Virtualization, Raid 10, Root Access, Full Control</p>
              <PricingStorage />
            </div>
          </section>
          <section className='section'>
            <div className='section-title'><h2>Why Hext Storage VPS</h2></div>
            <FeaturesStorage />
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