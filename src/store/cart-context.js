/* Disabling eslint for the whole file because of the use of the context API */
/* eslint-disable no-unused-vars */
import React from 'react';

const CartContext = React.createContext({
  items: [],
  totalPrice: 0,
  addItem: (item) => {},
  subtractOneItem: (id, grindType) => {},
  removeItem: (id, grindType) => {},
  clearCart: () => {},
});

export default CartContext;
