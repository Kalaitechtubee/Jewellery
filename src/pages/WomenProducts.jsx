import React from 'react';
import ProductCard from '../components/ProductCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import products from '../components/products';

const WomenProducts = () => {
    // Filter Women's Products and Apply Discount
    const womenProducts = products.filter(product => product.category === "Women").map(product => ({
        ...product,
        discountedPrice: product.price * 0.9,
    }));

    return (
        <div className="min-h-screen flex flex-col text-white">
            <Navbar />
            <div className="text-center py-16 bg-gradient-to-r">
                <h1 className="text-5xl font-bold mt-10">Women's Collection</h1>
                <p className="text-lg mt-2">Discover timeless jewelry pieces for women.</p>
            </div>

            {/* Products Grid */}
            <div className="container mx-auto p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {womenProducts.map(item => (
                        <ProductCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default WomenProducts;
