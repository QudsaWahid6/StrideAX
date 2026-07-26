import api from "./api";

// Get Cart
export const getCart = async () => {
  const res = await api.get("/cart");
  return res.data.cart;
};

// Add To Cart
export const addCart = async (product) => {
  const res = await api.post("/cart", {
    user: "Guest",
    productName: product.name,
    price: product.price,
    image: product.image,
    quantity: 1,
  });

  return res.data;
};

// Delete Cart Item
export const deleteCart = async (id) => {
  const res = await api.delete(`/cart/${id}`);
  return res.data;
};
export const clearCart = async () => {
  const items = await getCart();

  for (const item of items) {
    await deleteCart(item._id);
  }
};
