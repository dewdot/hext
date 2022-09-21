import Head from 'next/head'
import Header from '../components/header/Header'
import PageHeader from '../components/header/page-header'
import Link from 'next/link'
export default function Error404() {
  return (
    <>
      <Head>
        <title>Page Not Found - Hext</title>
      </Head>
      <header className="header header-page">
        <Header />
        <PageHeader title="Page Not Found" />
      </header>
      <main className='main'>
        <div className='container'>
          <section className='section text-center'>
            <h1 className='color-primary'>Error 404</h1>
            <h4>Sorry Page Not Found</h4>
            <p>This page does not exist <Link href="/"><a>Go back to home</a></Link>.</p>
          </section>
        </div>
      </main>
    </>
  )
}