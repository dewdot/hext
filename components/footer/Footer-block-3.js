import Link from 'next/link'
const FooterBlock3 = () => {
  return (
    <div className="footer-block">
      <ul>
        <li><Link href="/vps/kvm-vps">KVM VPS</Link></li>
        <li><Link href="/vps/managed-vps">Managed VPS</Link></li>
        <li><Link href="/vps/storage-vps">Storage VPS</Link></li>
        <li><Link href="/dedicated">Dedicated Server</Link></li>
      </ul>
    </div>
  )
}
export default FooterBlock3;