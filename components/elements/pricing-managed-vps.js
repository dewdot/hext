const PricingManagedVPS = () => {
  return (
    <div className="price-cards">
      <div className='price-card'>
        <h4>VPS-2G</h4>
        <div className='plan-price'>$25 / month</div>
        <ul className="plan-details">
          <li>1 vCPU Cores</li>
          <li>2 GB RAM</li>
          <li>30 GB SSD</li>
          <li>2 TB Transfer</li>
          <li>1 IPv4</li>
          <li>Free DirectAdmin</li>
          <li>10 Gbit/s Port</li>
        </ul>
        <div><a className='button' href="#">Order Now</a></div>
      </div>{/* price-card */}

      <div className='price-card'>
        <h4>VPS-4G</h4>
        <div className='plan-price'>$40 / month</div>
        <ul className="plan-details">
          <li>2 vCPU Cores</li>
          <li>4 GB RAM</li>
          <li>80 GB SSD</li>
          <li>10 TB Transfer</li>
          <li>1 IPv4</li>
          <li>Free DirectAdmin</li>
          <li>10 Gbit/s Port</li>
        </ul>
        <div><a className='button' href="#">Order Now</a></div>
      </div>{/* price-card */}
      <div className='price-card'>
        <h4>VPS-8G</h4>
        <div className='plan-price'>$60 / month</div>
        <ul className="plan-details">
          <li>4 vCPU Cores</li>
          <li>8 GB RAM</li>
          <li>120 GB SSD</li>
          <li>30 TB Transfer</li>
          <li>10 Gbit/s Port</li>
          <li>Free DirectAdmin</li>
          <li>1 IPv4</li>
        </ul>
        <div><a className='button' href="#">Order Now</a></div>
      </div>{/* price-card */}
    </div>
  )
}
export default PricingManagedVPS;