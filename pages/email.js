import Head from 'next/head'
import Header from '../components/header/Header'
import PageHeader from '../components/header/page-header'
export default function Email() {
  return (
    <>
      <Head>
        <title>Email Hosting</title>
      </Head>
      <header className="header header-page">
        <Header />
        <PageHeader title="Email Hosting" />
      </header>
      <main className='main'>
        <div className='container'>
        Email Hosting
        </div>
      </main>
    </>
  )
}