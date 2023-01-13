import { useEffect, useState } from "react";

import { Button, Card, CardContent, Container, Grid, List, Typography } from "@mui/material";

import CartProduct from "./CartProduct";
import { getCartGames, getOrCreateCart } from "../../services";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import CartTotal from "./CartTotal";

export default function CartProducts() {
    const [games, setGames] = useState([]);
    const { getToken } = useAuth();
    const navigate = useNavigate();
    const [showedGamesLimit, setShowedGamesLimit] = useState(12);
    const [total, setTotal] = useState(0);
    const [cart, setCart] = useState({ games: [] });

    useEffect(() => {
        async function fetchGames() {
            const token = await getToken();
            const cart = await getOrCreateCart(token);
            setCart(cart);
            const gs = await getCartGames(token);
            console.log("gs:", gs);
            setGames(gs);
        }
        fetchGames();
    }, [getToken]);

    useEffect(() => {
        const gameIdToPrice = new Map(games.map(g => [g.id, g.price]));
        const t = cart.games.map(g => g.amount * gameIdToPrice.get(g.id)).reduce((prev, curr) => prev + curr, 0);
        setTotal(t);
    }, [cart, games])

    const notifyCartProductUpdated = (updatedCartProduct) => {

        var newProducts = cart.games.filter(g => g.id !== updatedCartProduct.id);
        if (updatedCartProduct.amount === 0) {
            const updatedGames = games.filter(g => g.id !== updatedCartProduct.id);
            setGames(updatedGames);
        }
        else {
            newProducts.push(updatedCartProduct);
        }
        setCart(c => ({
            ...c,
            games: newProducts
        }))
    }

    const renderProducts = games.map((product) => {
        const cartProduct = cart.games.filter(g => g.id === product.id)[0];
        return (
            <Grid item key={product.id} xs={2} sm={4} md={4} display="flex" flexDirection={'row'}
                alignItems="center">
                {<CartProduct cartProduct={cartProduct} product={product} notifyCartProductUpdated={notifyCartProductUpdated} />}
            </Grid>
        );
    }).slice(0, showedGamesLimit);
    const onCheckout = () => { navigate("/checkout") };

    return (
        <Container id="products" maxWidth={"lg"}>
            <CartTotal onCheckoutClick={onCheckout} total={total}/>
            <List>
                {renderProducts}
            </List>
            <CartTotal onCheckoutClick={onCheckout} total={total}/>
        </Container>
    );
}
