import Image from 'next/image'
import NavMain from '../elements/navigation/nav-main';
const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-container">
            <div className="site-logo">
              <Image className="logo" src="/images/logo.svg" width={119} height={38} alt="hext" />
            </div>{/* site-logo */}
            <NavMain />
          </div>{/* header-container */}
        </div>{/* container */}
      </header>
    </>
  )
}
export default Header;