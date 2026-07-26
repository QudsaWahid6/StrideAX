import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero-elegant">
      <img
        className="hero-elegant-bg"
        src="https://cdn.shopify.com/s/files/1/0568/3534/2513/files/1_b643ce81-f2cf-4c3d-ad9b-2e2f556cbb61_3000x3000.jpg?v=1666259313"
        alt="StrideAX Collection"
      />

      <div className="hero-elegant-overlay" />
      <div className="hero-elegant-topbar" />

      <div className="container hero-elegant-content">
        <span className="hero-elegant-badge">New Collection 2026</span>

        <h1 className="hero-elegant-title">
          <span className="script">The</span>
          <span className="bold">StrideAX</span>
          <span className="tracked">Collection</span>
        </h1>

        <p className="hero-elegant-sub">In Stores &amp; Online</p>

        <div className="hero-elegant-links">
          <Link to="/shop" className="hero-elegant-link">
            Shop Now <FaArrowRight />
          </Link>
        </div>
      </div>

      <div className="hero-dots">
        <span className="active"></span>
        <span></span>
        <span></span>
      </div>
    </section>
  );
}

export default Hero;
