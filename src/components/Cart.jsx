import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Cart Component
const Cart = () => {
  const cartItems = useSelector((state) => state.handlecart); // Get cart items from Redux state
  const dispatch = useDispatch(); // Get dispatch function to dispatch actions

  // Handler to add an item to the cart
  const handleAddItem = (item) => {
    dispatch({ type: 'ADDITEM', payload: item });
  };

  // Handler to remove an item from the cart
  const handleRemoveItem = (item) => {
    dispatch({ type: 'DELITEM', payload: item });
  };

  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <h2>{item.name}</h2> {/* Assuming each item has a name property */}
              <p>Quantity: {item.qty}</p>
              <button onClick={() => handleRemoveItem(item)}>Remove 1</button>
              <button onClick={() => handleAddItem(item)}>Add 1</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
