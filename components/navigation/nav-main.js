import Link from 'next/link'
const NavMain = () => {
  return(
    <nav className="main-nav">
      <ul className='main-menu'>        
        <li><Link href="/hosting">Hosting</Link></li>
        <li><Link href="/vps">VPS</Link></li>
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