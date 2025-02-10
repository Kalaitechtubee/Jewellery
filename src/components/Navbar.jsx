




// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { FaSignInAlt, FaUserShield, FaShoppingBag, FaBars, FaTimes, FaGem, FaCrown } from 'react-icons/fa';

// const Navbar = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [cartItems, setCartItems] = useState(0);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
//         const totalItems = storedCart.reduce((total, item) => total + item.quantity, 0);
//         setCartItems(totalItems);
//     }, []);

//     const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//     return (
//         <nav className="fixed w-full top-0 z-50 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 shadow-lg backdrop-blur-md bg-opacity-90">
//             <div className="container mx-auto flex justify-between items-center p-4">
//                 {/* Logo */}
//                 <Link to="/" className="text-white text-2xl md:text-3xl font-extrabold tracking-wide flex items-center">
//                     <FaGem className="mr-2 text-yellow-300" /> JJ's Jewellery
//                 </Link>

//                 {/* Desktop Menu */}
//                 <div className="hidden lg:flex space-x-6 items-center">
//                     {/* Admin Button */}
//                     <Link to="/admin-login" className="bg-blue-600 hover:bg-blue-700 text-white flex items-center px-5 py-2 rounded-full transition">
//                         <FaUserShield className="mr-2" /> Admin
//                     </Link>

//                     {/* Login Button */}
//                     <Link to="/user-login" className="bg-green-500 hover:bg-green-600 text-white flex items-center px-5 py-2 rounded-full transition">
//                         <FaSignInAlt className="mr-2" /> Login
//                     </Link>

//                     {/* Cart Button */}
//                     <Link to="/cart" className="relative flex items-center">
//                         <button className="bg-white text-black flex items-center px-5 py-2 rounded-full shadow-md hover:bg-gray-100 transition">
//                             <FaShoppingBag className="mr-2" size={22} />
//                             Cart
//                         </button>
//                         {cartItems > 0 && (
//                             <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full px-2">
//                                 {cartItems}
//                             </span>
//                         )}
//                     </Link>
//                 </div>

//                 {/* Mobile Menu Icon */}
//                 <div className="lg:hidden">
//                     <button onClick={toggleMenu} className="text-white focus:outline-none">
//                         {isMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
//                     </button>
//                 </div>
//             </div>

//             {/* Mobile Menu */}
//             {isMenuOpen && (
//                 <div className="lg:hidden fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center space-y-6 text-white transition-all">
//                     <Link to="/" onClick={toggleMenu} className="text-2xl font-bold hover:text-gray-300 transition flex items-center">
//                         <FaCrown className="mr-2 text-yellow-300" /> Home
//                     </Link>

//                     {/* Admin Button */}
//                     <Link to="/admin-login" className="bg-blue-600 hover:bg-blue-700 text-white flex items-center px-6 py-3 rounded-full transition">
//                         <FaUserShield className="mr-2" /> Admin
//                     </Link>

//                     {/* Login Button */}
//                     <Link to="/user-login" className="bg-green-500 hover:bg-green-600 text-white flex items-center px-6 py-3 rounded-full transition">
//                         <FaSignInAlt className="mr-2" /> Login
//                     </Link>

//                     {/* Cart Button */}
//                     <Link to="/cart" className="relative flex items-center">
//                         <button className="bg-white text-black flex items-center px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition">
//                             <FaShoppingBag className="mr-2" size={24} />
//                             Cart
//                         </button>
//                         {cartItems > 0 && (
//                             <span className="absolute -top-2 -right-2 bg-red-600 text-white text-sm font-bold rounded-full px-3">
//                                 {cartItems}
//                             </span>
//                         )}
//                     </Link>

//                     <button onClick={toggleMenu} className="text-gray-300 text-lg mt-4">Close Menu</button>
//                 </div>
//             )}
//         </nav>
//     );
// };

// export default Navbar;


import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSignInAlt, FaUserShield, FaShoppingBag, FaBars, FaTimes, FaGem, FaCrown } from 'react-icons/fa';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [cartItems, setCartItems] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        const totalItems = storedCart.reduce((total, item) => total + item.quantity, 0);
        setCartItems(totalItems);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className="fixed w-full top-0 z-50 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 shadow-lg backdrop-blur-md bg-opacity-90">
            <div className="container mx-auto flex justify-between items-center p-4">
                {/* Logo */}
                <Link to="/" className="text-black text-2xl md:text-3xl font-extrabold tracking-wide flex items-center">
                    <FaGem className="mr-2 text-blue-700" />Jewellery Shop
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex space-x-6 items-center">
                    {/* Admin Button */}
                    <Link to="/admin-login" className="bg-blue-600 hover:bg-blue-700 text-white flex items-center px-5 py-2 rounded-full transition">
                        <FaUserShield className="mr-2" /> Admin
                    </Link>

                    {/* Login Button */}
                    <Link to="/user-login" className="bg-green-500 hover:bg-green-600 text-white flex items-center px-5 py-2 rounded-full transition">
                        <FaSignInAlt className="mr-2" /> Login
                    </Link>

                    {/* Cart Button */}
                    <Link to="/cart" className="relative flex items-center">
                        <button className="bg-white text-black flex items-center px-5 py-2 rounded-full shadow-md hover:bg-gray-100 transition">
                            <FaShoppingBag className="mr-2" size={22} />
                            Cart
                        </button>
                        {cartItems > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full px-2">
                                {cartItems}
                            </span>
                        )}
                    </Link>
                </div>

                {/* Mobile Menu Icon */}
                <div className="lg:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        {isMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center space-y-6 text-white transition-all">
                    <Link to="/" onClick={toggleMenu} className="text-2xl font-bold hover:text-gray-300 transition flex items-center">
                        <FaCrown className="mr-2 text-yellow-300" /> Home
                    </Link>

                    {/* Admin Button */}
                    <Link to="/admin-login" className="bg-blue-600 hover:bg-blue-700 text-white flex items-center px-6 py-3 rounded-full transition">
                        <FaUserShield className="mr-2" /> Admin
                    </Link>

                    {/* Login Button */}
                    <Link to="/user-login" className="bg-green-500 hover:bg-green-600 text-white flex items-center px-6 py-3 rounded-full transition">
                        <FaSignInAlt className="mr-2" /> Login
                    </Link>

                    {/* Cart Button */}
                    <Link to="/cart" className="relative flex items-center">
                        <button className="bg-white text-black flex items-center px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition">
                            <FaShoppingBag className="mr-2" size={24} />
                            Cart
                        </button>
                        {cartItems > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-sm font-bold rounded-full px-3">
                                {cartItems}
                            </span>
                        )}
                    </Link>

                    <button onClick={toggleMenu} className="text-gray-300 text-lg mt-4">Close Menu</button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;