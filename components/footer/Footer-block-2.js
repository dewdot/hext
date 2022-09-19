import Link from 'next/link'
const FooterBlock2 = () => {
  return (
    <div className="footer-block">
      <ul>
        <li><Link href="/hosting/web-hosting">Web Hosting</Link></li>
        <li><Link href="/hosting/reseller-hosting">Reseller Hosting</Link></li>
        <li><Link href="/hosting/wordpress-hosting">WordPress Hosting</Link></li>
        <li><Link href="/email">Email Hosting</Link></li>
      </ul>
    </div>
  )
}
export default FooterBlock2;