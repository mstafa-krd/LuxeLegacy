import { createContext, useEffect, useState } from "react";
import { pruductsData } from "../Components/PruductsData";

export const CartContext = createContext(null);
function getDefulteCart() {
  let cart = {};
  for (let i = 0; i < pruductsData.length; i++) {
    cart[i] = 0;
  }
  return cart;
}

function getInitialState() {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : getDefulteCart();
}
export default function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState(getInitialState);
  const [selectedProducts, setSelectedProducts] = useState({});
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartProducts));
  }, [cartProducts]);
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartProducts) {
      if (cartProducts[item] > 0) {
        let itemInfo = pruductsData.find(
          (product) => product.id === Number(item)
        );
        totalAmount += cartProducts[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };
  const getTotalCart = () => {
    const valuesArray = Object.values(cartProducts);
    const sum = valuesArray.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    // the reduce() function will sum up these values, resulting in a sum of the Object cartProducts
    return sum;
  };

  const addToCart = (itemId) => {
    setCartProducts((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    setSelectedProducts((prev) => ({ ...prev, [itemId]: true }));
  };
  const removeFromCart = (itemId) => {
    setCartProducts((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  const updateCartItemCount = (newAmount, itemId) => {
    setCartProducts((prev) => ({ ...prev, [itemId]: newAmount }));
  };
  const addToMultiCart = (ordersNumbers, itemId) => {
    setCartProducts((prev) => ({
      ...prev,
      [itemId]: prev[itemId] + ordersNumbers,
    }));
  };
  const removeCart = (itemId) => {
    setCartProducts((prev) => ({
      ...prev,
      [itemId]: prev[itemId] - cartProducts[itemId],
    }));
  };
  const contextValue = {
    cartProducts,
    selectedProducts,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    addToMultiCart,
    getTotalCartAmount,
    getTotalCart,
    removeCart,
  };
  console.log(cartProducts);

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}
