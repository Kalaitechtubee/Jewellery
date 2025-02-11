import React, { useState } from 'react';
import { FaGem } from 'react-icons/fa';
import ProductCard from '../components/ProductCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import products from '../components/products';

const Home = () => {
    const [category, setCategory] = useState("All");

    // Filter products based on selected category
    const filteredProducts = category === "All"
        ? products
        : products.filter(product => product.category === category);

    // Apply 10% discount and format price to 2 decimal places
    const discountedProducts = filteredProducts.map(product => ({
        ...product,
        discountedPrice: (product.price * 0.9).toFixed(2), // Ensure two decimal places
    }));

    return (
        <div className="min-h-screen flex flex-col bg-indigo-900 text-white">
            <Navbar />

            {/* Advertisement Section */}
            <div className=" p-6 sm:p-8 text-center">
                <div className="max-w-4xl mx-auto">
                    <p className="text-base sm:text-xl text-teal-200 mt-2 sm:mt-4">
                        FLAT 10% OFF ON ALL ITEMS! 🎉
                    </p>
                    <h1 className="text-lg sm:text-2xl font-bold text-white mt-2">
                    🎉 Limited time offer. Shop now! ⏰
                    </h1>
                </div>
            </div>

            {/* Category Filter */}
            <div className="flex justify-center my-4 sm:my-6 flex-wrap gap-2">
                {['All', 'Men', 'Women'].map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setCategory(cat)}
                        aria-label={`Filter by ${cat}`}
                        className={`px-4 sm:px-6 py-1 sm:py-2 rounded-full text-sm sm:text-lg font-medium transition duration-300 
                        ${category === cat 
                            ? "bg-teal-500 text-white shadow-lg" 
                            : "bg-gray-800 text-teal-400 hover:bg-teal-600 hover:text-white"}`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Products Grid */}
            <div className="container mx-auto p-4 sm:p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8">
                    {discountedProducts.map(item => (
                        <ProductCard key={item.id} item={item} />
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Home;
