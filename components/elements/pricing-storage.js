const PricingStorage = () => {
  return (
    <div className="price-cards">
      <div className='price-card'>
        <h4>SV1</h4>
        <div className='plan-price'>$2 / month</div>
        <ul className="plan-details">
          <li>1 vCPU Cores</li>
          <li>1 GB RAM</li>
          <li>500 GB HDD</li>
          <li>2 TB Transfer</li>
          <li>1 Gbit/s Port</li>
          <li>1 IPv4</li>
        </ul>
        <div><a className='button' href="#">Order Now</a></div>
      </div>{/* price-card */}

      <div className='price-card'>
        <h4>SV2</h4>
        <div className='plan-price'>$5 / month</div>
        <ul className="plan-details">
          <li>2 vCPU Cores</li>
          <li>2 GB RAM</li>
          <li>1 TB HDD</li>
          <li>10 TB Transfer</li>
          <li>1 Gbit/s Port</li>
          <li>1 IPv4</li>
        </ul>
        <div><a className='button' href="#">Order Now</a></div>
      </div>{/* price-card */}
      <div className='price-card'>
        <h4>SV3</h4>
        <div className='plan-price'>$10 / month</div>
        <ul className="plan-details">
          <li>4 vCPU Cores</li>
          <li>4 GB RAM</li>
          <li>4 TB HDD</li>
          <li>20 TB Transfer</li>
          <li>1 Gbit/s Port</li>
          <li>1 IPv4</li>
        </ul>
        <div><a className='button' href="#">Order Now</a></div>
      </div>{/* price-card */}
    </div>
  )
}
export default PricingStorage;