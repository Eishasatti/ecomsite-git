import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const CartModal = ({ isOpen, onClose }) => {
  const cartItems = useSelector((state) => state.handlecart);
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch({ type: 'ADDITEM', payload: item });
  };

  const handleRemoveItem = (item) => {
    dispatch({ type: 'DELITEM', payload: item });
  };

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.qty, 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50" onClick={onClose} />
      <div className="bg-white p-4 rounded shadow-lg z-10">
        <h1>Your Cart</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            <ul className="flex flex-col space-y-4">
              {cartItems.map((item) => (
                <li key={item.id} className="flex items-center border p-4">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover mr-4" />
                  <div className="flex-1">
                    <h2 className="text-xl">{item.name}</h2>
                    <p>Price: ${item.price.toFixed(2)}</p>
                    <p>Quantity: {item.qty}</p>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      className="bg-blue-500 text-white px-4 py-2"
                      onClick={() => handleRemoveItem(item)}
                    >
                      Remove 1
                    </button>
                    <button
                      className="bg-green-500 text-white px-4 py-2"
                      onClick={() => handleAddItem(item)}
                    >
                      Add 1
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <h2 className="mt-4 text-xl">Total Price: ${totalPrice.toFixed(2)}</h2>
          </div>
        )}
        <button className="mt-4 bg-red-500 text-white px-4 py-2" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default CartModal;
