import Head from 'next/head'
import Header from '../../components/header/Header'
import PageHeader from '../../components/header/page-header'
import CardFeaturesHosting from '../../components/elements/card-features-hosting'
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
          <CardFeaturesHosting />
        </div>
      </main>
    </>
  )
}