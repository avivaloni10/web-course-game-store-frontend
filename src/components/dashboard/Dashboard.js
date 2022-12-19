import React, {useEffect} from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from 'react-router-dom'

export default function Dashboard() {
    const navigate = useNavigate()
    const { signout, currentUser, isUserSignedIn } = useAuth();

    useEffect(() => {
        if (!isUserSignedIn()) {
            navigate("/signin");
        }
    }, [])

    function handleSignout() {
        signout();
        navigate("/signin");
    }

    return <div>
        <div>Dashboard</div>
        <div>Email: {currentUser.email}</div>
        <button onClick={handleSignout}>Sign Out</button>
    </div>
}
