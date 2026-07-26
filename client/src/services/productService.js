import axios from "axios";

const API = "http://localhost:5000/api/products";

// Get All Products
export const getProducts = async () => {
  const response = await axios.get(API);
  return response.data.products;
};

// Search Products
export const searchProducts = async (keyword) => {
  const response = await axios.get(
    `${API}/search?keyword=${encodeURIComponent(keyword)}`,
  );

  return response.data.products;
};
