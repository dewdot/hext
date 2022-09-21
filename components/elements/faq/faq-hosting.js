import { FaqHostingData } from "../../data/FaqHostingData";
const FaqHosting = () => {
  return(
    <div className='flex-container'>
      {FaqHostingData.map((item) => <div key={item.id} className="faq">
      <div className='faq-title'><h4>{item.title}</h4></div>
      <div className='faq-ans'>{item.text}</div>
      </div>)}
    </div>
  )
}
export default FaqHosting;