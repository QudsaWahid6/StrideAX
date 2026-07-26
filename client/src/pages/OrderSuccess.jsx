import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Link, useLocation } from "react-router-dom";
import { FiCheckCircle, FiShoppingBag } from "react-icons/fi";

function OrderSuccess() {
  const { state } = useLocation();

  const order = state?.order;
  return (
    <>
      <Navbar />

      <section className="success-page">
        <div className="container">
          <div className="success-card">
            <FiCheckCircle
              style={{
                fontSize: "80px",
                color: "#22c55e",
              }}
            />

            <h1>Order Placed Successfully 🎉</h1>

            <p>
              Thank you for shopping with
              <strong> StrideAX</strong>.
              <br />
              Your order has been received and is being processed.
            </p>

            <div className="order-info">
              <div>
                <h4>Order ID</h4>
                <span>{order?._id || "N/A"}</span>
              </div>

              <div>
                <h4>Payment</h4>
                <span>{order?.paymentMethod || "Cash On Delivery"}</span>
              </div>

              <div>
                <h4>Delivery</h4>
                <span>2–5 Working Days</span>
              </div>
            </div>
            <div>
              <div>
                <h4>Total</h4>
                <span>
                  Rs. {Number(order?.totalAmount || 0).toLocaleString()}
                </span>
              </div>

              <h4>Customer</h4>
              <span>{order?.customerName}</span>
            </div>

            <Link to="/shop">
              <button className="continue-btn">
                <FiShoppingBag />
                Continue Shopping
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default OrderSuccess;
