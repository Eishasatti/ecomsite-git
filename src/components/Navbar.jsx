import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BsBag } from "react-icons/bs";
import CartModal from './CartModal'; // Import the CartModal component
import { faSignInAlt, faRegistered, faCartPlus } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartItems = useSelector((state) => state.handlecart.items); // Select cart items from Redux state
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  // Calculate total number of items in the cart
  const totalItems = cartItems.reduce((total, item) => total + item.qty, 0); // Summing up the quantities of each item

  return (
    <>
      <nav className="bg-white shadow-lg text-[18px] fixed w-full top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <NavLink to="/" className="text-2xl font-bold flex items-center space-x-2">
                <BsBag />
                <span className="px-2">Bags_World</span>
              </NavLink>
            </div>
            <div className="hidden md:flex space-x-4">
              <NavLink to="/" className="text-gray-800 hover:text-gray-600">Home</NavLink>
              <NavLink to="/products" className="text-gray-800 hover:text-gray-600">Products</NavLink>
              <NavLink to="/contact" className="text-gray-800 hover:text-gray-600">Contact</NavLink>
            </div>
            <div className="hidden md:flex space-x-4">
              {/* Uncomment to enable login and register links */}
              {/* <NavLink to="/login" className="btn btn-outline-dark flex items-center space-x-2">
                <FontAwesomeIcon icon={faSignInAlt} />
                <span>Login</span>
              </NavLink>
              <NavLink to="/register" className="btn btn-outline-dark flex items-center space-x-2">
                <FontAwesomeIcon icon={faRegistered} />
                <span>Register</span>
              </NavLink> */}
              <button onClick={toggleCart} className="btn btn-outline-dark flex items-center space-x-2">
                <FontAwesomeIcon icon={faCartPlus} />
                <span>Cart ({totalItems})</span> {/* Update total items here */}
              </button>
            </div>
            <div className="md:hidden flex items-center">
              <button className="outline-none mobile-menu-button">
                <svg
                  className="w-6 h-6 text-gray-500"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="mobile-menu hidden md:hidden">
          <ul className="">
            <li><NavLink to="/" className="block text-sm px-2 py-4 text-gray-800 hover:bg-gray-200 transition duration-300">Home</NavLink></li>
            <li><NavLink to="/products" className="block text-sm px-2 py-4 text-gray-800 hover:bg-gray-200 transition duration-300">Products</NavLink></li>
            <li><NavLink to="/contact" className="block text-sm px-2 py-4 text-gray-800 hover:bg-gray-200 transition duration-300">Contact</NavLink></li>
            <li><NavLink to="/login" className="block text-sm px-2 py-4 text-gray-800 hover:bg-gray-200 transition duration-300">Login</NavLink></li>
            <li><NavLink to="/register" className="block text-sm px-2 py-4 text-gray-800 hover:bg-gray-200 transition duration-300">Register</NavLink></li>
          </ul>
        </div>
      </nav>
      <CartModal isOpen={isCartOpen} onClose={toggleCart} /> {/* Render CartModal here */}
    </>
  );
};

export default Navbar;
