import HomePage from "../page-templates/home-page";
import Products from "../common/products";
import {getHighestRatingGames, searchGames} from "../../services";
import SearchFilters from "../common/search-filters";
import {useEffect, useState} from "react";
import {Button, Grid} from "@mui/material";

export default function Dashboard() {
    const PAGE_SIZE = 12;
    const [games, setGames] = useState([]);
    const [page, setPage] = useState(0);

    const [filter1, setFilter1] = useState("");
    const [filter2, setFilter2] = useState("");
    const [filter3, setFilter3] = useState("");

    useEffect(() => {
        async function fetchGames() {
            setGames(await getHighestRatingGames(page, PAGE_SIZE, filter1, filter2, filter3));
            setPage(page + 1);
        }

        fetchGames();
    }, []);

    useEffect(() => {
        async function filterProducts() {
            setGames(await getHighestRatingGames(0, PAGE_SIZE, filter1, filter2, filter3));
            setPage(1);
        }

        filterProducts();
    }, [filter1, filter2, filter3]);

    const loadMore = async () => {
        setGames(games.concat(await getHighestRatingGames(page, PAGE_SIZE, filter1, filter2, filter3)));
        setPage(page + 1);
    }

    return (
        <HomePage title="Our Top Products">
            <SearchFilters filterName1="id" filterName2="name" filterName3="summary"
                           filter1={filter1} filter2={filter2} filter3={filter3}
                           setFilter1={setFilter1} setFilter2={setFilter2} setFilter3={setFilter3}/>
            <Products products={games}/>
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
