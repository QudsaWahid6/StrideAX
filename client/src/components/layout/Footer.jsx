import { FiFacebook, FiInstagram, FiTwitter, FiYoutube } from "react-icons/fi";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h2 className="footer-logo">StrideAX</h2>

          <p>
            Premium sneakers designed for comfort, confidence and everyday
            lifestyle.
          </p>

          <div className="social-icons">
            <FiFacebook />
            <FiInstagram />
            <FiTwitter />
            <FiYoutube />
          </div>
        </div>

        <div>
          <h3>Quick Links</h3>

          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/login">Account</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3>Customer Care</h3>

          <ul>
            <li>Shipping Policy</li>
            <li>Return Policy</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div>
          <h3>Contact</h3>

          <ul>
            <li>Lahore, Pakistan</li>
            <li>+92 300 1234567</li>
            <li>support@strideax.com</li>
          </ul>
        </div>
      </div>

      <div className="copyright">© 2026 StrideAX. All Rights Reserved.</div>
    </footer>
  );
}

export default Footer;
