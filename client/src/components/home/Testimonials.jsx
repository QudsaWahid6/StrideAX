import { FaStar } from "react-icons/fa";

function Testimonials() {
  const reviews = [
    {
      name: "Ahmed Khan",
      city: "Lahore",
      image:
        "https://ui-avatars.com/api/?name=Ahmed+Khan&background=111111&color=fff&size=200&font-size=0.38&bold=true",
      review:
        "Absolutely love the quality! The sneakers are stylish, comfortable and arrived on time.",
    },
    {
      name: "Sara Ali",
      city: "Karachi",
      image:
        "https://ui-avatars.com/api/?name=Sara+Ali&background=ff6b00&color=fff&size=200&font-size=0.38&bold=true",
      review:
        "StrideAX exceeded my expectations. Premium packaging and amazing comfort!",
    },
    {
      name: "Usman Malik",
      city: "Islamabad",
      image:
        "https://ui-avatars.com/api/?name=Usman+Malik&background=111111&color=fff&size=200&font-size=0.38&bold=true",
      review:
        "One of the best online shopping experiences. Highly recommended.",
    },
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-heading">
          <span>HAPPY CUSTOMERS</span>
          <h2>What Our Customers Say</h2>
          <p>
            Thousands of sneaker lovers trust StrideAX for quality, comfort and
            style.
          </p>
        </div>

        <div className="testimonial-grid">
          {reviews.map((item, index) => (
            <div className="testimonial-card" key={index}>
              <img src={item.image} alt={item.name} />

              <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <p>"{item.review}"</p>

              <h4>{item.name}</h4>

              <span>{item.city}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
