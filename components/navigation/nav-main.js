import Link from 'next/link'
const NavMain = () => {
  return(
    <nav className="main-nav">
      <ul className='main-menu'>        
        <li className='has-children'>
          <Link href="/hosting">Hosting</Link>
          <ul className='sub-menu'>
            <li><Link href="/hosting/web-hosting">Web Hosting</Link></li>
            <li><Link href="/hosting/reseller-hosting">Reseller Hosting</Link></li>
            <li><Link href="/hosting/wordpress-hosting">WordPress Hosting</Link></li>
          </ul>
        </li>
        <li className='has-children'>
          <Link href="/vps">VPS</Link>
          <ul className='sub-menu'>
            <li><Link href="/vps/kvm-vps">KVM VPS</Link></li>
            <li><Link href="/vps/managed-vps">Managed VPS</Link></li>
            <li><Link href="/vps/storage-vps">Storage VPS</Link></li>
          </ul>
        </li>
        <li><Link href="/dedicated">Dedicated</Link></li>
        <li><Link href="/email">Email</Link></li>
        <li><Link href="/support">Support</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
      <Link href="#"><a className='button button'>Login</a></Link>
    </nav>
  )
}
export default NavMain;