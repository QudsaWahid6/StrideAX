import { FiShoppingBag, FiHeart } from "react-icons/fi";
import { useCart } from "../../context/cartcontext";

function NewArrivals() {
  const { addToCart } = useCart();

  const arrivals = [
    {
      id: 1,
      name: "Velocity Runner",
      price: 6999,
      image: "https://i.ibb.co/vvQnYFYB/images-2-Photoroom-3.png",
    },
    {
      id: 2,
      name: "Urban Icon Lifestyle",
      price: 6799,
      image: "https://i.ibb.co/G4YsHV3Z/images-3-Photoroom.png",
    },
    {
      id: 3,
      name: "Court Sports Grip",
      price: 6899,
      image:
        "https://i.ibb.co/hRzxjt1x/7921020f-6a6a-406f-b245-dfd7b45d6e8b-1-Photoroom.png",
    },
    {
      id: 4,
      name: "Daily Comfort Sneaker",
      price: 5199,
      image: "https://i.ibb.co/9ms9xbqF/images-2-Photoroom.png",
    },
    {
      id: 5,
      name: "Sprint Elite",
      price: 7299,
      image: "https://i.ibb.co/2YNBTyVk/images-4-Photoroom.png",
    },
  ];

  return (
    <section className="arrivals">
      <div className="container">
        <div className="section-title">
          <span>JUST DROPPED</span>
          <h2>New Arrivals</h2>
        </div>

        <div className="arrival-slider">
          {arrivals.map((item) => (
            <div className="arrival-card" key={item.id}>
              <div className="arrival-image">
                <img src={item.image} alt={item.name} />

                <button className="arrival-heart">
                  <FiHeart />
                </button>
              </div>

              <div className="arrival-content">
                <h3>{item.name}</h3>

                <p>Rs. {item.price.toLocaleString()}</p>

                <button className="arrival-btn" onClick={() => addToCart(item)}>
                  <FiShoppingBag />
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewArrivals;
