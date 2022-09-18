import { FeaturesHostingData } from "../data/FeaturesHostingData";
const CardFeaturesHosting = () => {
  return (
    <section className="section">
      <div className="section-title">
        <h2>Why Choose Hext</h2>
      </div>
      <div className="cards">
        {FeaturesHostingData.map((item) => <div key={item.id} className="card">
          <div><img className="img-size3" src={item.image} alt={item.title} /></div>
          <h4 className="card-title">{item.title}</h4>
          <p className="card-text">{item.text}</p>
        </div>)}
      </div>
    </section>
  )
}
export default CardFeaturesHosting;