import { Grid, Typography, Button } from "@mui/material"

export default function DetailsHeader({ cart, returnToCart }) {
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