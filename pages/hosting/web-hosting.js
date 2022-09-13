import Head from 'next/head'
import Header from '../../components/header/Header'
import PageHeader from '../../components/header/page-header'
export default function WebHosting() {
  return (
    <>
      <Head>
        <title>Web hosting | Hext</title>
      </Head>
      <header className="header header-page">
        <Header />
        <PageHeader title="Web hosting" />
      </header>
      <main className='main'>
        <div className='container'>
        Web hosting
        </div>
      </main>
    </>
  )
}