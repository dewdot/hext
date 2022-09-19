import { FeaturesEmailData } from "../data/FeaturesEmailData";
const FeaturesEmail = () => {
  return (
    <div className="flex-container">
      {FeaturesEmailData.map((item) => <div key={item.id} className="flex-item flex-column box text-center bg-light-secondary">
        <h4>{item.title}</h4>
        <div>{item.text}</div>
      </div>)}
    </div>
  )
}
export default FeaturesEmail;