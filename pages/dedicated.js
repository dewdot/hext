import Head from 'next/head'
import CardFeaturesDedicated from '../components/elements/card-features-dedicated'
import FaqDedicated from '../components/elements/faq/faq-dedicated'
import Header from '../components/header/Header'
import PageHeader from '../components/header/page-header'
export default function Dedicated() {
  return (
    <>
      <Head>
        <title>Dedicated Servers | Hext</title>
      </Head>
      <header className="header header-page">
        <Header />
        <PageHeader title="Dedicated Server" />
      </header>
      <main className='main'>
        <div className='container'>
          <div className='section'>
            <h3>Dual Core Servers</h3>
            <div className="bg-light-secondary box">
              <div className='flex-container align-center server-plan'>
                <div className="flex-20"><h4>Intel Atom D510</h4></div>
                <div className="flex-20">
                  <ul>
                    <li>2 x 1.66 GHz</li>
                    <li>16GB DDR4</li>
                    <li>64GB SSD</li>
                  </ul>
                </div>
                <div className="flex-10">$30 /month</div>
                <div className="flex-10"><a className='button' href='#'>Order</a></div>
              </div>
              <div><hr /></div>
              <div className='flex-container align-center server-plan'>
                <div className="flex-20"><h4>Intel Atom D525</h4></div>
                <div className="flex-20">
                  <ul>
                    <li>2 x 1.80 GHz</li>
                    <li>32GB DDR4</li>
                    <li>128GB SSD</li>
                  </ul>
                </div>
                <div className="flex-10">$50 /month</div>
                <div className="flex-10"><a className='button' href='#'>Order</a></div>
              </div>
            </div>
          </div>{/* section */}

          <div className='section'>
            <h3>Multi Core Servers</h3>
            <div className="bg-light-secondary box">
              <div className='flex-container align-center server-plan'>
                <div className="flex-20"><h4>Intel Core i7</h4></div>
                <div className="flex-20">
                  <ul>
                    <li>4 x 4.00 GHz</li>
                    <li>32GB DDR4</li>
                    <li>128GB SSD</li>
                  </ul>
                </div>
                <div className="flex-10">$60 /month</div>
                <div className="flex-10"><a className='button' href='#'>Order</a></div>
              </div>
              <div><hr /></div>
              <div className='flex-container align-center server-plan'>
                <div className="flex-20"><h4>Intel Xeon E3 1240</h4></div>
                <div className="flex-20">
                  <ul>
                    <li>4 x 3.50 GHz</li>
                    <li>64GB DDR4</li>
                    <li>240GB SSD</li>
                  </ul>
                </div>
                <div className="flex-10">$76 /month</div>
                <div className="flex-10"><a className='button' href='#'>Order</a></div>
              </div>
              <div><hr /></div>
              <div className='flex-container align-center server-plan'>
                <div className="flex-20"><h4>AMD Ryzen 5800</h4></div>
                <div className="flex-20">
                  <ul>
                    <li>8 x 3.80 GHz</li>
                    <li>64GB DDR4</li>
                    <li>500GB SSD</li>
                  </ul>
                </div>
                <div className="flex-10">$99 /month</div>
                <div className="flex-10"><a className='button' href='#'>Order</a></div>
              </div>
              <div><hr /></div>
              <div className='flex-container align-center server-plan'>
                <div className="flex-20"><h4>AMD Ryzen 3950X</h4></div>
                <div className="flex-20">
                  <ul>
                    <li>16 x 3.50 GHz</li>
                    <li>128GB DDR4</li>
                    <li>1TB SSD</li>
                  </ul>
                </div>
                <div className="flex-10">$120 /month</div>
                <div className="flex-10"><a className='button' href='#'>Order</a></div>
              </div>
            </div>
          </div>{/* section */}
          <div className='section'>
            <div className='section-title'>
              <h3>Why Hext Server</h3>
            </div>
            <CardFeaturesDedicated />
          </div>{/* section */}
          <div className='section'>
            <div className='section-title'>
              <h3>Frequently Asked Questions</h3>
            </div>
            <FaqDedicated />
          </div>{/* section */}
        </div>
      </main>
    </>
  )
}