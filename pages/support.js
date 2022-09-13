import Head from 'next/head'
import CardSupport from '../components/elements/card-support'
import Header from '../components/header/Header'
import PageHeader from '../components/header/page-header'
export default function Contact() {
  return (
    <>
      <Head>
        <title>Support - Hext</title>
      </Head>
      <header className="header header-page">
        <Header />
        <PageHeader title="Support" />
      </header>
      <main className='main'>
        <div className='container'>
          <div className='main-container'>
            <CardSupport />
          </div>{/* main-container */}
        </div>{/* container */}
      </main>
    </>
  )
}