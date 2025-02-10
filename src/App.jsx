import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import UserLogin from './pages/UserLogin';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Payment from './pages/Payment';



const App = () => {
    return (
        <Router>
            <Routes>
                {/* Public routes */}
                <Route path="/" element={<Home />} /> {/* Homepage */}
                <Route path="/cart" element={<Cart />} /> {/* Cart page */}
                <Route path="/payment" element={<Payment />} /> {/* Payment page */}
              

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
