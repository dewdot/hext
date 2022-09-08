import Head from 'next/head'
import Header from '../components/header/Header'
import PageHeader from '../components/header/page-header'
export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us - Hext</title>
      </Head>
      <header className="header header-page">
        <Header />
        <PageHeader title="Contact Us" />
      </header>
      <main className='main'>
        <div className='container'>
          Contact Us page
        </div>
      </main>
    </>
  )
}