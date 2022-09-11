import { FeaturesData } from "../data/FeaturesData";
const CardFeatures = () => {
  return (
    <section className="section">
      <div className="section-title">
        <h2>Why Choose Hext</h2>
      </div>
      <div className="cards">
        {FeaturesData.map((item) => <div key={item.id} className="card">
          <h4 className="card-title">{item.title}</h4>
          <p className="card-text">{item.text}</p>
        </div>)}
      </div>
    </section>
  )
}
export default CardFeatures;