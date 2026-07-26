import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";

function Contact() {
  return (
    <>
      <Navbar />

      <section className="contact-page">
        <div className="container">
          <div className="contact-heading">
            <h1>Contact Us</h1>

            <p>
              We'd love to hear from you. Get in touch with the StrideAX team.
            </p>
          </div>

          <div className="contact-wrapper">
            {/* LEFT */}

            <div className="contact-info">
              <h2>Get In Touch</h2>

              <p>
                Have questions about our products, orders or services? Our team
                is always ready to help.
              </p>

              <div className="info-box">
                <FiMapPin />

                <div>
                  <h4>Address</h4>

                  <p>Lahore, Pakistan</p>
                </div>
              </div>

              <div className="info-box">
                <FiPhone />

                <div>
                  <h4>Phone</h4>

                  <p>+92 300 1234567</p>
                </div>
              </div>

              <div className="info-box">
                <FiMail />

                <div>
                  <h4>Email</h4>

                  <p>support@strideax.com</p>
                </div>
              </div>

              <div className="info-box">
                <FiClock />

                <div>
                  <h4>Working Hours</h4>

                  <p>Mon - Sat | 9 AM - 8 PM</p>
                </div>
              </div>
            </div>

            {/* RIGHT */}

            <div className="contact-form">
              <h2>Send Message</h2>

              <form>
                <input type="text" placeholder="Your Name" />

                <input type="email" placeholder="Email Address" />

                <input type="text" placeholder="Subject" />

                <textarea
                  rows="6"
                  placeholder="Write your message..."
                ></textarea>

                <button>Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Contact;
