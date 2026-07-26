import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import { FiEye, FiEyeOff, FiMail, FiLock } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";

function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
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
        "http://localhost:5000/api/auth/login",
        formData,
      );

      // Save Token
      localStorage.setItem("token", data.token);

      // Save User
      localStorage.setItem("user", JSON.stringify(data.user));

      alert(data.message);

      navigate("/");
    } catch (error) {
      alert(error.response?.data?.message || "Login Failed");
    }
  };

  return (
    <>
      <Navbar />

      <section className="login-page">
        <div className="container">
          <div className="login-wrapper">
            {/* LEFT SIDE */}

            <div className="login-left">
              <div className="login-overlay">
                <h1>StrideAX</h1>

                <h2>Move With Confidence.</h2>

                <p>
                  Premium sneakers crafted for comfort, performance and timeless
                  street style.
                </p>
              </div>
            </div>

            {/* RIGHT SIDE */}

            <div className="login-right">
              <div className="login-box">
                <h2>Welcome Back</h2>

                <p className="login-subtitle">Login to continue shopping.</p>

                <form onSubmit={handleSubmit}>
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

                  <div className="login-options">
                    <label>
                      <input type="checkbox" />
                      Remember Me
                    </label>

                    <a href="#">Forgot Password?</a>
                  </div>

                  <button type="submit" className="login-btn">
                    Login
                  </button>
                </form>

                <div className="divider">
                  <span>OR</span>
                </div>

                <button className="google-btn">
                  <FcGoogle />
                  Continue with Google
                </button>

                <p className="register-link">
                  Don't have an account?
                  <Link to="/register"> Register</Link>
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

export default Login;
