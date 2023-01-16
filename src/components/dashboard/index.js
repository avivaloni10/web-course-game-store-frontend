import HomePage from "../page-templates/home-page";
import Products from "../common/products";
import {getHighestRatingGames} from "../../services";
import SearchFilters from "../common/search-filters";
import {useEffect, useState} from "react";
import {Button, Grid} from "@mui/material";

export default function Dashboard() {
    const PAGE_SIZE = 12;
    const [games, setGames] = useState([]);
    const [page, setPage] = useState(0);

    useEffect(() => {
        async function fetchGames() {
            setGames(await getHighestRatingGames(page, PAGE_SIZE));
            setPage(page + 1);
        }

        fetchGames();
    }, [])

    const loadMore = async () => {
        setGames(games.concat(await getHighestRatingGames(page, PAGE_SIZE)));
        console.log([...games, ...(await getHighestRatingGames(page, PAGE_SIZE))]);
        setPage(page + 1);
    }

    return (
        <HomePage title="Our Top Products">
            <SearchFilters setGames={setGames}/>
            <Products games={games}/>
            <Grid
                container
                spacing={{xs: 2, md: 3}}
                justifyContent="center"
                sx={{margin: `20px 4px 10px 4px`}}
                columns={{xs: 4, sm: 8, md: 12}}
            >
                <Button sx={{mt: 4, mb: 4}} variant="contained" onClick={loadMore}>Load More</Button>
            </Grid>
        </HomePage>
    );
}
