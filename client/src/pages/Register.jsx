import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { FiUser, FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";

function Register() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/auth/register",
        formData,
      );

      alert(data.message);

      navigate("/login");
    } catch (error) {
      alert(error.response?.data?.message || "Registration Failed");
    }
  };

  return (
    <>
      <Navbar />

      <section className="register-page">
        <div className="container">
          <div className="register-wrapper">
            {/* LEFT */}

            <div className="register-left">
              <div className="register-overlay">
                <h1>StrideAX</h1>

                <h2>Create Your Account</h2>

                <p>
                  Join the StrideAX community and enjoy premium sneakers,
                  exclusive offers and a seamless shopping experience.
                </p>
              </div>
            </div>

            {/* RIGHT */}

            <div className="register-right">
              <div className="register-box">
                <h2>Sign Up</h2>

                <p className="register-subtitle">
                  Create your account in a few seconds.
                </p>

                <form onSubmit={handleSubmit}>
                  <div className="input-group">
                    <FiUser />
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="input-group">
                    <FiMail />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="input-group">
                    <FiLock />

                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />

                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FiEyeOff /> : <FiEye />}
                    </button>
                  </div>

                  <button type="submit" className="register-btn">
                    Create Account
                  </button>
                </form>

                <p className="login-link">
                  Already have an account?
                  <Link to="/login"> Login</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Register;
