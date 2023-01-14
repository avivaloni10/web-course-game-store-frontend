import { Grid, List, Typography } from "@mui/material";
import { CheckoutProductImage } from "../../styles/product";

function CartGames({ cart, games }) {
    const gameScale = 400;
    const gameIdtoGame = new Map(games.map(g => [g.id, g]));
    const cartGames = cart.games.map(cg => {
        const game = gameIdtoGame.get(cg.id);

        return (
            <Grid container direction={"row"} sx={{ height: 70, mb: 2 }} key={cg.id}>
                <Grid item sm={2} sx={{ mr: 5 }}>
                    <CheckoutProductImage src={game.cover + `?height=${gameScale}&width=${gameScale}`} />
                </Grid>
                <Grid item sm={8}>
                    <Grid container direction={"column"}>
                        <Typography variant="subtitle2" sx={{ lineHeight: '1.5em', maxHeight: '3.2em', overflow: "hidden" }}>
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
        <List sx={{ overflow: "auto", height: "300px" }}>
            {cartGames}
        </List>
    )
}