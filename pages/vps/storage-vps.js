import Head from 'next/head'
import Header from '../../components/header/Header'
import PageHeader from '../../components/header/page-header'
export default function StorageVps() {
  return(
    <>
      <Head>
        <title>Storage VPS | Hext</title>
      </Head>
      <header className="header header-page">
        <Header />
        <PageHeader title="Storage VPS" />
      </header>
    cheap storage vps
    </>
  )
}