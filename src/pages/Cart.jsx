


import React, { useState, useEffect } from "react";
import { FaBars, FaPlus, FaMinus, FaTrash, FaShoppingCart, FaHome, FaUser, FaBox, FaCog, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const updateCart = (updatedCart) => {
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    const totalItems = updatedCart.reduce((total, item) => total + item.quantity, 0);
    localStorage.setItem("cartCount", totalItems);
  };

  const increaseQuantity = (id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    updateCart(updatedCart);
  };

  const decreaseQuantity = (id) => {
    const updatedCart = cartItems
      .map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0);
    updateCart(updatedCart);
  };

  const removeItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    updateCart(updatedCart);
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price_inr * item.quantity,
    0
  );
  const discount = subtotal * 0.1;
  const finalTotal = subtotal - discount;

  const handleOrderConfirm = () => {
    localStorage.setItem("totalPrice", finalTotal.toFixed(2));
    navigate("/payment");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div
        className={`w-64 bg-white shadow-lg fixed h-full flex flex-col justify-between transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-64"
        } transition-transform md:translate-x-0`}
      >
        <div>
          <div className="p-6 border-b flex justify-between items-center">
            <h2 className="text-xl font-bold text-gray-900">My Store</h2>
            <button className="md:hidden" onClick={() => setIsSidebarOpen(false)}>
              ✖
            </button>
          </div>
          <nav className="mt-6">
            <a  className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100">
              <FaHome className="mr-3" /> Home
            </a>
            <a  className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100">
              <FaUser className="mr-3" /> Profile
            </a>
            <a  className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100">
              <FaBox className="mr-3" /> Orders
            </a>
            <a className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100">
              <FaCog className="mr-3" /> Settings
            </a>
          </nav>
        </div>
        <div className="p-6 border-t">
          <a className="flex items-center text-gray-700 hover:text-red-600">
            <FaSignOutAlt className="mr-3" /> Logout
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 md:ml-64">
        <div className="py-8 px-4">
          <button className="md:hidden p-4" onClick={() => setIsSidebarOpen(true)}>
            <FaBars />
          </button>

          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl font-bold text-gray-900 flex items-center">
                <FaShoppingCart className="mr-3 text-teal-600" /> Shopping Cart
              </h1>
              <span className="text-sm text-gray-600">
                {cartItems.length} {cartItems.length === 1 ? "item" : "items"}
              </span>
            </div>

            {cartItems.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-lg shadow-sm">
                <FaShoppingCart className="mx-auto text-5xl text-gray-400 mb-4" />
                <p className="text-xl text-gray-600">Your cart is empty</p>
                <button
                  onClick={() => navigate("/")}
                  className="mt-4 px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="bg-white rounded-xl shadow-sm p-4 flex items-center justify-between hover:shadow-md transition-shadow">
                      <div className="flex items-center space-x-4">
                        <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                        <div>
                          <h2 className="text-lg font-semibold text-gray-900">{item.name}</h2>
                          <p className="text-sm text-gray-600">{item.material} | {item.category} - {item.subcategory}</p>
                          <p className="text-lg font-medium text-teal-600">₹{(item.price_inr * item.quantity).toFixed(2)}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <button
                          onClick={() => decreaseQuantity(item.id)}
                          className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200"
                        >
                          <FaMinus />
                        </button>
                        <span className="text-lg font-medium">{item.quantity}</span>
                        <button
                          onClick={() => increaseQuantity(item.id)}
                          className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200"
                        >
                          <FaPlus />
                        </button>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-2 bg-red-100 rounded-lg hover:bg-red-200 text-red-600"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Order Summary */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-medium">₹{subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Discount (10%)</span>
                      <span className="font-medium">-₹{discount.toFixed(2)}</span>
                    </div>
                    <div className="border-t pt-4">
                      <div className="flex justify-between">
                        <span className="text-lg font-bold text-gray-900">Total</span>
                        <span className="text-lg font-bold text-teal-600">₹{finalTotal.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={handleOrderConfirm}
                    className="mt-6 w-full px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
                  >
                    Confirm Order
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;