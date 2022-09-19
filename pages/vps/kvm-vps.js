import Head from 'next/head'
import Header from '../../components/header/Header'
import PageHeader from '../../components/header/page-header'
export default function KvmVps() {
  return(
    <>
      <Head>
        <title>KVM VPS Hosting | Hext</title>
      </Head>
      <header className="header header-page">
        <Header />
        <PageHeader title="KVM VPS Hosting" />
      </header>
    KVM VPS
    </>
  )
}