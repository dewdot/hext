import { FaqDedicatedsData } from "../../data/FaqDedicatedData";
const FaqDedicated = () => {
  return(
    <div className='flex-container'>
      {FaqDedicatedsData.map((item) => <div key={item.id} className="faq">
      <div className='faq-title'><h4>{item.title}</h4></div>
      <div className='faq-ans'>{item.text}</div>
      </div>)}
    </div>
  )
}

export default FaqDedicated;