import Head from 'next/head'
import FeaturesVps from '../components/elements/features-vps'
import ServicesVps from '../components/elements/services-vps'
import Header from '../components/header/Header'
import PageHeader from '../components/header/page-header'
export default function Vps() {
  return (
    <>
      <Head>
        <title>Fast Reliable Cheap VPS | Hext</title>
      </Head>
      <header className="header header-page">
        <Header />
        <PageHeader title="VPS Hosting" />
      </header>
      <main className='main'>
        <div className='container'>
          <ServicesVps />
          <section className='section'>
            <div className='section-title'>
              <h2>Why Hext VPS</h2>
            </div>
            <FeaturesVps />
          </section>
        </div>
      </main>
    </>
  )
}