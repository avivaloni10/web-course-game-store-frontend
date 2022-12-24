import * as React from 'react';
import {useAuth} from "../../context/AuthContext";
import AuthPage from "../common/auth-page";

export default function ForgotPassword() {
    const {resetPassword} = useAuth()

    async function handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get('email');

        try {
            await resetPassword(email);
            alert("Check your inbox for further instructions")
        } catch (e) {
            console.error(e)
            alert("Failed to reset password");
        }
    }

    return (
        <AuthPage
            title="Reset password"
            buttonText="Reset Password"
            leftLink={{text: "Back to login", link: "/signin"}}
            rightLink={{text: "Don't have an account? Sign Up", link: "/signup"}}
            onSubmit={handleSubmit}
        />
    );
}
