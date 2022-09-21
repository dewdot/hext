import { useState } from 'react';
import Link from 'next/link'
const NavMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className='header-menu'>
      <div className='view-mobile'>
        <div className={"mobile-menu-icon " + (menuOpen ? "active-mobile-menu-icon" : "")} onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>{/* mobile-menu-icon */}
      </div>
      <nav className={"main-nav " + (menuOpen ? "active-mobile-menu" : "")}>
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
        <Link href="#"><a className='button view-desktop'>Login</a></Link>
      </nav>
    </div>
  )
}
export default NavMain;