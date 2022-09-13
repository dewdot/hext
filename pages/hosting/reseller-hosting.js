import Head from 'next/head'
import Header from '../../components/header/Header'
import PageHeader from '../../components/header/page-header'
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
        Reseller hosting
        </div>
      </main>
    </>
  )
}