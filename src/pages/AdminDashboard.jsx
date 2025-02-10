import React, { useState, useEffect } from "react";
import { FaCheckCircle, FaTimesCircle, FaTrash, FaEdit, FaShoppingCart } from "react-icons/fa";

const AdminDashboard = () => {
    const [orders, setOrders] = useState([]);
    const [editOrder, setEditOrder] = useState(null); // Track order being edited
    const [updatedDetails, setUpdatedDetails] = useState({});

    useEffect(() => {
        const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
        setOrders(storedOrders);
    }, []);

    const handleOrderStatus = (orderId, newStatus) => {
        const updatedOrders = orders.map(order =>
            order.id === orderId ? { ...order, status: newStatus } : order
        );
        setOrders(updatedOrders);
        localStorage.setItem("orders", JSON.stringify(updatedOrders));
    };

    const handleDeleteOrder = (orderId) => {
        const updatedOrders = orders.filter(order => order.id !== orderId);
        setOrders(updatedOrders);
        localStorage.setItem("orders", JSON.stringify(updatedOrders));
    };

    const handleEditOrder = (order) => {
        setEditOrder(order);
        setUpdatedDetails({ ...order.userDetails, totalAmount: order.totalAmount });
    };

    const handleSaveEdit = () => {
        const updatedOrders = orders.map(order =>
            order.id === editOrder.id ? { ...order, userDetails: updatedDetails, totalAmount: updatedDetails.totalAmount } : order
        );
        setOrders(updatedOrders);
        localStorage.setItem("orders", JSON.stringify(updatedOrders));
        setEditOrder(null);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <FaShoppingCart className="mr-2" /> Admin Dashboard - Orders
            </h1>
            <div className="bg-white shadow-lg rounded-lg w-full max-w-4xl p-6">
                {orders.length === 0 ? (
                    <p className="text-gray-600 text-center">No orders available.</p>
                ) : (
                    <div className="space-y-4">
                        {orders.map((order) => (
                            <div key={order.id} className="border p-4 rounded-lg shadow-md bg-gray-50">
                                <h2 className="text-lg font-semibold text-gray-700">Order ID: {order.id}</h2>
                                <p className="text-gray-600">Total Amount: ₹{(order.totalAmount ?? 0).toFixed(2)}</p>
                                <p className="text-gray-600">Payment Method: {order.paymentMethod}</p>
                                <p className="text-gray-600">Status: <span className="font-semibold">{order.status}</span></p>

                                <h3 className="text-md font-semibold mt-2">Items Ordered:</h3>
                                <ul className="list-disc ml-6 text-gray-600">
                                    {order.items.map((item, index) => (
                                        <li key={index}>{item.name} - ₹{item.price} (x{item.quantity})</li>
                                    ))}
                                </ul>

                                {order.userDetails && (
                                    <div className="mt-2 text-gray-600">
                                        <p><strong>Name:</strong> {order.userDetails.name}</p>
                                        <p><strong>Address:</strong> {order.userDetails.address}</p>
                                        <p><strong>Phone:</strong> {order.userDetails.phone}</p>
                                    </div>
                                )}

                                <div className="flex space-x-3 mt-4">
                                    <button
                                        onClick={() => handleOrderStatus(order.id, "Delivered")}
                                        className="bg-green-500 text-white px-3 py-2 rounded-lg flex items-center shadow-md hover:bg-green-600 transition"
                                    >
                                        <FaCheckCircle className="mr-1" /> Delivered
                                    </button>
                                    <button
                                        onClick={() => handleOrderStatus(order.id, "Cancelled")}
                                        className="bg-red-500 text-white px-3 py-2 rounded-lg flex items-center shadow-md hover:bg-red-600 transition"
                                    >
                                        <FaTimesCircle className="mr-1" /> Cancel
                                    </button>
                                    <button
                                        onClick={() => handleEditOrder(order)}
                                        className="bg-blue-500 text-white px-3 py-2 rounded-lg flex items-center shadow-md hover:bg-blue-600 transition"
                                    >
                                        <FaEdit className="mr-1" /> Edit
                                    </button>
                                    <button
                                        onClick={() => handleDeleteOrder(order.id)}
                                        className="bg-gray-500 text-white px-3 py-2 rounded-lg flex items-center shadow-md hover:bg-gray-600 transition"
                                    >
                                        <FaTrash className="mr-1" /> Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Edit Order Modal */}
            {editOrder && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">Edit Order</h2>
                        <label className="block mb-2">Name:</label>
                        <input
                            type="text"
                            value={updatedDetails.name || ""}
                            onChange={(e) => setUpdatedDetails({ ...updatedDetails, name: e.target.value })}
                            className="w-full p-2 border border-gray-300 rounded-lg mb-2"
                        />
                        <label className="block mb-2">Address:</label>
                        <input
                            type="text"
                            value={updatedDetails.address || ""}
                            onChange={(e) => setUpdatedDetails({ ...updatedDetails, address: e.target.value })}
                            className="w-full p-2 border border-gray-300 rounded-lg mb-2"
                        />
                        <label className="block mb-2">Phone:</label>
                        <input
                            type="text"
                            value={updatedDetails.phone || ""}
                            onChange={(e) => setUpdatedDetails({ ...updatedDetails, phone: e.target.value })}
                            className="w-full p-2 border border-gray-300 rounded-lg mb-2"
                        />
                        <label className="block mb-2">Total Amount:</label>
                        <input
                            type="number"
                            value={updatedDetails.totalAmount || 0}
                            onChange={(e) => setUpdatedDetails({ ...updatedDetails, totalAmount: parseFloat(e.target.value) })}
                            className="w-full p-2 border border-gray-300 rounded-lg mb-2"
                        />
                        <div className="flex justify-end space-x-3 mt-4">
                            <button onClick={handleSaveEdit} className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition">
                                Save
                            </button>
                            <button onClick={() => setEditOrder(null)} className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition">
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

