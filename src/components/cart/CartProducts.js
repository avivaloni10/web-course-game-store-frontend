import {useEffect, useState} from "react";

import {Button, Container, Grid, List, Typography} from "@mui/material";

import CartProduct from "./CartProduct";
import {getCartGames, getOrCreateCart} from "../../services";
import {useAuth} from "../../context/AuthContext";

export default function CartProducts({games, total}) {
    const {getToken} = useAuth();
    const [showedGamesLimit, setShowedGamesLimit] = useState(12);

    const renderProducts = games.map((product) => {
        const cartProduct = cart.games.filter(g=>g.id === product.id)[0];
        return (
            <Grid item key={product.id} xs={2} sm={4} md={4} display="flex" flexDirection={'row'}
                  alignItems="center">
                {<CartProduct product={product}/>}
            </Grid>
        );
    }).slice(0, showedGamesLimit);
    const onCheckout = () => {
    };

    return (
        <Container id="products" maxWidth={"lg"}>
            <Grid container alignItems="center" justifyContent="center">
                <Grid item xs={2} sm={4} md={4}>
                    <Typography variant="h5" align="center">
                        Total: {total.toFixed(2)}$
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
