import { ServicesData } from "../data/ServicesData";
const CardServices = () => {
  return (
    <div className="section">
      <div className="section-title">
        <h2>Our World-Class Web Hosting</h2>
        <h4>Fast, Secure, reliable web hosting with 99.9% uptime guarantee</h4>
      </div>
      <div className="cards">
        {ServicesData.map((item) => <div key={item.id} className="card">
          <div className="card-image"><img src={`/images/webhosting/${item.image}`} alt={item.title} /></div>
          <h4 className="card-ttile">{item.title}</h4>
          <div className="card-text">{item.text}</div>
        </div>)}
      </div>
    </div>

  )
}
export default CardServices;