import Link from 'next/link'
const yr = new Date().getFullYear();
const FooterBottom = () => {
  return (
    <>
      <div className="footer-copyright">
        Copyright © {yr} | Hext
      </div>
      <div className="footer-bottom-links">
        <a href="#">Privacy Policy</a> | <a href="#">Terms and Conditions</a>
      </div>
      <div className="social">
        <ul className='social-icons'>
          <li><a className='social-icon' href="#">t</a></li>
          <li><a className='social-icon' href="#">f</a></li>
          <li><a className='social-icon' href="#">in</a></li>
        </ul>
      </div>
    </>
  )
}
export default FooterBottom;