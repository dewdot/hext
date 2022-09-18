import Head from 'next/head'
import CardFeaturesHosting from '../../components/elements/card-features-hosting'
import Header from '../../components/header/Header'
import PageHeader from '../../components/header/page-header'
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
        <CardFeaturesHosting />
        </div>
      </main>
    </>
  )
}