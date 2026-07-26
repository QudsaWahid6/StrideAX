import api from "./api";

// Get Wishlist
export const getWishlist = async () => {
  const { data } = await api.get("/wishlist");
  return data.wishlist;
};

// Add Wishlist
export const addWishlist = async (product) => {
  const { data } = await api.post("/wishlist", {
    user: "Ali",
    productName: product.name,
    price: product.price,
    image: product.image,
  });

  return data;
};

// Delete Wishlist
export const deleteWishlist = async (id) => {
  const { data } = await api.delete(`/wishlist/${id}`);
  return data;
};
