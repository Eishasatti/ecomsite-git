import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addCart, delCart } from '../redux/actions'; // Make sure this path is correct

const CartModal = ({ isOpen, onClose }) => {
  const cartItems = useSelector((state) => state.handlecart.items); // Select cart items from Redux state
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handle adding an item to the cart
  const handleAddItem = (item) => {
    dispatch(addCart(item));
  };

  // Handle removing an item from the cart
  const handleRemoveItem = (item) => {
    dispatch(delCart(item));
  };

  // Handle checkout process
  const handleCheckout = () => {
    onClose(); // Close the modal
    setTimeout(() => {
      navigate('/checkout'); // Navigate to checkout after closing the modal
    }, 100); // Small delay to ensure the modal closes before navigation
  };

  // Calculate total price with error handling
  const totalPrice = cartItems.reduce((total, item) => {
    const itemTotal = (item.price || 0) * (item.qty || 0); // Fallback to 0 if item.price or item.qty is undefined
    return total + itemTotal;
  }, 0);

  // If modal is not open, return null
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
                      className="bg-blue-500 btn btn-primary text-white px-4 m-2 py-2"
                      onClick={() => handleRemoveItem(item)}
                    >
                      -
                    </button>
                    <button
                      className="bg-green-500 btn btn-secondary text-white m-2 px-4 py-2"
                      onClick={() => handleAddItem(item)}
                    >
                      +
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <h2 className="mt-4 text-xl">Total Price: ${totalPrice.toFixed(2)}</h2>
          </div>
        )}
        <button
          className={`mt-4 rounded-md text-white px-4 py-2 ${cartItems.length === 0 ? 'bg-gray-500 cursor-not-allowed' : 'bg-red-500'}`}
          onClick={handleCheckout}
          disabled={cartItems.length === 0}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartModal;
