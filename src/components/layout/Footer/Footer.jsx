import "../Footer/Footer.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
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
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <div className="footer">
      {/* Newsletter Banner */}
      <div className="newsletter-banner">
        <h2 className="newsletter-banner__title">
          STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS
        </h2>
        <div className="newsletter-banner__form">
          <div className="newsletter-banner__input-wrap">
            <svg
              className="newsletter-banner__icon"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <polyline points="2,4 12,13 22,4" />
            </svg>
            <input
              type="email"
              className="newsletter-banner__input"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
            />
          </div>
          <button className="newsletter-banner__btn" onClick={handleSubscribe}>
            {subscribed ? "✓ Subscribed!" : "Subscribe to Newsletter"}
          </button>
        </div>
      </div>

      <div className="upper-part">
        <div className="shop-co">
          <p className="shop-co-title">SHOP-CO</p>
          <p className="shop-co-paragraph">
            We have clothes that suit your style and <br /> which you're proud
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
