import {useAuth} from "../../context/AuthContext";
import HomePage from "../page-templates/home-page";
import CartProducts from "./CartProducts";
import {getCartGames, getOrCreateCart} from "../../services";
import {useEffect, useState} from "react";

export default function Cart() {
    const {getToken} = useAuth();

    const [games, setGames] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        async function fetchGames() {
            const token = await getToken();
            const gs = await getCartGames(token);
            console.log("gs:", gs);
            setGames(gs);
            const gameIdToPrice = new Map(gs.map(g => [g.id, g.price]));
            const cart = await getOrCreateCart(token);
            const t = cart.games.map(g => g.amount * gameIdToPrice.get(g.id)).reduce((prev, curr) => prev + curr, 0);
            setTotal(t);
        }

        fetchGames();
    }, [])

    return (
        <HomePage title="My Items" hideBanner hidePromotions>
            <CartProducts games={games} total={total}/>
        </HomePage>
    );
}
