import Head from 'next/head'
import CardContact from '../components/elements/card-contact'
import ContactForm from '../components/elements/contact-form'
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
          <div className='main-container'>
            <CardContact />
            <div className='spacer4'></div>
            <div className='flex-container'>
              <div className='flex-item'>
                <img src="/images/working-user.svg" alt="working-user" />
              </div>
              <div className='flex-item'>
                <ContactForm />
              </div>
            </div>{/* flex-container */}
          </div>{/* main-container */}
        </div>{/* container */}
      </main>
    </>
  )
}