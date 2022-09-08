import Head from 'next/head'
import PageHeader from '../components/elements/header/page-header'
export default function About() {
  return (
    <>
      <Head>
        <title>About Us - Hext</title>
      </Head>
      <PageHeader title="About Us" />
      <main className='main'>
        <div className='container'>
          About Us page
        </div>
      </main>
    </>
  )
}