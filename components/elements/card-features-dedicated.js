import { FeaturesDedicatedData } from "../data/FeaturesDedicatedData";
const CardFeaturesDedicated = () => {
  return (
    <div className="flex-container">
      {FeaturesDedicatedData.map((item) => <div key={item.id} className="flex-item box bg-light-secondary">
        <div><img className="img-size3 center" src={item.image} alt={item.title} /></div>
        <h4 className="card-title">{item.title}</h4>
        <p className="card-text">{item.text}</p>
      </div>)}
    </div>
  )
}
export default CardFeaturesDedicated;