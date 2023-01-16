import React from "react";
import './App.css';

import Dashboard from "./components/dashboard";
import SignUn from "./components/sign-up";
import SignIn from "./components/sign-in";
import ForgotPassword from "./components/forgot-password";
import Cart from "./components/cart";
import Wishlist from "./components/wishlist";

import {AuthProvider} from "./context/AuthContext";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Collections from "./components/collections";
import Checkout from "./components/checkout";
import Platforms from "./components/platforms";

function App() {
    return <Router>
        <AuthProvider>
            <Routes>
                <Route exact path="/" element={<Dashboard/>}/>
                <Route path="/signup" element={<SignUn/>}/>
                <Route path="/signin" element={<SignIn/>}/>
                <Route path="/forgot-password" element={<ForgotPassword/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/wishlist" element={<Wishlist/>}/>
                <Route path="/collections" element={<Collections/>}/>
                <Route path="/platforms" element={<Platforms/>}/>
                <Route path="/checkout" element={<Checkout/>}/>
            </Routes>
        </AuthProvider>
    </Router>
}

export default App;
