// import React from "react";
// import { Link } from "react-router-dom";
// import { FaEye, FaShoppingCart } from "react-icons/fa";

// const ProductCard = ({ item }) => {
//   const addToCart = () => {
//     let cart = JSON.parse(localStorage.getItem("cart")) || [];
//     const existingItem = cart.find((cartItem) => cartItem.id === item.id);

//     if (existingItem) {
//       existingItem.quantity += 1;
//     } else {
//       cart.push({ ...item, quantity: 1 });
//     }

//     localStorage.setItem("cart", JSON.stringify(cart));
//     alert(`${item.name} added to cart!`);
//   };

//   return (
//     <div className="group relative bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 max-w-sm">
//       {/* Product Image Container */}
//       <div className="relative overflow-hidden">
//         <img
//           src={item.image}
//           alt={item.name}
//           className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
//         />
//         {/* Quick Add Overlay - appears on hover */}
//         <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100">
//           <button
//             onClick={addToCart}
//             className="bg-teal-600 text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-teal-700 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
//           >
//             <FaShoppingCart />
//             <span>Quick Add</span>
//           </button>
//         </div>
//       </div>

//       {/* Product Details */}
//       <div className="p-4">
//         {/* Product Name */}
//         <h2 className="text-lg font-semibold text-gray-900 line-clamp-1 hover:text-teal-600 transition-colors duration-200">
//           {item.name}
//         </h2>

//         {/* Price */}
//         <p className="text-xl font-bold text-teal-600 mt-2">
//           ₹{item.price_inr.toFixed(2)}
//         </p>

//         {/* Action Buttons */}
//         <div className="mt-4 flex space-x-3">
//           <button
//             onClick={addToCart}
//             className="flex-1 bg-teal-600 text-white py-2 rounded-lg flex items-center justify-center space-x-2 hover:bg-teal-700 transition-colors duration-200"
//           >
//             <FaShoppingCart />
//             <span>Add to Cart</span>
//           </button>
//           <Link
//             to={`/product/${item.id}`}
//             className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-200 hover:text-teal-600 transition-all duration-200"
//           >
//             <FaEye />
//             <span>View</span>
//           </Link>
//         </div>
//       </div>

//       {/* Hover Badge - Optional */}
//       <div className="absolute top-3 right-3 bg-teal-100 text-teal-700 text-xs font-medium px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//         In Stock
//       </div>
//     </div>
//   );
// };

// export default ProductCard;
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

  // Ensure price_inr is a number before calling toFixed
  const price = Number(item.price_inr || 0).toFixed(2);

  return (
    <div className="group relative bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 max-w-sm">
      <div className="relative overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100">
          <button
            onClick={addToCart}
            className="bg-teal-600 text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-teal-700 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
          >
            <FaShoppingCart />
            <span>Quick Add</span>
          </button>
        </div>
      </div>

      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-900 line-clamp-1 hover:text-teal-600 transition-colors duration-200">
          {item.name}
        </h2>
        <p className="text-xl font-bold text-teal-600 mt-2">₹{price}</p>
        <div className="mt-4 flex space-x-3">
          <button
            onClick={addToCart}
            className="flex-1 bg-teal-600 text-white py-2 rounded-lg flex items-center justify-center space-x-2 hover:bg-teal-700 transition-colors duration-200"
          >
            <FaShoppingCart />
            <span>Add to Cart</span>
          </button>
          <Link
            to={`/product/${item.id}`}
            className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-200 hover:text-teal-600 transition-all duration-200"
          >
            <FaEye />
            <span>View</span>
          </Link>
        </div>
      </div>
      <div className="absolute top-3 right-3 bg-teal-100 text-teal-700 text-xs font-medium px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        In Stock
      </div>
    </div>
  );
};

export default ProductCard;