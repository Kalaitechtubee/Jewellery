import React from 'react';
import ProductCard from '../components/ProductCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import products from '../components/products';

const AllProducts = () => {
    // Apply 10% discount to all items
    const discountedProducts = products.map(product => ({
        ...product,
        discountedPrice: product.price * 0.9, // 10% discount
    }));

    return (
        <div className="min-h-screen flex flex-col bg-indigo-900 text-white">
            <Navbar />
            <div className="text-center py-16 bg-gradient-to-r">
                <h1 className="text-5xl font-bold mt-10">All Products</h1>
                <p className="text-lg mt-2">Browse through our collection of exquisite jewelry.</p>
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

export default AllProducts;
