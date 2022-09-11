import Head from 'next/head'
import Header from '../components/header/Header'
import PageHeader from '../components/header/page-header'
export default function Hosting() {
  return (
    <>
      <Head>
        <title>Powerful Web hosting</title>
      </Head>
      <header className="header header-page">
        <Header />
        <PageHeader title="Powerful Web hosting" />
      </header>
      <main className='main'>
        <div className='container'>
          Powerful Web hosting
        </div>
      </main>
    </>
  )
}