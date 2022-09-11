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
        <h1>Error 404 - Page Not Found</h1>
        <p>This page does not exist <Link href="/"><a>Go back to home</a></Link>.</p>
        </div>
      </main>
    </>
  )
}