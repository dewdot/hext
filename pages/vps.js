import Head from 'next/head'
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
        </div>
      </main>
    </>
  )
}