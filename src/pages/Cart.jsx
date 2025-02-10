// import React, { useState, useEffect } from "react";
// import { FaPlus, FaMinus, FaTrash, FaShoppingCart } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// const Cart = () => {
//     const [cartItems, setCartItems] = useState([]);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
//         setCartItems(storedCart);
//     }, []);

//     const updateCart = (updatedCart) => {
//         setCartItems(updatedCart);
//         localStorage.setItem("cart", JSON.stringify(updatedCart));
//         const totalItems = updatedCart.reduce((total, item) => total + item.quantity, 0);
//         localStorage.setItem("cartCount", totalItems);
//     };

//     const increaseQuantity = (id) => {
//         const updatedCart = cartItems.map(item =>
//             item.id === id ? { ...item, quantity: item.quantity + 1 } : item
//         );
//         updateCart(updatedCart);
//     };

//     const decreaseQuantity = (id) => {
//         const updatedCart = cartItems.map(item =>
//             item.id === id ? { ...item, quantity: item.quantity - 1 } : item
//         ).filter(item => item.quantity > 0);
//         updateCart(updatedCart);
//     };

//     const removeItem = (id) => {
//         const updatedCart = cartItems.filter(item => item.id !== id);
//         updateCart(updatedCart);
//     };

//     const subtotal = cartItems.reduce((total, item) => total + item.price_inr * item.quantity, 0);

//     const handleOrderConfirm = () => {
//         localStorage.setItem("totalPrice", subtotal.toFixed(2));
//         navigate("/payment");
//     };

//     return (
//         <div className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-700 flex flex-col items-center p-6 font-mono">
//             <h1 className="text-4xl font-bold text-yellow-300 mb-6 flex items-center">
//                 <FaShoppingCart className="mr-2" /> Your Cart
//             </h1>

//             {cartItems.length === 0 ? (
//                 <p className="text-gray-300 text-lg font-medium">🛒 Your cart is empty.</p>
//             ) : (
//                 <div className="max-w-3xl w-full bg-gray-800 p-6 rounded-lg shadow-xl">
//                     <div className="space-y-4">
//                         {cartItems.map((item) => (
//                             <div key={item.id} className="bg-gray-700 p-4 rounded-lg shadow-md flex justify-between items-center">
//                                 <div className="flex items-center space-x-4">
//                                     <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg border border-gray-500" />
//                                     <div>
//                                         <h2 className="text-lg font-semibold text-yellow-300">{item.name}</h2>
//                                         <p className="text-gray-300">Material: {item.material}</p>
//                                         <p className="text-gray-300">Category: {item.category} - {item.subcategory}</p>
//                                         <p className="text-gray-300">Price: ₹{item.price_inr}</p>
//                                         <p className="text-lg font-bold text-yellow-300">Total: ₹{item.price_inr * item.quantity}</p>
//                                     </div>
//                                 </div>
//                                 <div className="flex items-center space-x-2">
//                                     <button onClick={() => decreaseQuantity(item.id)} className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700">
//                                         <FaMinus />
//                                     </button>
//                                     <span className="text-lg font-semibold text-yellow-300">{item.quantity}</span>
//                                     <button onClick={() => increaseQuantity(item.id)} className="bg-green-600 text-white p-2 rounded-full hover:bg-green-700">
//                                         <FaPlus />
//                                     </button>
//                                 </div>
//                                 <button onClick={() => removeItem(item.id)} className="text-red-500 hover:text-red-700">
//                                     <FaTrash />
//                                 </button>
//                             </div>
//                         ))}
//                     </div>
//                     <div className="sticky bottom-0 bg-gray-900 p-4 mt-6 rounded-lg shadow-lg">
//                         <div className="flex justify-between items-center text-lg font-semibold text-yellow-300">
//                             <span>Subtotal:</span>
//                             <span>₹{subtotal.toFixed(2)}</span>
//                         </div>
//                         <button onClick={handleOrderConfirm} className="mt-4 bg-yellow-500 text-black p-3 rounded-lg w-full text-lg font-semibold hover:bg-yellow-600">
//                             Confirm Order & Pay
//                         </button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Cart;
import React, { useState, useEffect } from "react";
import { FaPlus, FaMinus, FaTrash, FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
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
        const updatedCart = cartItems.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
        updateCart(updatedCart);
    };

    const decreaseQuantity = (id) => {
        const updatedCart = cartItems.map(item =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        ).filter(item => item.quantity > 0);
        updateCart(updatedCart);
    };

    const removeItem = (id) => {
        const updatedCart = cartItems.filter(item => item.id !== id);
        updateCart(updatedCart);
    };

    const subtotal = cartItems.reduce((total, item) => total + item.price_inr * item.quantity, 0);
    const discount = subtotal * 0.10;
    const finalTotal = subtotal - discount;

    const handleOrderConfirm = () => {
        localStorage.setItem("totalPrice", finalTotal.toFixed(2));
        navigate("/payment");
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-700 flex flex-col items-center p-6 font-mono">
            <h1 className="text-4xl font-bold text-yellow-300 mb-6 flex items-center">
                <FaShoppingCart className="mr-2" /> Your Cart
            </h1>

            {cartItems.length === 0 ? (
                <p className="text-gray-300 text-lg font-medium">🛒 Your cart is empty.</p>
            ) : (
                <div className="max-w-3xl w-full bg-gray-800 p-6 rounded-lg shadow-xl">
                    <div className="space-y-4">
                        {cartItems.map((item) => (
                            <div key={item.id} className="bg-gray-700 p-4 rounded-lg shadow-md flex justify-between items-center">
                                <div className="flex items-center space-x-4">
                                    <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg border border-gray-500" />
                                    <div>
                                        <h2 className="text-lg font-semibold text-yellow-300">{item.name}</h2>
                                        <p className="text-gray-300">Material: {item.material}</p>
                                        <p className="text-gray-300">Category: {item.category} - {item.subcategory}</p>
                                        <p className="text-gray-300">Price: ₹{item.price_inr}</p>
                                        <p className="text-lg font-bold text-yellow-300">Total: ₹{item.price_inr * item.quantity}</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <button onClick={() => decreaseQuantity(item.id)} className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700">
                                        <FaMinus />
                                    </button>
                                    <span className="text-lg font-semibold text-yellow-300">{item.quantity}</span>
                                    <button onClick={() => increaseQuantity(item.id)} className="bg-green-600 text-white p-2 rounded-full hover:bg-green-700">
                                        <FaPlus />
                                    </button>
                                </div>
                                <button onClick={() => removeItem(item.id)} className="text-red-500 hover:text-red-700">
                                    <FaTrash />
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="sticky bottom-0 bg-gray-900 p-4 mt-6 rounded-lg shadow-lg">
                        <div className="flex justify-between items-center text-lg font-semibold text-yellow-300">
                            <span>Subtotal:</span>
                            <span>₹{subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between items-center text-lg font-semibold text-red-400">
                            <span>Discount (10% off):</span>
                            <span>- ₹{discount.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between items-center text-lg font-semibold text-yellow-300 mt-2">
                            <span>Final Total:</span>
                            <span>₹{finalTotal.toFixed(2)}</span>
                        </div>
                        <button onClick={handleOrderConfirm} className="mt-4 bg-yellow-500 text-black p-3 rounded-lg w-full text-lg font-semibold hover:bg-yellow-600">
                            Confirm Order & Pay
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;