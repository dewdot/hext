const PricingWp = () => {
  return (
    <div className="price-cards">
      <div className='price-card'>
        <h4>WP-Lite</h4>
        <div className='plan-price'>$2 / month</div>
        <ul className="plan-details">
          <li>15,000 mails /month</li>
          <li>5 GB</li>
          <li>10 Domains</li>
          <li>APIs, SMTP Relay</li>
          <li>Email routing</li>
          <li>IMAP / POP</li>
        </ul>
        <div><a className='button' href="#">Order Now</a></div>
      </div>{/* price-card */}

      <div className='price-card'>
        <h4>WP-Essential</h4>
        <div className='plan-price'>$10 / month</div>
        <ul className="plan-details">
          <li>50,000 mails /month</li>
          <li>50 GB</li>
          <li>100 Domains</li>
          <li>APIs, SMTP Relay</li>
          <li>Email routing</li>
          <li>IMAP / POP</li>
        </ul>
        <div><a className='button' href="#">Order Now</a></div>
      </div>{/* price-card */}
      <div className='price-card'>
        <h4>WP-Premier</h4>
        <div className='plan-price'>$29 / month</div>
        <ul className="plan-details">
          <li>100,000 mails /month</li>
          <li>200 GB</li>
          <li>Unlimited Domains</li>
          <li>APIs, SMTP Relay</li>
          <li>Email routing</li>
          <li>IMAP / POP</li>
        </ul>
        <div><a className='button' href="#">Order Now</a></div>
      </div>{/* price-card */}
    </div>
  )
}
export default PricingWp;