import { SupportData } from "../data/SupportData";
const CardSupport = () => {
  return (
    <>
      <div className="cards">
        {SupportData.map((item) => <div key={item.id} className="card">
        <div className="center"><img className="img-size3" src={item.image} alt={item.title} /></div>
          <h4 className="card-title text-center">{item.title}</h4>
          <div className="card-text text-center">{item.text}</div>
          <div className="center"><a className="button" href={item.link}>{item.linktext}</a></div>
        </div>)}
      </div>
    </>
  )
}
export default CardSupport;