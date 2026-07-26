import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { FiSearch } from "react-icons/fi";

function Search() {
  const products = [
    {
      id: 1,
      name: "Stride Runner X",
      price: "Rs. 7,499",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900",
    },
    {
      id: 2,
      name: "Urban Sneakers",
      price: "Rs. 6,999",
      image:
        "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=900",
    },
    {
      id: 3,
      name: "Nike Air",
      price: "Rs. 8,999",
      image:
        "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=900",
    },
    {
      id: 4,
      name: "Adidas Boost",
      price: "Rs. 9,499",
      image:
        "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=900",
    },
  ];

  const [search, setSearch] = useState("");

  const filtered = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      <Navbar />

      <section className="search-page">
        <div className="container">
          <h2>Search Products</h2>

          <div className="search-box">
            <FiSearch />

            <input
              type="text"
              placeholder="Search Shoes..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="search-grid">
            {filtered.map((item) => (
              <div className="search-card" key={item.id}>
                <img src={item.image} alt={item.name} />

                <h3>{item.name}</h3>

                <p>{item.price}</p>

                <button>View Product</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Search;
