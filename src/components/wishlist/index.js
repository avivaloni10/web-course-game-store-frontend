import {getOrCreateWishlist, getWishlistGames} from "../../services";
import Products from "../common/products";
import HomePage from "../page-templates/home-page";
import {useEffect, useState} from "react";
import {useAuth} from "../../context/AuthContext";

export default function Wishlist() {
    const { getToken } = useAuth();

    const [wishlist, setWishlist] = useState({games: [], children: []});

    useEffect(() => {
        async function fetchWishlist() {
            const token = await getToken();
            let wishlist = await getOrCreateWishlist(token);
            wishlist["children"] = wishlist.games.length !== 0 ? await getWishlistGames(token) : [];
            setWishlist(wishlist);
        }

        fetchWishlist();
    }, [getToken])

    return (
        <HomePage title="Wishlist" hideBanner>
            <Products games={wishlist.children}/>
        </HomePage>
    );
}
