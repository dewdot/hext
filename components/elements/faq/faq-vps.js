import { FaqVpsData } from "../../data/FaqVpsData";
const FaqVps = () => {
  return(
    <div className='flex-container'>
      {FaqVpsData.map((item) => <div key={item.id} className="faq">
      <div className='faq-title'><h4>{item.title}</h4></div>
      <div className='faq-ans'>{item.text}</div>
      </div>)}
    </div>
  )
}

export default FaqVps;