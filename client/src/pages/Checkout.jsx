import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { FiCreditCard, FiTruck } from "react-icons/fi";
import { useCart } from "../context/cartcontext";
import { placeOrder } from "../services/checkoutService";

function Checkout() {
  const navigate = useNavigate();

  const { cart, clearCart } = useCart();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    notes: "",
    payment: "Cash On Delivery",
  });

  // Calculate Subtotal
  const subtotal = cart.reduce((sum, item) => {
    return sum + Number(item.price || 0);
  }, 0);

  // Shipping Charges
  const shipping = subtotal >= 5000 ? 0 : 150;

  // Grand Total
  const grandTotal = subtotal + shipping;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ==========================
  // Place Order
  // ==========================

  const handleOrder = async () => {
    // Empty Cart
    if (cart.length === 0) {
      alert("🛒 Your cart is empty.");
      return;
    }

    // Required Fields
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone ||
      !formData.address ||
      !formData.city ||
      !formData.postalCode
    ) {
      alert("Please fill all required fields.");
      return;
    }

    // Email Validation
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Pakistan Phone Validation
    if (!/^03\d{9}$/.test(formData.phone)) {
      alert("Phone number must be 11 digits (03XXXXXXXXX).");
      return;
    }

    // Postal Code Validation
    if (!/^\d{5}$/.test(formData.postalCode)) {
      alert("Postal Code must be exactly 5 digits.");
      return;
    }

    setLoading(true);

    try {
      const orderData = {
        customerName: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        city: formData.city,
        postalCode: formData.postalCode,
        notes: formData.notes,
        paymentMethod: formData.payment,

        subtotal,
        shipping,
        totalAmount: grandTotal,

        products: cart.map((item) => ({
          name: item.name,
          price: item.price,
          image: item.image,
          quantity: item.quantity || 1,
        })),
      };

      const response = await placeOrder(orderData);

      await clearCart();

      alert("🎉 Order Placed Successfully!");

      navigate("/order-success", {
        state: {
          order: response.order,
        },
      });
    } catch (error) {
      console.log(error);
      console.log(error.response);
      console.log(error.response?.data);

      alert(error.response?.data?.message || "Failed to place order.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <section className="checkout-page">
        <div className="container">
          <div className="checkout-header">
            <h1>Checkout</h1>
            <p>Complete your order securely.</p>
          </div>

          <div className="checkout-wrapper">
            <div className="checkout-form">
              <h2>Billing Details</h2>

              <div className="form-grid">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                />

                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                />

                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <input
                className="full"
                type="text"
                name="address"
                placeholder="Street Address"
                value={formData.address}
                onChange={handleChange}
              />

              <div className="form-grid">
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                />

                <input
                  type="text"
                  name="postalCode"
                  placeholder="Postal Code"
                  value={formData.postalCode}
                  onChange={handleChange}
                />
              </div>

              <textarea
                rows="5"
                name="notes"
                placeholder="Order Notes (Optional)"
                value={formData.notes}
                onChange={handleChange}
              />

              <h2>Payment Method</h2>

              <div className="payment-option">
                <label>
                  <input
                    type="radio"
                    name="payment"
                    value="Cash On Delivery"
                    checked={formData.payment === "Cash On Delivery"}
                    onChange={handleChange}
                  />
                  Cash On Delivery
                </label>
              </div>

              <div className="payment-option">
                <label>
                  <input
                    type="radio"
                    name="payment"
                    value="Credit Card"
                    checked={formData.payment === "Credit Card"}
                    onChange={handleChange}
                  />
                  Credit / Debit Card
                </label>
              </div>
            </div>

            <div className="order-summary">
              <h2>Order Summary</h2>

              {cart.map((item) => (
                <div className="summary-item" key={item._id}>
                  <span>
                    {item.name} {item.quantity ? `x${item.quantity}` : ""}
                  </span>

                  <span>Rs. {Number(item.price).toLocaleString()}</span>
                </div>
              ))}

              <hr />

              <div className="summary-item">
                <span>Subtotal</span>

                <span>Rs. {subtotal.toLocaleString()}</span>
              </div>

              <div className="summary-item">
                <span>Shipping</span>

                <span>{shipping === 0 ? "FREE" : `Rs. ${shipping}`}</span>
              </div>

              <div className="summary-item total">
                <span>Grand Total</span>

                <span>Rs. {grandTotal.toLocaleString()}</span>
              </div>

              {subtotal < 5000 && (
                <p
                  style={{
                    color: "#777",
                    fontSize: "14px",
                    marginTop: "10px",
                  }}
                >
                  Add products worth Rs. {(5000 - subtotal).toLocaleString()}{" "}
                  more to get <strong>FREE Shipping.</strong>
                </p>
              )}

              <button
                className="place-order"
                onClick={handleOrder}
                disabled={loading || cart.length === 0}
                style={{
                  opacity: loading ? 0.7 : 1,
                  cursor: loading ? "not-allowed" : "pointer",
                }}
              >
                <FiCreditCard />

                {loading ? "Placing Order..." : "Place Order"}
              </button>

              <div className="secure-box">
                <FiTruck />

                <div>
                  <h4>Fast Delivery</h4>

                  <p>
                    Estimated Delivery:
                    <br />
                    2–4 Working Days
                  </p>
                </div>
              </div>

              <div
                style={{
                  marginTop: "20px",
                  padding: "12px",
                  background: "#f8f8f8",
                  borderRadius: "8px",
                  fontSize: "14px",
                  color: "#555",
                }}
              >
                🔒 Your payment and personal information are securely protected.
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Checkout;
