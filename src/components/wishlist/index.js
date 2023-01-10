import {getHighestRatingGames} from "../../services";
import Products from "../common/products";
import HomePage from "../page-templates/home-page";
import SearchFilters from "../common/search-filters";
import {useEffect, useState} from "react";

export default function Wishlist() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        async function fetchGames() {
            const gs = await getHighestRatingGames()
            console.log("gs:", gs)
            setGames(gs);
        }

        fetchGames();
    }, [])

    return (
        <HomePage title="Wishlist" hideBanner>
            <Products games={games}/>
        </HomePage>
    );
}
