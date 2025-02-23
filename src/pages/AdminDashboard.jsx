import React, { useState, useEffect } from "react";
import { FaCheckCircle, FaTimesCircle, FaTrash, FaEdit, FaShoppingCart } from "react-icons/fa";

const AdminDashboard = () => {
  const [orders, setOrders] = useState([]);
  const [editOrder, setEditOrder] = useState(null);
  const [updatedDetails, setUpdatedDetails] = useState({});

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders);
  }, []);

  const handleOrderStatus = (orderId, newStatus) => {
    const updatedOrders = orders.map((order) =>
      order.id === orderId ? { ...order, status: newStatus } : order
    );
    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  };

  const handleDeleteOrder = (orderId) => {
    const updatedOrders = orders.filter((order) => order.id !== orderId);
    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  };

  const handleEditOrder = (order) => {
    setEditOrder(order);
    setUpdatedDetails({ ...order.userDetails, totalAmount: order.totalAmount });
  };

  const handleSaveEdit = () => {
    const updatedOrders = orders.map((order) =>
      order.id === editOrder.id
        ? { ...order, userDetails: updatedDetails, totalAmount: updatedDetails.totalAmount }
        : order
    );
    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
    setEditOrder(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex flex-col items-center py-8 px-4">
      {/* Header */}
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8 flex items-center tracking-tight">
        <FaShoppingCart className="mr-3 text-teal-600" /> Admin Dashboard - Orders
      </h1>

      {/* Orders Container */}
      <div className="w-full max-w-5xl bg-white rounded-xl shadow-lg p-6">
        {orders.length === 0 ? (
          <p className="text-gray-500 text-center text-lg font-medium">
            No orders available.
          </p>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <div
                key={order.id}
                className="bg-gray-50 p-6 rounded-lg shadow-md border-l-4 border-teal-500 transition-all duration-300 hover:shadow-lg"
              >
                <h2 className="text-xl font-semibold text-gray-800">
                  Order ID: {order.id}
                </h2>
                <p className="text-gray-600 mt-1">
                  Total Amount: ₹{(order.totalAmount ?? 0).toFixed(2)}
                </p>
                <p className="text-gray-600">
                  Payment Method: {order.paymentMethod}
                </p>
                <p className="text-gray-600">
                  Status:{" "}
                  <span
                    className={`font-semibold ${
                      order.status === "Delivered"
                        ? "text-green-600"
                        : order.status === "Cancelled"
                        ? "text-red-600"
                        : "text-yellow-600"
                    }`}
                  >
                    {order.status}
                  </span>
                </p>

                {/* Items Ordered */}
                <h3 className="text-md font-semibold text-gray-800 mt-4">
                  Items Ordered:
                </h3>
                <ul className="list-disc ml-6 text-gray-600 mt-2">
                  {order.items.map((item, index) => (
                    <li key={index}>
                      {item.name} - ₹{item.price} (x{item.quantity})
                    </li>
                  ))}
                </ul>

                {/* User Details */}
                {order.userDetails && (
                  <div className="mt-4 text-gray-600">
                    <p>
                      <strong>Name:</strong> {order.userDetails.name}
                    </p>
                    <p>
                      <strong>Address:</strong> {order.userDetails.address}
                    </p>
                    <p>
                      <strong>Phone:</strong> {order.userDetails.phone}
                    </p>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 mt-6">
                  <button
                    onClick={() => handleOrderStatus(order.id, "Delivered")}
                    className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full flex items-center shadow-md hover:from-green-600 hover:to-green-700 transform hover:scale-105 transition-all duration-300"
                  >
                    <FaCheckCircle className="mr-2" /> Delivered
                  </button>
                  <button
                    onClick={() => handleOrderStatus(order.id, "Cancelled")}
                    className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-full flex items-center shadow-md hover:from-red-600 hover:to-red-700 transform hover:scale-105 transition-all duration-300"
                  >
                    <FaTimesCircle className="mr-2" /> Cancel
                  </button>
                  <button
                    onClick={() => handleEditOrder(order)}
                    className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full flex items-center shadow-md hover:from-blue-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300"
                  >
                    <FaEdit className="mr-2" /> Edit
                  </button>
                  <button
                    onClick={() => handleDeleteOrder(order.id)}
                    className="bg-gradient-to-r from-gray-500 to-gray-600 text-white px-4 py-2 rounded-full flex items-center shadow-md hover:from-gray-600 hover:to-gray-700 transform hover:scale-105 transition-all duration-300"
                  >
                    <FaTrash className="mr-2" /> Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Edit Order Modal */}
      {editOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center p-4 z-50">
          <div className="bg-white p-8 rounded-xl shadow-2xl max-w-lg w-full transform transition-all duration-300 scale-100 animate-fadeIn">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Edit Order - ID: {editOrder.id}
            </h2>
            <div className="space-y-4">
              <label className="block text-gray-700 font-medium">
                Name:
                <input
                  type="text"
                  value={updatedDetails.name || ""}
                  onChange={(e) =>
                    setUpdatedDetails({ ...updatedDetails, name: e.target.value })
                  }
                  className="mt-1 w-full p-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </label>
              <label className="block text-gray-700 font-medium">
                Address:
                <input
                  type="text"
                  value={updatedDetails.address || ""}
                  onChange={(e) =>
                    setUpdatedDetails({ ...updatedDetails, address: e.target.value })
                  }
                  className="mt-1 w-full p-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </label>
              <label className="block text-gray-700 font-medium">
                Phone:
                <input
                  type="text"
                  value={updatedDetails.phone || ""}
                  onChange={(e) =>
                    setUpdatedDetails({ ...updatedDetails, phone: e.target.value })
                  }
                  className="mt-1 w-full p-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </label>
              <label className="block text-gray-700 font-medium">
                Total Amount:
                <input
                  type="number"
                  value={updatedDetails.totalAmount || 0}
                  onChange={(e) =>
                    setUpdatedDetails({
                      ...updatedDetails,
                      totalAmount: parseFloat(e.target.value) || 0,
                    })
                  }
                  className="mt-1 w-full p-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </label>
            </div>
            <div className="flex justify-end gap-4 mt-6">
              <button
                onClick={handleSaveEdit}
                className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-6 py-2 rounded-full shadow-md hover:from-teal-600 hover:to-cyan-700 transition-all duration-300"
              >
                Save
              </button>
              <button
                onClick={() => setEditOrder(null)}
                className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-2 rounded-full shadow-md hover:from-red-600 hover:to-red-700 transition-all duration-300"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;