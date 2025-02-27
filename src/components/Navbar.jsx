import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSignInAlt, FaUserShield, FaShoppingBag, FaBars, FaTimes, FaGem, FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const updateCartCount = () => {
      const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
      const totalItems = storedCart.reduce((total, item) => total + item.quantity, 0);
      setCartItems(totalItems);
    };

    updateCartCount();
    window.addEventListener("storage", updateCartCount);
    return () => window.removeEventListener("storage", updateCartCount);
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);
  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-white shadow-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl md:text-3xl font-bold text-gray-900 flex items-center hover:text-teal-600 transition-colors duration-200"
          onClick={closeMenu}
        >
          <FaGem className="mr-2 text-teal-500" /> Beauty Shopping
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {/* Categories Dropdown */}
          <div className="relative group">
            <button
              className="flex items-center text-gray-700 font-medium hover:text-teal-600 transition-colors duration-200"
              onClick={toggleDropdown}
            >
              Categories <FaChevronDown className="ml-2 text-sm" />
            </button>
            <div
              className={`absolute left-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 transform transition-all duration-300 ${
                isDropdownOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
              }`}
            >
              <Link
                to="all-Product"
                className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600 rounded-t-xl"
                onClick={closeMenu}
              >
                All
              </Link>
              <Link
                to="/men-products"
                className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600"
                onClick={closeMenu}
              >
                Men
              </Link>
              <Link
                to="/women-products"
                className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600"
                onClick={closeMenu}
              >
                Women
              </Link>
              <Link
                to="/handmade-products"
                className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600 rounded-b-xl"
                onClick={closeMenu}
              >
                Handmade
              </Link>
            </div>
          </div>

          {/* Other Links */}
          <Link
            to="/admin-login"
            className="bg-teal-600 text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-teal-700 transition-all duration-200 shadow-md"
            onClick={closeMenu}
          >
            <FaUserShield /> <span>Admin</span>
          </Link>
          <Link
            to="/user-login"
            className="bg-teal-600 text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-teal-700 transition-all duration-200 shadow-md"
            onClick={closeMenu}
          >
            <FaSignInAlt /> <span>Login</span>
          </Link>
          <Link
            to="/cart"
            className="relative flex items-center"
            onClick={closeMenu}
          >
            <button className="bg-gray-100 text-gray-900 px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-gray-200 transition-all duration-200 shadow-md">
              <FaShoppingBag size={20} /> <span>Cart</span>
            </button>
            {cartItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-md">
                {cartItems}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-gray-900 focus:outline-none p-2"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-gray-900 bg-opacity-95 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full w-3/4 ml-auto bg-white p-6 space-y-6 text-gray-900">
          <button
            onClick={toggleMenu}
            className="self-end text-gray-700 text-2xl focus:outline-none"
          >
            <FaTimes />
          </button>
          <Link
            to="/"
            onClick={closeMenu}
            className="text-xl font-semibold hover:text-teal-600 transition-colors duration-200"
          >
            Home
          </Link>
          <div className="space-y-4">
            <button
              onClick={toggleDropdown}
              className="flex items-center text-xl font-semibold hover:text-teal-600 transition-colors duration-200"
            >
              Categories <FaChevronDown className="ml-2" />
            </button>
            {isDropdownOpen && (
              <div className="pl-4 space-y-2">
                <Link
                  to="/all-Product"
                  onClick={closeMenu}
                  className="block text-lg hover:text-teal-600"
                >
                  All
                </Link>
                <Link
                  to="/men-products"
                  onClick={closeMenu}
                  className="block text-lg hover:text-teal-600"
                >
                  Men
                </Link>
                <Link
                  to="/women-products"
                  onClick={closeMenu}
                  className="block text-lg hover:text-teal-600"
                >
                  Women
                </Link>
                <Link
                  to="/handmade-products"
                  onClick={closeMenu}
                  className="block text-lg hover:text-teal-600"
                >
                  Handmade
                </Link>
              </div>
            )}
          </div>
          <Link
            to="/admin-login"
            onClick={closeMenu}
            className="bg-teal-600 text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-teal-700 transition-all duration-200 shadow-md w-full justify-center"
          >
            <FaUserShield /> <span>Admin</span>
          </Link>
          <Link
            to="/user-login"
            onClick={closeMenu}
            className="bg-teal-600 text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-teal-700 transition-all duration-200 shadow-md w-full justify-center"
          >
            <FaSignInAlt /> <span>Login</span>
          </Link>
          <Link
            to="/cart"
            onClick={closeMenu}
            className="relative flex items-center justify-center"
          >
            <button className="bg-gray-100 text-gray-900 px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-gray-200 transition-all duration-200 shadow-md w-full justify-center">
              <FaShoppingBag size={20} /> <span>Cart</span>
            </button>
            {cartItems > 0 && (
              <span className="absolute top-0 right-8 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-md">
                {cartItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;