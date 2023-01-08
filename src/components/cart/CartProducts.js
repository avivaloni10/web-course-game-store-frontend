import { useEffect, useState } from "react";

import { Container, Grid, List } from "@mui/material";

import CartProduct from "./CartProduct";

export default function CartProducts({ gameFetcher }) {
    const [games, setGames] = useState([]);
    const [showedGamesLimit, setShowedGamesLimit] = useState(12);

    useEffect(() => {
        async function fetchGames() {
            const gs = await gameFetcher()
            console.log("gs:", gs)
            setGames(gs);
        }
        fetchGames();
    }, [])

    const renderProducts = games.map((product) => {
        return (
            <Grid item key={product.id} xs={2} sm={4} md={4} display="flex" flexDirection={'row'}
                alignItems="center">
                {<CartProduct product={product} />}
            </Grid>
        );
    }).slice(0, showedGamesLimit);

    return (
        <Container id="products">
            <List>
                {renderProducts}
            </List>
        </Container>
    );
}
