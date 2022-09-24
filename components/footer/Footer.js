import FooterBlock1 from "./Footer-block-1";
import FooterBlock2 from "./Footer-block-2";
import FooterBlock3 from "./Footer-block-3";
import FooterBlock4 from "./Footer-block-4";
import FooterBottom from "./Footer-bottom";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-container">
            <FooterBlock1 />
            <FooterBlock2 />
            <FooterBlock3 />
            <FooterBlock4 />
          </div>
          <div className="footer-bottom">
            <FooterBottom />
          </div>
        </div>
      </footer>
    </>
  )
}
export default Footer;