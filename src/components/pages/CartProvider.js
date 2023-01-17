import { useState, createContext, useContext } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function getTotal() {
    let total = 0;

    for (let i = 0; i < cart.length; i++) {
      console.log("this is the cart----- ", cart);
      total += cart[i].price;
    }

    return total;
  }

  function addProduct(product) {
    setCart((c) => [...c, product]);
  }

  function clearCart() {
    if (window.confirm("Are you sure you want to remove your cart items?")) {
      setCart([]);
    }
  }

  const cartState = {
    cart,
    addProduct,
    clearCart,
    getTotal,
  };

  console.log(cart);

  return (
    <CartContext.Provider value={cartState}>{children}</CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
