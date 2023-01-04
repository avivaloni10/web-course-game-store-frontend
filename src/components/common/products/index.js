import {useEffect, useState} from "react";

import {Container, Grid} from "@mui/material";

import SingleProduct from "./SingleProduct";
import {getGames} from "../../../services";

export default function Products({filter}) {
    const [games, setGames] = useState([]);
    const [showedGamesLimit, setShowedGamesLimit] = useState(12);

    useEffect(() => {
        async function fetchGames() {
            const gs = await getGames()
            console.log("gs:", gs)
            setGames(gs);
        }
        fetchGames();
    }, [])

    const renderProducts = games.map((product) => {
        if (filter && !filter(product)) {
            return null;
        }
        return (
            <Grid item key={product.id} xs={2} sm={4} md={4} display="flex" flexDirection={'column'}
                  alignItems="center">
                {<SingleProduct product={product}/>}
            </Grid>
        );
    }).slice(0, showedGamesLimit);

    return (
        <Container id="products">
            <Grid
                container
                spacing={{xs: 2, md: 3}}
                justifyContent="center"
                sx={{margin: `20px 4px 10px 4px`}}
                columns={{xs: 4, sm: 8, md: 12}}
            >
                {renderProducts}
            </Grid>
        </Container>
    );
}
