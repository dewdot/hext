import Image from 'next/image'
import Link from 'next/link'
import NavMain from '../elements/navigation/nav-main';
const Header = () => {
  return (
    <div className='header-top'>
      <div className="container">
        <div className="header-container">
          <Link href="/">
            <a>
              <div className="site-logo">
                <Image className="logo" src="/images/logo.svg" width={119} height={38} alt="hext" />
              </div>{/* site-logo */}
            </a>
          </Link>
          <NavMain />
        </div>{/* header-container */}
      </div>
    </div>
  )
}
export default Header;