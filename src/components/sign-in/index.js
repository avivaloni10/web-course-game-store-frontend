import * as React from 'react';
import {useAuth} from "../../context/AuthContext";
import {useNavigate} from 'react-router-dom'
import AuthPage from "../page-templates/auth-page";

export default function SignIn() {
    const {signin} = useAuth()
    const navigate = useNavigate()

    async function handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get('email');
        const password = data.get('password');

        try {
            await signin(email, password);
            navigate("/")
        } catch (e) {
            console.error(e)
            alert("Failed to sign in!");
        }
    }

    return (
        <AuthPage
            title="Sign in"
            isShowPassword
            buttonText="Sign In"
            leftLink={{text: "Forgot password?", link: "/forgot-password"}}
            rightLink={{text: "Don't have an account? Sign Up", link: "/signup"}}
            onSubmit={handleSubmit}
        />
    );
}
