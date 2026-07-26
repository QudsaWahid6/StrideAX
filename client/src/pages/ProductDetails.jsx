import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { FiHeart, FiShoppingBag, FiTruck } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { useCart } from "../context/cartcontext";
import axios from "axios";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const [size, setSize] = useState("42");
  const [color, setColor] = useState("Black");
  const [qty, setQty] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:5000/api/products/${id}`,
        );

        setProduct(data.product);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <>
        <Navbar />

        <section className="product-page">
          <div className="container">
            <h2 style={{ textAlign: "center", padding: "80px" }}>
              Loading Product...
            </h2>
          </div>
        </section>

        <Footer />
      </>
    );
  }

  if (!product) {
    return (
      <>
        <Navbar />

        <section className="product-page">
          <div className="container">
            <h2 style={{ textAlign: "center", padding: "80px" }}>
              Product Not Found
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

      <section className="product-page">
        <div className="container product-details">
          <div className="product-left">
            <img src={product.image} alt={product.name} />
          </div>

          <div className="product-right">
            <span className="product-tag">
              {product.category.toUpperCase()}
            </span>

            <h1>{product.name}</h1>

            <div className="product-rating">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />

              <span>(145 Reviews)</span>
            </div>

            <div className="product-price">
              <h2>Rs. {product.price.toLocaleString()}</h2>

              <del>Rs. {(product.price + 2000).toLocaleString()}</del>
            </div>

            <p className="product-desc">{product.description}</p>

            <h4>Brand</h4>

            <p>{product.brand}</p>

            <h4>Stock</h4>

            <p>{product.stock} Available</p>

            <h4>Select Size</h4>

            <div className="sizes">
              {["39", "40", "41", "42", "43"].map((item) => (
                <button
                  key={item}
                  className={size === item ? "active-size" : ""}
                  onClick={() => setSize(item)}
                >
                  {item}
                </button>
              ))}
            </div>

            <h4>Select Color</h4>

            <div className="colors">
              {["Black", "White", "Red"].map((item) => (
                <button
                  key={item}
                  className={color === item ? "active-color" : ""}
                  onClick={() => setColor(item)}
                >
                  {item}
                </button>
              ))}
            </div>

            <h4>Quantity</h4>

            <div className="qty-box">
              <button onClick={() => qty > 1 && setQty(qty - 1)}>-</button>

              <span>{qty}</span>

              <button onClick={() => setQty(qty + 1)}>+</button>
            </div>

            <div className="product-buttons">
              <button
                className="add-cart"
                onClick={() => {
                  addToCart({
                    ...product,
                    size,
                    color,
                    qty,
                  });

                  alert("Product Added To Cart ✅");
                }}
              >
                <FiShoppingBag />
                Add To Cart
              </button>

              <button className="wishlist-btn">
                <FiHeart />
              </button>
            </div>

            <div className="shipping-box">
              <FiTruck />

              <div>
                <h4>Free Shipping</h4>

                <p>Free delivery on orders above Rs. 5000</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default ProductDetails;
