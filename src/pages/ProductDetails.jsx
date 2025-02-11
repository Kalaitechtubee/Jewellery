import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaStar } from "react-icons/fa";
import products from "../components/products";

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [reviews, setReviews] = useState([
        { name: "Sophia", rating: 5, text: "Absolutely stunning piece!" },
        { name: "Arjun", rating: 4, text: "Looks even better in real life!" },
        { name: "Mia", rating: 5, text: "Elegant and luxurious!" }
    ]);
    const [newReview, setNewReview] = useState("");
    const [newReviewer, setNewReviewer] = useState("");
    const [newRating, setNewRating] = useState(5);
    const [showAllReviews, setShowAllReviews] = useState(false);

    const product = products.find((p) => p.id.toString() === id);
    if (!product) return <p className="text-center text-red-600">Product not found</p>;

    const addToCart = () => {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push({ ...product, quantity: 1 });
        localStorage.setItem("cart", JSON.stringify(cart));
        navigate("/cart");
    };

    const addReview = () => {
        if (newReview.trim() && newReviewer.trim()) {
            setReviews([...reviews, { name: newReviewer, rating: newRating, text: newReview }]);
            setNewReview("");
            setNewReviewer("");
            setNewRating(5);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-600 to-purple-700 p-6 flex flex-col items-center font-sans">
            <div className="w-full max-w-5xl bg-white p-8 rounded-xl shadow-lg">
                <h1 className="text-4xl font-bold text-gray-900 text-center mb-6">{product.name}</h1>
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <img src={product.image} alt={product.name} className="w-full md:w-1/2 h-96 object-cover rounded-xl shadow-md" />
                    <div className="flex-1 text-center md:text-left">
                        <p className="text-2xl font-bold text-gray-800">₹{product.price_inr} / ${product.price_usd}</p>
                        <p className="text-lg text-gray-600 mt-2">Category: {product.category} - {product.subcategory}</p>
                        <p className="text-lg text-gray-600">Material: {product.material}</p>
                        <p className="text-md text-gray-700 mt-4">{product.details}</p>
                        <button 
                            onClick={addToCart} 
                            className="bg-blue-600 text-white text-lg font-semibold px-6 py-3 rounded-full hover:bg-blue-700 transition mt-6 shadow-md flex items-center justify-center w-full md:w-auto"
                        >
                            <FaShoppingCart className="mr-2" /> Add to Cart
                        </button>
                    </div>
                </div>

                {/* Reviews Section */}
                <h3 className="text-3xl font-bold text-gray-900 mt-10 text-center">Customer Reviews</h3>
                <div className="bg-gray-100 p-6 rounded-xl mt-6">
                    <input type="text" className="border border-gray-300 bg-white text-gray-900 p-2 w-full mb-4 rounded-lg placeholder-gray-500" placeholder="Your Name" value={newReviewer} onChange={(e) => setNewReviewer(e.target.value)} />
                    <div className="flex items-center mb-4">
                        <span className="text-gray-700 mr-2">Rating:</span>
                        {[...Array(5)].map((_, i) => (
                            <FaStar
                                key={i}
                                className={`cursor-pointer ${i < newRating ? "text-yellow-400" : "text-gray-300"}`}
                                onClick={() => setNewRating(i + 1)}
                            />
                        ))}
                    </div>
                    <input type="text" className="border border-gray-300 bg-white text-gray-900 p-2 w-full mb-4 rounded-lg placeholder-gray-500" placeholder="Write a review..." value={newReview} onChange={(e) => setNewReview(e.target.value)} />
                    <button onClick={addReview} className="bg-green-600 text-white p-2 rounded-lg w-full hover:bg-green-700 transition">Submit Review</button>
                </div>

                <ul className="mt-6 space-y-4">
                    {(showAllReviews ? reviews : reviews.slice(0, 3)).map((review, index) => (
                        <li key={index} className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-600">
                            <span className="font-bold text-gray-900">{review.name} - {"⭐".repeat(review.rating)}</span>
                            <p className="text-gray-700 mt-1">{review.text}</p>
                        </li>
                    ))}
                </ul>
                {!showAllReviews && reviews.length > 3 && (
                    <button onClick={() => setShowAllReviews(true)} className="text-blue-600 hover:underline mt-4">See More Reviews</button>
                )}
            </div>
        </div>
    );
};

export default ProductDetails;