import Head from 'next/head'
import Header from '../../components/header/Header'
import PageHeader from '../../components/header/page-header'
export default function ManagedVps() {
  return(
    <>
      <Head>
        <title>Managed VPS | Hext</title>
      </Head>
      <header className="header header-page">
        <Header />
        <PageHeader title="Managed VPS" />
      </header>
    Fully managed vps
    </>
  )
}