import { Button, Card, Grid, List, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { CheckoutProductImage } from "../../styles/product";

function DetailsHeader({ cart, returnToCart }) {
    return (
        <Grid container direction={"row"} justifyContent={"space-between"}>
            <Typography variant="h6">
                {cart.games.length} Items
            </Typography>
            <Button variant="contained" onClick={returnToCart}>
                Edit
            </Button>
        </Grid>
    )
}

function DetailsFooter({ total }) {
    const LabelWithValue = ({ label, value }) => (
        <Grid container direction={"row"} justifyContent={"space-between"}>
            <Typography>
                {label}
            </Typography>
            <Typography>
                {value}
            </Typography>
        </Grid>
    )
    return (
        <Grid container>
            <LabelWithValue label={"Subtotal"} value={total.toFixed(2)} />
            <LabelWithValue label={"Delivery"} value={"free"} />
            <LabelWithValue label={"Total"} value={total.toFixed(2)} />
        </Grid>
    )
}

function CartGames({ cart, games }) {
    const gameScale = 400;
    const gameIdtoGame = new Map(games.map(g => [g.id, g]));
    const cartGames = cart.games.map(cg => {
        const game = gameIdtoGame.get(cg.id);

        return (
            <Grid container direction={"row"} sx={{height: 70, mb: 2}} key={cg.id}>
                <Grid item sm={2} sx={{mr:5}}>
                    <CheckoutProductImage src={game.cover + `?height=${gameScale}&width=${gameScale}`} />
                </Grid>
                <Grid item sm={8}>
                    <Grid container direction={"column"}>
                        <Typography variant="subtitle2" sx={{lineHeight: '1.5em', maxHeight: '3.2em', overflow: "hidden"}}>
                            {game.name}
                        </Typography>
                        <Typography variant="subtitle1">
                            Qty: {cg.amount}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        );
    });

    return (
        <List sx={{overflow: "auto", height: "300px"}}>
            {cartGames}
        </List>
    )
}

export default function CartDetails({ cart, games, total }) {
    const navigate = useNavigate();
    const cardItemsWidth = "90%"

    const returnToCart = () => {
        navigate("/cart");
    }

    return (
        <Card>
            <Grid container flexDirection={"column"} alignItems={"center"}>
                <Grid item width={cardItemsWidth}>
                    <DetailsHeader cart={cart} returnToCart={returnToCart} />
                </Grid>
                <hr style={{ width: cardItemsWidth }} />
                <CartGames cart={cart} games={games} />
                <hr style={{ width: cardItemsWidth }} />
                <Grid item width={cardItemsWidth}>
                    <DetailsFooter total={total} />
                </Grid>
            </Grid>
        </Card>
    )

}