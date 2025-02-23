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
    { name: "Mia", rating: 5, text: "Elegant and luxurious!" },
  ]);
  const [newReview, setNewReview] = useState("");
  const [newReviewer, setNewReviewer] = useState("");
  const [newRating, setNewRating] = useState(5);
  const [showAllReviews, setShowAllReviews] = useState(false);

  const product = products.find((p) => p.id.toString() === id);
  if (!product)
    return (
      <p className="text-center text-red-500 text-lg font-medium mt-10">
        Product not found
      </p>
    );

  const addToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ ...product, quantity: 1 });
    localStorage.setItem("cart", JSON.stringify(cart));
    navigate("/cart");
  };

  const addReview = () => {
    if (newReview.trim() && newReviewer.trim()) {
      setReviews([
        ...reviews,
        { name: newReviewer, rating: newRating, text: newReview },
      ]);
      setNewReview("");
      setNewReviewer("");
      setNewRating(5);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex flex-col items-center py-8 px-4 font-sans">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg p-6 md:p-8 transition-all duration-300">
        {/* Product Header */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-6 tracking-tight">
          {product.name}
        </h1>

        {/* Product Info */}
        <div className="flex flex-col md:flex-row gap-8">
          <img
            src={product.image}
            alt={product.name}
            className="w-full md:w-1/2 h-80 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          />
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <p className="text-2xl font-semibold text-gray-800">
                ₹{product.price_inr} / ${product.price_usd}
              </p>
              <p className="text-gray-600 mt-2 font-medium">
                {product.category} - {product.subcategory}
              </p>
              <p className="text-gray-600">Material: {product.material}</p>
              <p className="text-gray-700 mt-3 text-sm leading-relaxed">
                {product.details}
              </p>
            </div>
            <button
              onClick={addToCart}
              className="mt-6 px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-semibold rounded-full shadow-lg hover:from-teal-600 hover:to-cyan-700 transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
            >
              <FaShoppingCart className="mr-2" /> Add to Cart
            </button>
          </div>
        </div>

        {/* Reviews Section */}
        <h3 className="text-2xl font-bold text-gray-900 mt-10 text-center">
          Customer Reviews
        </h3>
        <div className="bg-gray-100 p-6 rounded-lg mt-6 shadow-sm">
          <input
            type="text"
            className="w-full p-3 bg-white border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 mb-4"
            placeholder="Your Name"
            value={newReviewer}
            onChange={(e) => setNewReviewer(e.target.value)}
          />
          <div className="flex items-center mb-4">
            <span className="text-gray-700 mr-3 font-medium">Rating:</span>
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={`cursor-pointer text-lg ${
                  i < newRating ? "text-yellow-400" : "text-gray-300"
                }`}
                onClick={() => setNewRating(i + 1)}
              />
            ))}
          </div>
          <textarea
            className="w-full p-3 bg-white border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 mb-4 resize-none"
            placeholder="Write a review..."
            rows="3"
            value={newReview}
            onChange={(e) => setNewReview(e.target.value)}
          />
          <button
            onClick={addReview}
            className="w-full px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-semibold rounded-full shadow-md hover:from-teal-600 hover:to-cyan-700 transition-all duration-300"
          >
            Submit Review
          </button>
        </div>

        {/* Review List */}
        <ul className="mt-6 space-y-4">
          {(showAllReviews ? reviews : reviews.slice(0, 3)).map(
            (review, index) => (
              <li
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-teal-500 transform hover:scale-[1.02] transition-transform duration-200"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-gray-900">
                    {review.name}
                  </span>
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mt-2 text-sm leading-relaxed">
                  {review.text}
                </p>
              </li>
            )
          )}
        </ul>
        {!showAllReviews && reviews.length > 3 && (
          <button
            onClick={() => setShowAllReviews(true)}
            className="mt-4 text-teal-600 hover:text-teal-800 font-medium transition-colors duration-200"
          >
            See More Reviews
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;