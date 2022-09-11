import Head from 'next/head'
import Header from '../components/header/Header'
import PageHeader from '../components/header/page-header'
export default function Vps() {
  return (
    <>
      <Head>
        <title>VPS</title>
      </Head>
      <header className="header header-page">
        <Header />
        <PageHeader title="VPS" />
      </header>
      <main className='main'>
        <div className='container'>
        VPS
        </div>
      </main>
    </>
  )
}