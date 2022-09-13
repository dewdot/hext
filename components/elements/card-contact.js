import { ContactData } from "../data/ContactData";
const CardContact = () => {
  return (
    <>
      <div className="cards">
        {ContactData.map((item) => <div key={item.id} className="card">
          <div className="center"><img className="img-size3" src={item.image} alt={item.title} /></div>
          <h4 className="text-center">{item.title}</h4>
          <div className="text-center">{item.text}</div>
        </div>)}
      </div>
    </>
  )
}
export default CardContact;