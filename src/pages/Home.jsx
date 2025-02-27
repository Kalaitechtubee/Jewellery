
// import React, { useState } from 'react';
// import ProductCard from '../components/ProductCard';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import products from '../components/products';
// import image2 from '../assets/images/image2.jpg'; // Ensure correct path

// const Home = () => {
//     const [category, setCategory] = useState("All");
//     const [subcategory, setSubcategory] = useState("All");
//     const [customOrder, setCustomOrder] = useState(""); // Stores user input
//     const [showPopup, setShowPopup] = useState(false); // Controls popup visibility

//     // Define subcategories based on product data
//     const subcategories = {
//         All: ['All'],
//         Men: ['All', 'Chain', 'Bracelet', 'Watch', 'Ring', 'Earrings', 'Pendant'],
//         Women: ['All', 'Necklace', 'Earrings', 'Ring', 'Bracelet', 'Anklet'],
//         Handmade: ['All', 'Earrings', 'Bracelet', 'Art', 'Candles', 'Wallets'],
//         "Custom Product": [] // No predefined subcategories for custom orders
//     };

//     // Filter products based on category & subcategory (skip filtering for "Custom Product")
//     const filteredProducts = category !== "Custom Product"
//         ? products.filter(product => {
//             const matchesCategory = category === "All" || product.category === category;
//             const matchesSubcategory = subcategory === "All" || product.subcategory === subcategory;
//             return matchesCategory && matchesSubcategory;
//         })
//         : [];

//     // Apply 10% discount
//     const discountedProducts = filteredProducts.map(product => ({
//         ...product,
//         discountedPrice: (product.price_usd * 0.9).toFixed(2),
//     }));

//     // Handle Custom Order Submission
//     const handleCustomOrderSubmit = () => {
//         if (customOrder.trim() !== "") {
//             setShowPopup(true); // Show confirmation popup
//         }
//     };

//     // Close popup and navigate back to Home
//     const closePopup = () => {
//         setShowPopup(false); // Hide popup
//         setCustomOrder(""); // Clear input box
//         setCategory("All"); // Reset category to default
//         setSubcategory("All"); // Reset subcategory
//     };

//     return (
//         <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
//             <Navbar />

//             {/* Hero Section */}
//             <div className="relative h-[350px] sm:h-[400px] flex items-center justify-center">
//                 <div 
//                     className="absolute inset-0 bg-cover bg-center" 
//                     style={{ backgroundImage: `url(${image2})` }} 
//                 />
//                 <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
//                 <div className="relative z-10 text-center text-white px-4">
//                     <h1 className="text-3xl sm:text-5xl font-bold drop-shadow-lg">
//                         Flat 10% OFF on All Items! 🎉
//                     </h1>
//                     <p className="text-lg sm:text-2xl mt-3 drop-shadow-md">
//                         Limited Time Offer - Shop Now! ⏰
//                     </p>
//                     <button
//                         className="mt-5 px-6 py-3 bg-teal-500 text-white font-medium text-lg rounded-full shadow-lg hover:bg-teal-600 transition-all"
//                         onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
//                     >
//                         Explore Now
//                     </button>
//                 </div>
//             </div>

//             {/* Filters Section */}
//             <div className="container mx-auto px-4 sm:px-8 py-8">
//                 {/* Category Buttons */}
//                 <div className="flex justify-center gap-4 sm:gap-6 flex-wrap">
//                     {['All', 'Men', 'Women', 'Handmade', 'Custom Product'].map((cat) => (
//                         <button
//                             key={cat}
//                             onClick={() => {
//                                 setCategory(cat);
//                                 setSubcategory("All");
//                             }}
//                             className={`px-6 py-2 text-lg font-semibold rounded-lg transition-all duration-300 shadow-md 
//                                 ${category === cat 
//                                     ? 'bg-teal-600 text-white scale-105' 
//                                     : 'bg-gray-200 text-gray-900 hover:bg-teal-500 hover:text-white hover:scale-105'}`}
//                         >
//                             {cat}
//                         </button>
//                     ))}
//                 </div>

//                 {/* Subcategory Filter (Hide for Custom Product) */}
//                 {category !== "Custom Product" && (
//                     <div className="flex justify-center flex-wrap gap-3 mt-6">
//                         {subcategories[category].map((subcat) => (
//                             <button
//                                 key={subcat}
//                                 onClick={() => setSubcategory(subcat)}
//                                 className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 shadow-md
//                                     ${subcategory === subcat 
//                                         ? "bg-indigo-600 text-white" 
//                                         : "bg-gray-200 text-gray-700 hover:bg-indigo-500 hover:text-white"}`}
//                             >
//                                 {subcat}
//                             </button>
//                         ))}
//                     </div>
//                 )}
//             </div>

//             {/* Custom Product Input Box (Only when "Custom Product" is selected) */}
//             {category === "Custom Product" && (
//                 <div className="container mx-auto px-4 sm:px-8 py-6 flex flex-col items-center">
//                     <h2 className="text-xl font-semibold text-gray-800">Enter Your Custom Product Details</h2>
//                     <textarea
//                         className="w-full max-w-lg mt-3 p-3 border rounded-lg resize-none"
//                         rows="4"
//                         placeholder="Describe your custom product..."
//                         value={customOrder}
//                         onChange={(e) => setCustomOrder(e.target.value)}
//                     ></textarea>
//                     <button
//                         className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
//                         onClick={handleCustomOrderSubmit}
//                     >
//                         Submit Custom Request
//                     </button>
//                 </div>
//             )}

//             {/* Products Grid (Hide when "Custom Product" is selected) */}
//             {category !== "Custom Product" && (
//                 <div className="container mx-auto px-4 sm:px-8">
//                     {discountedProducts.length > 0 ? (
//                         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//                             {discountedProducts.map(item => (
//                                 <ProductCard key={item.id} item={item} />
//                             ))}
//                         </div>
//                     ) : (
//                         <p className="text-center text-lg font-medium text-gray-500 mt-8">
//                             No products found matching your selection.
//                         </p>
//                     )}
//                 </div>
//             )}

//             {/* Popup Modal for Custom Order Confirmation */}
//             {showPopup && (
//                 <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//                     <div className="bg-white p-6 rounded-lg shadow-lg w-96">
//                         <h2 className="text-xl font-semibold text-gray-800">Thank You! 🎉</h2>
//                         <p className="mt-3 text-gray-700">Your custom order has been received:</p>
//                         <p className="mt-2 p-3 border bg-gray-100 rounded">{customOrder}</p>
//                         <button
//                             className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all"
//                             onClick={closePopup}
//                         >
//                             Close & Return to Home
//                         </button>
//                     </div>
//                 </div>
//             )}

//             <Footer />
//         </div>
//     );
// };

// export default Home;
import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import products from '../components/products';
import image2 from '../assets/images/image2.jpg'; // Ensure correct path

const Home = () => {
    const [category, setCategory] = useState("Popular");
    const [subcategory, setSubcategory] = useState("All");
    const [customOrder, setCustomOrder] = useState("");
    const [showPopup, setShowPopup] = useState(false);

    const subcategories = {
        Popular: ['All'],
        Men: ['All', 'Chain', 'Bracelet', 'Watch', 'Ring', 'Earrings', 'Pendant'],
        Women: ['All', 'Necklace', 'Earrings', 'Ring', 'Bracelet', 'Anklet'],
        Handmade: ['All', 'Earrings', 'Bracelet', 'Art', 'Candles', 'Wallets'],
        "Custom Product": []
    };

    const filteredProducts = category !== "Custom Product"
        ? products.filter(product => {
            const matchesCategory = category === "Popular" || product.category === category;
            const matchesSubcategory = subcategory === "All" || product.subcategory === subcategory;
            return matchesCategory && matchesSubcategory;
        })
        : [];

    const limitedProducts = category === "Popular"
        ? filteredProducts.sort(() => 0.5 - Math.random()).slice(0, 15)
        : filteredProducts;

    const discountedProducts = limitedProducts.map(product => ({
        ...product,
        discountedPrice: (product.price_usd * 0.9).toFixed(2),
    }));

    const handleCustomOrderSubmit = () => {
        if (customOrder.trim() !== "") {
            setShowPopup(true);
        }
    };

    const closePopup = () => {
        setShowPopup(false);
        setCustomOrder("");
        setCategory("Popular");
        setSubcategory("All");
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
            <Navbar />

            {/* Hero Section */}
            <div className="relative h-[250px] sm:h-[350px] lg:h-[400px] flex items-center justify-center">
                <div 
                    className="absolute inset-0 bg-cover bg-center" 
                    style={{ backgroundImage: `url(${image2})` }} 
                />
                <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="text-xl sm:text-3xl lg:text-5xl font-bold drop-shadow-lg mt-12">
                        Flat 10% OFF on All Items! 🎉
                    </h1>
                    <p className="text-sm sm:text-lg lg:text-2xl mt-2 sm:mt-3 drop-shadow-md">
                        Limited Time Offer - Shop Now! ⏰
                    </p>
                    <button
                        className="mt-4 sm:mt-5 px-4 sm:px-6 py-2 sm:py-3 bg-teal-500 text-white font-medium text-sm sm:text-lg rounded-full shadow-lg hover:bg-teal-600 transition-all"
                        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                    >
                        Explore Now
                    </button>
                </div>
            </div>

            {/* Filters Section */}
            <div className="container mx-auto px-4 sm:px-8 py-6">
                <div className="flex justify-center gap-2 sm:gap-4 flex-wrap">
                    {['Popular', 'Men', 'Women', 'Handmade', 'Custom Product'].map((cat) => (
                        <button
                            key={cat}
                            onClick={() => {
                                setCategory(cat);
                                setSubcategory("All");
                            }}
                            className={`px-4 sm:px-6 py-1 sm:py-2 text-sm sm:text-lg font-semibold rounded-lg transition-all duration-300 shadow-md 
                                ${category === cat 
                                    ? 'bg-teal-600 text-white scale-105' 
                                    : 'bg-gray-200 text-gray-900 hover:bg-teal-500 hover:text-white hover:scale-105'}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Subcategory Filter */}
                {category !== "Custom Product" && (
                    <div className="flex justify-center flex-wrap gap-2 sm:gap-3 mt-4 sm:mt-6">
                        {subcategories[category].map((subcat) => (
                            <button
                                key={subcat}
                                onClick={() => setSubcategory(subcat)}
                                className={`px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 shadow-md
                                    ${subcategory === subcat 
                                        ? "bg-indigo-600 text-white" 
                                        : "bg-gray-200 text-gray-700 hover:bg-indigo-500 hover:text-white"}`}
                            >
                                {subcat}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* Custom Product Input Box */}
            {category === "Custom Product" && (
                <div className="container mx-auto px-4 sm:px-8 py-6 flex flex-col items-center">
                    <h2 className="text-lg sm:text-xl font-semibold text-gray-800">Enter Your Custom Product Details</h2>
                    <textarea
                        className="w-full max-w-xs sm:max-w-md mt-3 p-2 sm:p-3 border rounded-lg resize-none text-sm sm:text-base"
                        rows="4"
                        placeholder="Describe your custom product..."
                        value={customOrder}
                        onChange={(e) => setCustomOrder(e.target.value)}
                    ></textarea>
                    <button
                        className="mt-4 px-4 sm:px-6 py-2 sm:py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
                        onClick={handleCustomOrderSubmit}
                    >
                        Submit Custom Request
                    </button>
                </div>
            )}

            {/* Products Grid */}
            {category !== "Custom Product" && (
                <div className="container mx-auto px-4 sm:px-8">
                    {discountedProducts.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                            {discountedProducts.map(item => (
                                <ProductCard key={item.id} item={item} />
                            ))}
                        </div>
                    ) : (
                        <p className="text-center text-sm sm:text-lg font-medium text-gray-500 mt-6">
                            No products found matching your selection.
                        </p>
                    )}
                </div>
            )}

            {/* Popup Modal */}
            {showPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
                    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md">
                        <h2 className="text-lg sm:text-xl font-semibold text-gray-800">Thank You! 🎉</h2>
                        <p className="mt-2 sm:mt-3 text-gray-700">Your custom order has been received:</p>
                        <p className="mt-2 p-2 sm:p-3 border bg-gray-100 rounded text-sm sm:text-base">{customOrder}</p>
                        <button
                            className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all"
                            onClick={closePopup}
                        >
                            Close & Return to Home
                        </button>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
};

export default Home;
