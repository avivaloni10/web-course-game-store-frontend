import * as React from 'react';
import {useAuth} from "../../context/AuthContext";
import {useNavigate} from "react-router-dom";
import AuthPage from "../page-templates/auth-page";

export default function SignUn() {
    const {signup} = useAuth()
    const navigate = useNavigate()

    async function handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get('email');
        const password = data.get('password');

        try {
            await signup(email, password);
            navigate("/");
        } catch (e) {
            console.error(e)
            alert("Failed to create an account!");
        }
    }

    return (
        <AuthPage
            title="Sign up"
            isShowPassword
            buttonText="Sign Up"
            rightLink={{text: "Already have an account? Sign In", link: "/signin"}}
            onSubmit={handleSubmit}
        />
    );
}
