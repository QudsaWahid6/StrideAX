import api from "./api";

// Get All Products
export const getProducts = async () => {
  const response = await api.get("/products");
  return response.data.products;
};

// Search Products
export const searchProducts = async (keyword) => {
  const response = await api.get(
    `/products/search?keyword=${encodeURIComponent(keyword)}`,
  );

  return response.data.products;
};
