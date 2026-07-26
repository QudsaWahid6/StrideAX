import { createContext, useContext, useEffect, useState } from "react";
import {
  getCart,
  addCart,
  deleteCart,
  clearCart as clearCartService,
} from "../services/cartService";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const fetchCart = async () => {
    try {
      const data = await getCart();
      setCart(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const addToCart = async (product) => {
    try {
      await addCart(product);

      alert("🛒 Product Added To Cart");

      fetchCart();
    } catch (error) {
      console.log(error);
      alert("Failed to add product.");
    }
  };

  const removeFromCart = async (id) => {
    try {
      await deleteCart(id);

      fetchCart();
    } catch (error) {
      console.log(error);
    }
  };
  const clearCart = async () => {
    try {
      for (const item of cart) {
        await deleteCart(item._id);
      }

      fetchCart();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        fetchCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
