import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { useCart } from "../context/cartcontext";
import { Link } from "react-router-dom";
function Cart() {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => {
    return sum + Number(item.price || 0);
  }, 0);

  return (
    <>
      <Navbar />

      <div className="container" style={{ padding: "80px 0" }}>
        <h1>Shopping Cart</h1>

        {cart.length === 0 ? (
          <h3>Your cart is empty.</h3>
        ) : (
          <>
            {cart.map((item) => (
              <div
                key={item._id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "20px 0",
                  borderBottom: "1px solid #ddd",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                    }}
                  />

                  <div>
                    <h3>{item.name}</h3>
                    <p>Rs. {Number(item.price).toLocaleString()}</p>
                  </div>
                </div>

                <button onClick={() => removeFromCart(item._id)}>Remove</button>
              </div>
            ))}

            <h2 style={{ marginTop: "30px" }}>
              Total: Rs. {total.toLocaleString()}
            </h2>
          </>
        )}
        <Link to="/checkout">
          <button
            style={{
              marginTop: "20px",
              padding: "12px 25px",
              background: "#000",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              borderRadius: "6px",
              fontSize: "16px",
            }}
          >
            Proceed To Checkout
          </button>
        </Link>
      </div>

      <Footer />
    </>
  );
}

export default Cart;
