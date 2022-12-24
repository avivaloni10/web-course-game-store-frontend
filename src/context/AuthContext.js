import React, { useContext, useEffect, useState } from "react";
import { auth } from "../firebase";

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    function signin(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    function signout() {
        return auth.signOut()
    }

    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email);
    }

    function isUserSignedIn() {
        return auth.currentUser != null;
    }

    useEffect(() => {
        return auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        });
    }, [])

    const user = {
        currentUser,
        signup,
        signin,
        signout,
        resetPassword,
        isUserSignedIn,
    }

    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    )
}