import React from "react";
import { Link } from "react-router-dom";
import { FaEye, FaShoppingCart } from "react-icons/fa";

const ProductCard = ({ item }) => {
    const addToCart = () => {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        const existingItem = cart.find((cartItem) => cartItem.id === item.id);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...item, quantity: 1 });
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        alert(`${item.name} added to cart!`);
    };

    return (
        <div className="bg-gradient-to-br from-blue-900 to-blue-600 p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 font-[Poppins]">
            <img
                src={item.image}
                alt={item.name}
                className="w-full h-56 object-cover rounded-xl mb-4 shadow-lg"
            />
            <h2 className="text-2xl font-bold text-yellow-300 mb-2">{item.name}</h2>
           
            <p className="text-xl font-bold text-black bg-yellow-300 px-4 py-1 inline-block rounded-lg shadow">
                ₹{item.price_inr}
            </p>

            <div className="mt-6 flex justify-between items-center">
                <button 
                    onClick={addToCart} 
                    className="bg-yellow-500 text-black px-5 py-2 rounded-full flex items-center space-x-2 hover:bg-yellow-400 transition duration-300 shadow-md"
                >
                    <FaShoppingCart />
                    <span>Add to Cart</span>
                </button>

                <Link to={`/product/${item.id}`} className="text-white flex items-center space-x-2 hover:text-yellow-300 transition duration-300 bg-gray-800 px-5 py-2 rounded-full shadow-md">
                    <FaEye />
                    <span>Preview</span>
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;
