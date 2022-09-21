import { FeaturesStorageData } from "../data/FeaturesSorageData";
const FeaturesStorage = () => {
  return (
    <div className="flex-container">
      {FeaturesStorageData.map((item) => <div key={item.id} className="flex-item box bg-light-secondary text-center">
        <div><img className="img-size3 center" src={item.image} alt={item.title} /></div>
        <h4 className="card-title">{item.title}</h4>
        <p className="card-text">{item.text}</p>
      </div>)}
    </div>
  )
}
export default FeaturesStorage;