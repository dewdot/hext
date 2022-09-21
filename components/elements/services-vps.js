import Link from 'next/link'
import { ServicesVpsData } from '../data/ServicesVpsData';
const ServicesVps = () => {
  return (
    <div className="section">
      <div className="section-title">
        <h2>World Class VPS Hosting</h2>
        <h4>Fast, secure, reliable VPS hosting with 99.9% uptime guarantee</h4>
      </div>
      <div className="cards">
        {ServicesVpsData.map((item) => <div key={item.id} className="card">
          <div className="card-image"><img src={item.image} alt={item.title} /></div>
          <h4 className="card-ttile">{item.title}</h4>
          <div className="card-text">{item.text}</div>
          <div className='bg-light-secondary color-secondary box'>
          <div>From {item.price}</div>
          <div><Link href={item.link}>View plans</Link></div>
          </div>
        </div>)}
      </div>
    </div>

  )
}
export default ServicesVps;