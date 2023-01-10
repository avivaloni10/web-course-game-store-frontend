import { useEffect, useState } from "react";

import { Button, Container, Grid, List, Typography } from "@mui/material";

import CartProduct from "./CartProduct";
import { getCartGames, getOrCreateCart } from "../../services";
import { useAuth } from "../../context/AuthContext";

export default function CartProducts() {
    const [games, setGames] = useState([]);
    const { getToken } = useAuth();
    const [showedGamesLimit, setShowedGamesLimit] = useState(12);
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

    const renderProducts = games.map((product) => {
        return (
            <Grid item key={product.id} xs={2} sm={4} md={4} display="flex" flexDirection={'row'}
                alignItems="center">
                {<CartProduct product={product} />}
            </Grid>
        );
    }).slice(0, showedGamesLimit);
    const onCheckout = () => { };

    return (
        <Container id="products" maxWidth={"lg"}>
            <Grid container alignItems="center" justifyContent="center">
                <Grid item xs={2} sm={4} md={4}>
                    <Typography variant="h5" align="center">
                        Total: {total}$
                    </Typography>
                </Grid>
                <Grid item xs={2} sm={4} md={4} textAlign="center">
                    <Button variant="contained" onClick={() => onCheckout()}>Checkout</Button>
                </Grid>
            </Grid>
            <List>
                {renderProducts}
            </List>
        </Container>
    );
}
