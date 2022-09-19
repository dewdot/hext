import Link from 'next/link'
const FooterBlock4 = () => {
  return (
    <div className="footer-block">
      <ul>
        <li><Link href="/about">About Us</Link></li>
        <li><a href="#">Datacenter</a></li>
        <li><a href="#">Knowledgebase</a></li>
        <li><a href="#">Client Area</a></li>
      </ul>
    </div>
  )
}
export default FooterBlock4;