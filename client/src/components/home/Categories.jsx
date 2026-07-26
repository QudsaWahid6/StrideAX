import { Link } from "react-router-dom";

function Categories() {
  return (
    <section className="categories">
      <div className="container">
        <div className="section-title">
          <span>SHOP BY CATEGORY</span>
          <h2>Find Your Perfect Pair</h2>
        </div>

        <div className="category-grid">
          <Link to="/shop?category=Running" className="category-card">
            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800"
              alt="Running Shoes"
            />
            <div className="overlay">
              <h3>Running</h3>
              <span className="explore-btn">Explore</span>
            </div>
          </Link>

          <Link to="/shop?category=Casual" className="category-card">
            <img
              src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=800"
              alt="Casual Shoes"
            />
            <div className="overlay">
              <h3>Casual</h3>
              <span className="explore-btn">Explore</span>
            </div>
          </Link>

          <Link to="/shop?category=Sports" className="category-card">
            <img
              src="https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=800"
              alt="Sports Shoes"
            />
            <div className="overlay">
              <h3>Sports</h3>
              <span className="explore-btn">Explore</span>
            </div>
          </Link>

          <Link to="/shop?category=Lifestyle" className="category-card">
            <img
              src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800"
              alt="Lifestyle Shoes"
            />
            <div className="overlay">
              <h3>Lifestyle</h3>
              <span className="explore-btn">Explore</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Categories;
