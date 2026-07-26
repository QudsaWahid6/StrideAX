import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FiSearch, FiHeart, FiShoppingBag, FiUser, FiX } from "react-icons/fi";

function Navbar({ overlay = false }) {
  const navigate = useNavigate();

  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    if (e.key === "Enter" && search.trim() !== "") {
      navigate(`/shop?search=${encodeURIComponent(search)}`);
      setShowSearch(false);
      setSearch("");
    }
  };

  const quickSearch = (value) => {
    navigate(`/shop?search=${encodeURIComponent(value)}`);
    setShowSearch(false);
    setSearch("");
  };

  return (
    <>
      {/* Top Bar */}

      {!overlay && (
        <div className="top-bar">
          <p>✨ Free Shipping on Orders Above Rs. 5000</p>
        </div>
      )}

      {/* Navbar */}

      <header className={`navbar${overlay ? " navbar-overlay" : ""}`}>
        <div className="container nav-container">
          <div className="logo">
            <Link to="/">StrideAX</Link>
          </div>

          <nav>
            <ul className="nav-links">
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/shop">Shop</Link>
              </li>

              <li>
                <a href="#">New Arrival</a>
              </li>

              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>

          <div className="nav-icons">
            <FiSearch
              className="icon-btn"
              onClick={() => setShowSearch(true)}
            />

            <Link to="/wishlist">
              <FiHeart className="icon-btn" />
            </Link>

            <Link to="/cart">
              <FiShoppingBag className="icon-btn" />
            </Link>

            <Link to="/login">
              <FiUser className="icon-btn" />
            </Link>
          </div>
        </div>
      </header>

      {/* Premium Search Overlay */}

      {showSearch && (
        <div
          className="premium-search-overlay"
          onClick={() => setShowSearch(false)}
        >
          <div
            className="premium-search-box"
            onClick={(e) => e.stopPropagation()}
          >
            <FiX
              className="close-search"
              onClick={() => setShowSearch(false)}
            />

            <h1>Search Products</h1>

            <p>Find your perfect pair of shoes.</p>

            <div className="search-input-box">
              <FiSearch />

              <input
                type="text"
                placeholder="Search shoes, brands..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleSearch}
                autoFocus
              />
            </div>

            <div className="popular-searches">
              <h3>Popular Searches</h3>

              <div className="tags">
                <span onClick={() => quickSearch("Running Shoes")}>
                  Running Shoes
                </span>

                <span onClick={() => quickSearch("Sneakers")}>Sneakers</span>

                <span onClick={() => quickSearch("Sports")}>Sports</span>

                <span onClick={() => quickSearch("Casual")}>Casual</span>

                <span onClick={() => quickSearch("Nike")}>Nike</span>

                <span onClick={() => quickSearch("Adidas")}>Adidas</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
