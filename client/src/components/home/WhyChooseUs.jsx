import { FiTruck, FiShield, FiRefreshCw, FiAward } from "react-icons/fi";

function WhyChooseUs() {
  const features = [
    {
      icon: <FiTruck />,
      title: "Free Shipping",
      text: "Free delivery on all orders above Rs. 5000 across Pakistan.",
    },
    {
      icon: <FiAward />,
      title: "Premium Quality",
      text: "Crafted with premium materials for unmatched comfort and durability.",
    },
    {
      icon: <FiRefreshCw />,
      title: "Easy Returns",
      text: "7-day hassle-free return and exchange policy for your peace of mind.",
    },
    {
      icon: <FiShield />,
      title: "Secure Payments",
      text: "100% secure checkout with trusted payment methods.",
    },
  ];

  return (
    <section className="why-section">
      <div className="container">
        <div className="section-heading">
          <span>WHY STRIDEAX</span>
          <h2>Why Choose StrideAX?</h2>
          <p>
            We don't just sell sneakers. We create experiences with premium
            quality, comfort and trusted service.
          </p>
        </div>

        <div className="why-grid">
          {features.map((item, index) => (
            <div className="why-card" key={index}>
              <div className="why-icon">{item.icon}</div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
