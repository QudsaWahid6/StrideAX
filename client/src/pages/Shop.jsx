import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { FiSearch, FiHeart, FiShoppingBag } from "react-icons/fi";
import { useCart } from "../context/cartcontext";
import { getProducts, searchProducts } from "../services/productService";
import { addWishlist } from "../services/wishlistService";

function Shop() {
  const [searchParams] = useSearchParams();

  const urlSearch = searchParams.get("search") || "";
  const urlCategory = searchParams.get("category") || "";
  const { addToCart } = useCart();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState(urlSearch);
  const [sort, setSort] = useState("newest");

  const handleWishlist = async (item) => {
    try {
      await addWishlist(item);
      alert("❤️ Product Added To Wishlist");
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let data;

        if (urlSearch.trim() !== "") {
          data = await searchProducts(urlSearch);
        } else {
          data = await getProducts();
        }

        setProducts(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [urlSearch]);
  let filteredProducts = [...products];

  if (urlCategory.trim() !== "") {
    filteredProducts = filteredProducts.filter(
      (item) =>
        (item.category || "").toLowerCase() === urlCategory.toLowerCase(),
    );
  }

  if (sort === "low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }

  if (sort === "high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  if (loading) {
    return (
      <>
        <Navbar />

        <section className="shop-page">
          <div className="container">
            <h2 style={{ textAlign: "center", padding: "80px 0" }}>
              Loading Products...
            </h2>
          </div>
        </section>

        <Footer />
      </>
    );
  }

  if (filteredProducts.length === 0) {
    return (
      <>
        <Navbar />

        <section className="shop-page">
          <div className="container">
            <h2 style={{ textAlign: "center", padding: "80px 0" }}>
              No Products Found
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

      <section className="shop-page">
        <div className="container">
          <div className="shop-header">
            <h1>{urlCategory ? urlCategory : "Shop"}</h1>

            <div className="shop-actions">
              <div className="search-box">
                <FiSearch />

                <input
                  type="text"
                  placeholder="Search shoes..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>

              <select value={sort} onChange={(e) => setSort(e.target.value)}>
                <option value="newest">Newest</option>
                <option value="low">Price Low to High</option>
                <option value="high">Price High to Low</option>
              </select>
            </div>
          </div>

          <div className="shop-layout">
            <aside className="sidebar">
              <h3>Categories</h3>

              <label>
                <input type="checkbox" /> Running
              </label>

              <label>
                <input type="checkbox" /> Casual
              </label>

              <label>
                <input type="checkbox" /> Sports
              </label>

              <label>
                <input type="checkbox" /> Lifestyle
              </label>

              <h3>Sizes</h3>

              <div className="sizes">
                <span>39</span>
                <span>40</span>
                <span>41</span>
                <span>42</span>
                <span>43</span>
              </div>

              <h3>Colors</h3>

              <div className="colors">
                <span className="black"></span>
                <span className="white"></span>
                <span className="red"></span>
                <span className="blue"></span>
              </div>
            </aside>

            <div className="products-grid">
              {filteredProducts.map((item) => (
                <div className="product-card" key={item._id}>
                  <div className="product-image">
                    <span className="sale-badge">SALE</span>

                    <Link to={`/product/${item._id}`}>
                      <img src={item.image} alt={item.name} />
                    </Link>

                    <button
                      className="wishlist"
                      onClick={() => handleWishlist(item)}
                    >
                      <FiHeart />
                    </button>

                    <div className="product-overlay">
                      <Link to={`/product/${item._id}`}>
                        <button className="quick-btn">Quick View</button>
                      </Link>
                    </div>
                  </div>

                  <div className="product-content">
                    <Link
                      to={`/product/${item._id}`}
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                      }}
                    >
                      <h3>{item.name}</h3>
                    </Link>

                    <div className="price">
                      <span className="new">
                        Rs. {item.price.toLocaleString()}
                      </span>

                      <span className="old">
                        Rs. {(item.price + 2000).toLocaleString()}
                      </span>
                    </div>

                    <button
                      className="cart-btn"
                      onClick={() => addToCart(item)}
                    >
                      <FiShoppingBag />
                      Add To Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="pagination">
              <button>←</button>
              <button className="active">1</button>
              <button>2</button>
              <button>3</button>
              <button>→</button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Shop;
