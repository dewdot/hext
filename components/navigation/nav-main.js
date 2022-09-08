import Link from 'next/link'
const NavMain = () => {
  return(
    <nav className="main-nav">
      <ul className='main-menu'>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About Us</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  )
}
export default NavMain;