import Head from 'next/head'
import Header from '../components/sections/Header'
import PageHeader from '../components/elements/header/page-header'
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