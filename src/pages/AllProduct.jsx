import React from 'react';
import ProductCard from '../components/ProductCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import products from '../components/products';

const AllProduct = () => {
    // Filter products to get only popular items
    const popularProducts = products
        .filter(product => product.subcategory === "popular")
        .map(product => ({
            ...product,
            discountedPrice: (product.price_usd * 0.9).toFixed(2), // 10% discount, fixed to 2 decimal places
        }));

    return (
        <div className="min-h-screen flex flex-col text-white">
            <Navbar />
            <div className="text-center py-16 bg-gradient-to-r">
                <h1 className="text-5xl font-bold mt-10">Popular</h1>
                <p className="text-lg mt-2">Browse through our collection of exquisite jewelry.</p>
            </div>

            {/* Products Grid */}
            <div className="container mx-auto p-8">
                {popularProducts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {popularProducts.map(item => (
                            <ProductCard key={item.id} item={item} />
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-xl mt-10">No popular items available.</p>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default AllProduct;