import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { useState, useEffect } from "react";
import { FiHeart, FiShoppingCart, FiTrash2 } from "react-icons/fi";
import { useCart } from "../context/cartcontext";
import { getWishlist, deleteWishlist } from "../services/wishlistService";

function Wishlist() {
  const { addToCart } = useCart();

  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchWishlist = async () => {
    try {
      const data = await getWishlist();
      setWishlist(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWishlist();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteWishlist(id);

      alert("Product Removed From Wishlist ❤️");

      fetchWishlist();
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return (
      <>
        <Navbar />

        <section className="wishlist-page">
          <div className="container">
            <h2 style={{ textAlign: "center", padding: "80px" }}>
              Loading Wishlist...
            </h2>
          </div>
        </section>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <section className="wishlist-page">
        <div className="container">
          <h2 className="page-title">
            <FiHeart /> My Wishlist
          </h2>

          {wishlist.length === 0 ? (
            <div className="empty-box">
              <h3>Your Wishlist is Empty ❤️</h3>

              <p>Add products to your wishlist.</p>
            </div>
          ) : (
            <div className="wishlist-grid">
              {wishlist.map((item) => (
                <div className="wishlist-card" key={item._id}>
                  <img src={item.image} alt={item.productName} />

                  <h3>{item.productName}</h3>

                  <h4>Rs. {item.price.toLocaleString()}</h4>

                  <div className="wishlist-buttons">
                    <button
                      className="cart-btn"
                      onClick={() =>
                        addToCart({
                          id: item._id,
                          name: item.productName,
                          price: item.price,
                          image: item.image,
                        })
                      }
                    >
                      <FiShoppingCart />
                      Add To Cart
                    </button>

                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(item._id)}
                    >
                      <FiTrash2 />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Wishlist;
