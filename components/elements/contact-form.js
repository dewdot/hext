const ContactForm = () => {
  return (
    <div className="contact-form-wrap">
      <h3>Get in touch</h3>
      <p>Looking for help? Fill the form and start a new adventure. Contact us for your any query</p>
      <form className="contact-form">
        <div className="form-item">
          <input className="form-field" type="text" id="sender-name" name="sender_name" required placeholder="your name" />
        </div>
        <div className="form-item">
          <input className="form-field" type="email" id="sender-email" name="sender_email" required placeholder="your email" />
        </div>
        <div className="form-item">
          <input className="form-field" type="text" id="message-subject" name="message_subject" required placeholder="Subject" />
        </div>
        <div className="form-item">
          <textarea className="form-field" id="message" name="message" required placeholder="message"></textarea>
        </div>
        <div className="form-item"><button type="submit" className="button button-primary">Send</button></div>
      </form>
    </div>
  )
}
export default ContactForm;