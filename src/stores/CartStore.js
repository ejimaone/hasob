import React, { createContext, useState } from "react";

export const CartContext = createContext({
  addToCartHandler: (id) => {},
  deleteFromCartHandler: (id) => {},
  increaseQuantityHandler: (id) => {},
  deleteQuantityHandler: (id) => {},
  wishlist: [],
  setWishList: () => {},
});
const addToCartHandler = (id) => {};

function CartStore({ children }) {
  const [wishlist, setWishList] = useState([]);
  console.log(wishlist);
  return (
    <CartContext.Provider value={{ addToCartHandler, wishlist, setWishList }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartStore;
