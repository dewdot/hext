import Head from 'next/head'
import Header from '../components/header/Header'
import PageHeader from '../components/header/page-header'
export default function Email() {
  return (
    <>
      <Head>
        <title>Email Hosting</title>
      </Head>
      <header className="header header-page">
        <Header />
        <PageHeader title="Email Hosting" />
      </header>
      <main className='main'>
        <div className='container'>
          <div className='center text-center width-50'>
            <h1>Secure professional email for your organization</h1>
            <p>Host your business email on a secure, reliable, encrypted, privacy-guaranteed, and ad-free email service.</p>
          </div>
          <div className="section">
            <div className="flex-container">
              <div className='flex-item'>
                <h3>World-class security</h3>
                <p>Hext mail is highly secure and 99% spam free. Secure transactional and business emails with email tracking, detailed logs and reports.</p>
                <p>Secure your account from unauthorized access with two-factor authentication.</p>
                <p>Emails are encrypted in transit to secure email data. Extra layers of security with SPF, DKIM, and MX verifications.</p>
              </div>
              <div className='flex-item'>
                <img src="/images/mail/mail-security.svg" alt="secured mail" />
              </div>
            </div>
          </div>{/* section */}          
          <div className="section">
            <div className="flex-container">
              <div className='flex-item'><img src="/images/mail/mail-delivery.svg" alt="mail-delivery" /></div>
              <div className='flex-item'>
                <h3>High Delivery</h3>
                <p>Hext mail has a global network of high reputation mail servers with reputed IPs to ensure your emails will always get delivered.</p><p>Its our work to deal with IP reputation and network issues. We preserves the sender reputation of all our mail server IPs to ensure high deliverability.</p>
              </div>
            </div>
          </div>{/* section */}
          <div className="section">
            <div className="flex-column text-center">
              <div className='center'><img src="/images/mail/mail-pricing.svg" alt="mail pricing" /></div>
              <div>
                <h3>Simple and Flexible Pricing</h3>
                <p>Why pay a fixed amount every month. Just pay for what you use.</p>
              </div>
            </div>
            <div className="price-cards">
              <div className='price-card'>
                <h4>Lite</h4>
                <div className='plan-price'>$2 / month</div>
                <ul className="plan-details">
                  <li>15,000 mails /month</li>
                  <li>5 GB</li>
                  <li>10 Domains</li>
                  <li>APIs, SMTP Relay</li>
                  <li>Email routing</li>
                  <li>IMAP / POP</li>
                </ul>
                <div><a className='button' href="#">Order Now</a></div>
              </div>{/* price-card */}

              <div className='price-card'>
                <h4>Essential</h4>
                <div className='plan-price'>$10 / month</div>
                <ul className="plan-details">
                  <li>50,000 mails /month</li>
                  <li>50 GB</li>
                  <li>100 Domains</li>
                  <li>APIs, SMTP Relay</li>
                  <li>Email routing</li>
                  <li>IMAP / POP</li>
                </ul>
                <div><a className='button' href="#">Order Now</a></div>
              </div>{/* price-card */}
              <div className='price-card'>
                <h4>Premier</h4>
                <div className='plan-price'>$29 / month</div>
                <ul className="plan-details">
                  <li>100,000 mails /month</li>
                  <li>200 GB</li>
                  <li>Unlimited Domains</li>
                  <li>APIs, SMTP Relay</li>
                  <li>Email routing</li>
                  <li>IMAP / POP</li>
                </ul>
                <div><a className='button' href="#">Order Now</a></div>
              </div>{/* price-card */}
            </div>{/* price-cards */}
          </div>{/* section */}
          <div className="section">
            <h3 className='text-center'>Why choose us?</h3>
            <div className='flex-container'>
              <div className='flex-item bg-light-secondary'>1</div>
              <div className='flex-item bg-light-secondary'>2</div>
              <div className='flex-item bg-light-secondary'>3</div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}