const FrontHero = () => {
  return(
    <section className="section section-front-hero">
      <div className="container">
        <div className="front-hero">
          <div className="front-hero-section front-hero-text">
            <h1>Powerful KVM VPS</h1>
          </div>{/* front-hero-text */}
          <div className="front-hero-section front-hero-image">
            <img src="/images/hero-image.svg" alt="hero image" />
          </div>{/* front-hero-image */}
        </div>
      </div>
    </section>
  )
}
export default FrontHero;