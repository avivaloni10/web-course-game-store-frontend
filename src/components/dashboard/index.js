import HomePage from "../page-templates/home-page";
import Products from "../common/products";
import {getHighestRatingGames} from "../../services";
import SearchFilters from "../common/search-filters";
import {useEffect, useState} from "react";

export default function Dashboard() {
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
        <HomePage title="Our Top Products">
            <SearchFilters setGames={setGames}/>
            <Products games={games}/>
        </HomePage>
    );
}
