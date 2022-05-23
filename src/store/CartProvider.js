import React, { useMemo, useReducer } from 'react';
import PropTypes from 'prop-types';
import CartContext from './cart-context';

const defaultCartState = {
  items: [],
  totalPrice: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    const { items, totalPrice } = state;
    const { item } = action;
    const updatedTotalPrice = totalPrice + item.price * item.amount;
    const existingItemIx = items.findIndex(
      (foundItem) =>
        foundItem.id === item.id && foundItem.grindType === item.grindType
    );
    const existingItem = items[existingItemIx];
    let updatedItems;

    if (existingItemIx !== -1) {
      const updatedItem = {
        ...existingItem,
        amount: +existingItem.amount + item.amount,
        itemTotal: existingItem.itemTotal + item.amount * item.price,
      };
      updatedItems = [...items];
      updatedItems[existingItemIx] = updatedItem;
    } else {
      updatedItems = items.concat({
        ...item,
        itemTotal: item.price * item.amount,
      });
    }

    return {
      ...state,
      items: updatedItems,
      totalPrice: updatedTotalPrice,
    };
  }
  if (action.type === 'SUBTRACT_ONE_ITEM') {
    const { items, totalPrice } = state;
    const { id, grindType } = action.payload;
    const existingItemIx = items.findIndex(
      (foundItem) => foundItem.id === id && foundItem.grindType === grindType
    );
    const existingItem = items[existingItemIx];
    const updatedTotalPrice = Math.abs(totalPrice - existingItem.price);
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = items.filter((item) => {
        return !(
          item.id === existingItem.id &&
          item.grindType === existingItem.grindType
        );
      });
    } else {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount - 1,
        itemTotal: existingItem.itemTotal - existingItem.price,
      };
      updatedItems = [...items];
      updatedItems[existingItemIx] = updatedItem;
    }

    return {
      ...state,
      items: updatedItems,
      totalPrice: updatedTotalPrice,
    };
  }
  if (action.type === 'REMOVE_ITEM') {
    const { items, totalPrice } = state;
    const { id, grindType } = action.payload;
    const existingItemIx = items.findIndex(
      (foundItem) => foundItem.id === id && foundItem.grindType === grindType
    );
    const existingItem = items[existingItemIx];
    const updatedTotalPrice = Math.abs(totalPrice - existingItem.itemTotal);

    const updatedItems = items.filter((item) => {
      return !((item.id === id) * (item.grindType === grindType));
    });

    return {
      ...state,
      items: updatedItems,
      totalPrice: updatedTotalPrice,
    };
  }
  return defaultCartState;
};

function CartProvider({ children }) {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: 'ADD_ITEM', item });
  };

  const subtractOneItemFromCartHandler = (id, grindType) => {
    dispatchCartAction({
      type: 'SUBTRACT_ONE_ITEM',
      payload: { id, grindType },
    });
  };

  const removeItemFromCartHandler = (id, grindType) => {
    dispatchCartAction({ type: 'REMOVE_ITEM', payload: { id, grindType } });
  };

  const cartContext = useMemo(() => {
    return {
      items: cartState.items,
      totalPrice: cartState.totalPrice,
      addItem: addItemToCartHandler,
      subtractOneItem: subtractOneItemFromCartHandler,
      removeItem: removeItemFromCartHandler,
    };
  }, [cartState]);

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartProvider;
