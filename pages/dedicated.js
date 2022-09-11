import Head from 'next/head'
import Header from '../components/header/Header'
import PageHeader from '../components/header/page-header'
export default function Dedicated() {
  return (
    <>
      <Head>
        <title>Dedicated Servers</title>
      </Head>
      <header className="header header-page">
        <Header />
        <PageHeader title="Dedicated Servers" />
      </header>
      <main className='main'>
        <div className='container'>
          Dedicated Servers
        </div>
      </main>
    </>
  )
}