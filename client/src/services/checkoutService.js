import api from "./api";

export const placeOrder = async (orderData) => {
  const res = await api.post("/orders", orderData);
  return res.data;
};
