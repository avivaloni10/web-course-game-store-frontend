import { Card, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {DetailsHeader} from "./DetailsHeader";
import {DetailsFooter} from "./DetailsFooter";
import {CartGames} from "./CartGames";

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