import React from "react";
import './App.css';

import Dashboard from "./components/dashboard";
import SignUn from "./components/sign-up";
import SignIn from "./components/sign-in";
import ForgotPassword from "./components/forgot-password";

import {AuthProvider} from "./context/AuthContext";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Temp from "./components/temp";

function App() {
    return <Router>
        <AuthProvider>
            <Routes>
                <Route exact path="/" element={<Dashboard/>}/>
                <Route path="/signup" element={<SignUn/>}/>
                <Route path="/signin" element={<SignIn/>}/>
                <Route path="/forgot-password" element={<ForgotPassword/>}/>
                <Route path="/categories" element={<Temp/>}/>
            </Routes>
        </AuthProvider>
    </Router>
}

export default App;
