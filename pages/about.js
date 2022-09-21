import Head from 'next/head'
import Header from '../components/header/Header'
import PageHeader from '../components/header/page-header'
export default function About() {
  return (
    <>
      <Head>
        <title>About Us - Hext</title>
      </Head>
      <header className="header header-page">
        <Header />
        <PageHeader title="About Us" />
      </header>
      <main className='main'>
        <div className='container'>
          Add some content about your hosting business here...
        </div>
      </main>
    </>
  )
}