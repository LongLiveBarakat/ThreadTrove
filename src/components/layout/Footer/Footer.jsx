import "../Footer/Footer.scss";
import { Link } from "react-router-dom";
import twitterIcon from "../../../assets/images/socialLinks/1.svg";
import facebookIcon from "../../../assets/images/socialLinks/2.svg";
import instagramIcon from "../../../assets/images/socialLinks/3.svg";
import githubIcon from "../../../assets/images/socialLinks/4.svg";
import badge1 from "../../../assets/images/visaImages/Badge.svg";
import badge2 from "../../../assets/images/visaImages/Badge-1.svg";
import badge3 from "../../../assets/images/visaImages/Badge-2.svg";
import badge4 from "../../../assets/images/visaImages/Badge-3.svg";
import badge5 from "../../../assets/images/visaImages/Badge-4.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="upper-part">
        <div className="shop-co">
          <p className="shop-co-title">SHOP-CO</p>
          <p className="shop-co-paragraph">
            We have clothes that suit your style and <br /> which you’re proud
            to wear. From <br /> women to men.
          </p>
          <div className="social-links">
            <div className="twitter">
              <img src={twitterIcon} alt="Twitter" />
            </div>
            <div className="facebook">
              <img src={facebookIcon} alt="Facebook" />
            </div>
            <div className="instagram">
              <img src={instagramIcon} alt="Instagram" />
            </div>
            <div className="github">
              <img src={githubIcon} alt="GitHub" />
            </div>
          </div>
        </div>
        <div className="menu">
          <p className="row-title">Company</p>
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/">
            Shop
          </Link>
          <Link className="link" to="/">
            About Us
          </Link>
          <Link className="link" to="/">
            Contact Us
          </Link>
        </div>
        <div className="categories">
          <p className="row-title">Help</p>
          <Link className="link" to="/">
            Casual
          </Link>
          <Link className="link" to="/">
            Work & Office
          </Link>
          <Link className="link" to="/">
            Activewear
          </Link>
          <Link className="link" to="/">
            Evening Dresses
          </Link>
        </div>
        <div className="resources">
          <p className="row-title">FAQ</p>
          <Link className="link" to="/">
            Contact Support
          </Link>
          <Link className="link" to="/">
            FAQ
          </Link>
          <Link className="link" to="/">
            Live Chat
          </Link>
          <Link className="link" to="/">
            Returns
          </Link>
        </div>
        <div className="social-media">
          <p className="row-title">Resources</p>
          <Link className="link" to="/">
            Facebook
          </Link>
          <Link className="link" to="/">
            Twitter
          </Link>
          <Link className="link" to="/">
            Instagram
          </Link>
          <Link className="link" to="/">
            Pinterest
          </Link>
        </div>
      </div>
      <div className="lower-part">
        <p>Copyright @ 2024 Clothing Store Demo</p>
        <div className="visa-images">
          <img src={badge1} alt="Visa Badge" />
          <img src={badge2} alt="Visa Badge" />
          <img src={badge3} alt="Visa Badge" />
          <img src={badge4} alt="Visa Badge" />
          <img src={badge5} alt="Visa Badge" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
