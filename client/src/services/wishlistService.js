import axios from "axios";

const API = "http://localhost:5000/api/wishlist";

// Get Wishlist
export const getWishlist = async () => {
  const { data } = await axios.get(API);
  return data.wishlist;
};

// Add Wishlist
export const addWishlist = async (product) => {
  const { data } = await axios.post(API, {
    user: "Ali",
    productName: product.name,
    price: product.price,
    image: product.image,
  });

  return data;
};

// Delete Wishlist
export const deleteWishlist = async (id) => {
  const { data } = await axios.delete(`${API}/${id}`);
  return data;
};
