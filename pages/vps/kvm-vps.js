import Head from 'next/head'
import FaqVps from '../../components/elements/faq/faq-vps'
import FeaturesVps from '../../components/elements/features-vps'
import PricingKvm from '../../components/elements/pricing-kvm'
import Header from '../../components/header/Header'
import PageHeader from '../../components/header/page-header'
export default function KvmVps() {
  return (
    <>
      <Head>
        <title>KVM VPS Hosting | Hext</title>
      </Head>
      <header className="header header-page">
        <Header />
        <PageHeader title="KVM VPS Hosting" />
      </header>
      <main className='main'>
        <div className='container'>
          <section className='section'>
            <div className='section-title'>
              <h2>High Performing KVM VPS</h2>
              <p>KVM Virtualization, Raid 10, Root Access, Full Control</p>
            </div>
            <PricingKvm />
          </section>
          <section className='section'>
            <div className='section-title'>
              <h2>Why Hext VPS</h2>
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