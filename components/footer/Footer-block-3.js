import Link from 'next/link'
const FooterBlock3 = () => {
  return (
    <div className="footer-block">
      <h4>About Us</h4>
      <ul>
        <li><Link href="/about">About Us</Link></li>
        <li>Blog</li>
        <li>Datacenter</li>
        <li>Knowledgebase</li>
        <li>Client Area</li>
      </ul>
    </div>
  )
}
export default FooterBlock3;