import React from "react";
import './App.css';

import Dashboard from "./components/dashboard";
import SignUnSide from "./components/sign-up/SignUp";
import SignInSide from "./components/sign-in/SignIn";
import ForgotPassword from "./components/forgot-password/ForgotPassword";

import {AuthProvider} from "./context/AuthContext";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
    return <Router>
        <AuthProvider>
            <Routes>
                <Route exact path="/" element={<Dashboard/>}/>
                <Route path="/signup" element={<SignUnSide/>}/>
                <Route path="/signin" element={<SignInSide/>}/>
                <Route path="/forgot-password" element={<ForgotPassword/>}/>
            </Routes>
        </AuthProvider>
    </Router>
}

export default App;
