import React, { useState } from 'react';
import { FaGem } from 'react-icons/fa';
import ProductCard from '../components/ProductCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import products from '../components/products';

const Home = () => {
    const [category, setCategory] = useState("All");

    const filteredProducts = category === "All" 
        ? products 
        : products.filter(product => product.category === category);

    // Apply 10% discount to all items
    const discountedProducts = filteredProducts.map(product => ({
        ...product,
        discountedPrice: product.price * 0.9, // 10% discount
    }));

    return (
        <div className="min-h-screen flex flex-col bg-indigo-900 text-white">
            <Navbar />
            <div className="bg-gradient-to-r from-purple-600 via-blue-500 to-teal-400 py-24 text-white text-center shadow-lg">
                <h1 className="text-6xl font-extrabold tracking-wide font-serif">Welcome to Royal Gems</h1>
                <p className="text-xl mt-4 font-light">Exquisite Jewelry for Every Occasion</p>
            </div>

            {/* Advertisement Section */}
            <div className="bg-purple-800 p-8 text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold text-teal-300 flex items-center justify-center">
                        🎉 <FaGem className="mx-2" /> FLAT 10% OFF ON ALL ITEMS! 🎉
                    </h2>
                    <p className="text-xl text-teal-200 mt-4">Limited time offer. Shop now! ⏰</p>
                </div>
            </div>
            
            {/* Category Filter */}
            <div className="flex justify-center my-6">
                <button onClick={() => setCategory("All")} className={`px-6 py-2 mx-2 rounded-full text-lg transition duration-300 ${category === "All" ? "bg-teal-500 text-white shadow-lg" : "bg-gray-800 text-teal-400 hover:bg-teal-600"}`}>
                    All
                </button>
                <button onClick={() => setCategory("Men")} className={`px-6 py-2 mx-2 rounded-full text-lg transition duration-300 ${category === "Men" ? "bg-teal-500 text-white shadow-lg" : "bg-gray-800 text-teal-400 hover:bg-teal-600"}`}>
                    Men
                </button>
                <button onClick={() => setCategory("Women")} className={`px-6 py-2 mx-2 rounded-full text-lg transition duration-300 ${category === "Women" ? "bg-teal-500 text-white shadow-lg" : "bg-gray-800 text-teal-400 hover:bg-teal-600"}`}>
                    Women
                </button>
            </div>

            {/* Products Grid */}
            <div className="container mx-auto p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
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

