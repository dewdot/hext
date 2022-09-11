import Image from 'next/image'
import Link from 'next/link'
const FooterBlock1 = () => {
  return (
    <div className="footer-block">
      <div className='site-logo'><Image className="logo" src="/images/logo.svg" width={187} height={80} alt="hext" /></div>
      <p>
        Hext is a world class affordable web hosting provider. We provider Secure, reliable and fast web hosting with a 99.9% uptime guarantee <Link href="/about">Read more about Us</Link></p>
    </div>
  )
}
export default FooterBlock1;