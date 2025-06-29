import { Link } from "react-router-dom";
import "../Header/Header.scss";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <>
      <header className="main-header">
        <div className="links">
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/shop">
            Shop
          </Link>
          <Link className="link" to="/about-us">
            Aboute Us
          </Link>
          <Link className="link" to="/contact-us">
            Contact Us
          </Link>
        </div>

        <div className="logo">
          <h1>ThreadTrove</h1>
        </div>

        <div className="search-cart">
          <input
            className="search-input"
            type="text"
            placeholder="What Are You Looking For ?"
          />
          <FontAwesomeIcon className="bag-icon" icon={faBagShopping} />
          <Link className="link" to="/Sign-Up">
            <FontAwesomeIcon className="user-icon" icon={faUser} />
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
