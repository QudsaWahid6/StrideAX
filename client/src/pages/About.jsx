import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { FiTarget, FiAward, FiUsers, FiTruck } from "react-icons/fi";

function About() {
  return (
    <>
      <Navbar />

      <section className="about-page">
        {/* HERO */}

        <div className="about-hero">
          <div className="container">
            <h1>About StrideAX</h1>

            <p>
              Premium footwear crafted for comfort, performance and modern
              lifestyle.
            </p>
          </div>
        </div>

        {/* STORY */}

        <div className="container">
          <div className="about-story">
            <div className="about-image">
              <img
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200"
                alt="StrideAX"
              />
            </div>

            <div className="about-content">
              <span>OUR STORY</span>

              <h2>Designed For Every Step.</h2>

              <p>
                StrideAX was created with one simple goal — to deliver premium
                sneakers that combine luxury design, everyday comfort and
                exceptional performance.
              </p>

              <p>
                Whether you're an athlete, student or fashion enthusiast,
                StrideAX helps you move with confidence.
              </p>
            </div>
          </div>
        </div>

        {/* FEATURES */}

        <div className="container">
          <div className="about-features">
            <div className="feature-card">
              <FiTarget />

              <h3>Our Mission</h3>

              <p>
                Deliver stylish, comfortable and premium footwear at affordable
                prices.
              </p>
            </div>

            <div className="feature-card">
              <FiAward />

              <h3>Quality</h3>

              <p>
                Every pair is crafted using premium materials and modern
                technology.
              </p>
            </div>

            <div className="feature-card">
              <FiUsers />

              <h3>Happy Customers</h3>

              <p>Thousands of satisfied customers trust StrideAX every day.</p>
            </div>

            <div className="feature-card">
              <FiTruck />

              <h3>Fast Delivery</h3>

              <p>Nationwide delivery with secure packaging and easy returns.</p>
            </div>
          </div>
        </div>

        {/* STATS */}

        <section className="about-stats">
          <div className="container stats-grid">
            <div>
              <h2>15K+</h2>
              <p>Happy Customers</p>
            </div>

            <div>
              <h2>500+</h2>
              <p>Premium Products</p>
            </div>

            <div>
              <h2>25+</h2>
              <p>Countries Served</p>
            </div>

            <div>
              <h2>99%</h2>
              <p>Customer Satisfaction</p>
            </div>
          </div>
        </section>
      </section>

      <Footer />
    </>
  );
}

export default About;
