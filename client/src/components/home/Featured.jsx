import { FiHeart, FiShoppingBag } from "react-icons/fi";
import { useCart } from "../../context/cartcontext";

function Featured() {
  const { addToCart } = useCart();

  const products = [
    {
      id: 1,
      name: "Marathon Pro",
      price: 7499,
      oldPrice: 8999,
      image: "https://i.ibb.co/PKygbhb/images-3-Photoroom-2.png",
    },
    {
      id: 2,
      name: "Street Lifestyle One",
      price: 6899,
      oldPrice: 7999,
      image: "https://i.ibb.co/8Dw0JpFR/images-5-Photoroom.png",
    },
    {
      id: 3,
      name: "Pro Sports Trainer",
      price: 8499,
      oldPrice: 9999,
      image: "https://i.ibb.co/39W6py0L/images-removebg-preview.png",
    },
    {
      id: 4,
      name: "Everyday Comfort Slip-On",
      price: 6299,
      oldPrice: 7499,
      image: "https://i.ibb.co/Y4R1crR7/images-1-Photoroom-1.png",
    },
  ];

  return (
    <section className="featured">
      <div className="container">
        <div className="section-title">
          <span>BEST SELLERS</span>
          <h2>Featured Collection</h2>
        </div>

        <div className="product-grid">
          {products.map((item) => (
            <div className="product-card" key={item.id}>
              <div className="product-image">
                <span className="sale-badge">SALE</span>

                <img src={item.image} alt={item.name} />

                <button className="wishlist">
                  <FiHeart />
                </button>
              </div>

              <div className="product-content">
                <h3>{item.name}</h3>

                <div className="price">
                  <span className="new">Rs. {item.price}</span>

                  <span className="old">Rs. {item.oldPrice}</span>
                </div>

                <button className="cart-btn" onClick={() => addToCart(item)}>
                  <FiShoppingBag />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Featured;
