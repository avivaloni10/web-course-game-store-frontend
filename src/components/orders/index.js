import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import HomePage from "../page-templates/home-page";

export default function Orders() {
    const {getToken} = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        async function getOrders(){

        }
        getOrders();
    }, [getToken]);

    return (
        <HomePage hideBanner>

        </HomePage>
    )

}