import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import UserLogin from './pages/UserLogin';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Payment from './pages/Payment';
import AllProducts from './pages/AllProducts';
import MenProducts from './pages/MenProducts';
import WomenProducts from './pages/WomenProducts';



const App = () => {
    return (
        <Router>
            <Routes>
                {/* Public routes */}
                <Route path="/" element={<Home />} /> {/* Homepage */}
                <Route path="/cart" element={<Cart />} /> {/* Cart page */}
                <Route path="/payment" element={<Payment />} /> {/* Payment page */}
                <Route path="/all-products" element={<AllProducts />} />
                <Route path="/men-products" element={<MenProducts />} />
                <Route path="/women-products" element={<WomenProducts />} />

                {/* Admin Routes */}
                <Route path="/admin-login" element={<AdminLogin />} /> {/* Admin login */}
                <Route path="/admin-dashboard" element={<AdminDashboard />} /> {/* Admin dashboard */}

                {/* User Routes */}
                <Route path="/user-login" element={<UserLogin />} /> {/* User login */}
                
                {/* Dynamic Route for ProductDetails */}
                <Route path="/product/:id" element={<ProductDetails />} /> {/* View product details based on ID */}
            </Routes>
        </Router>
    );
};

export default App;
