import DeleteIcon from '@mui/icons-material/Delete';
import { Button, Card, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getGames } from "../../services";
import { CheckoutProductImage } from "../../styles/product";

export default function SingleOrder({ order, onDeletePressed }) {

    const [orderGames, setOrderGames] = useState([]);

    useEffect(() => {
        async function retrieveGames() {
            const gameFullDetails = await getGames(order.games.map(g => g.id));
            setOrderGames(gameFullDetails);
        }
        retrieveGames()

    }, [])

    const FirstGamesOfOrder = () => {
        const gameImageResolution = 200;
        const firstThreeOrderGames = orderGames.slice(0, 3);

        const gamesAsView = firstThreeOrderGames.map(game => {
            return (
                <Grid key={game.id} item xs={3} sm={3} md={3} lg={3} display="flex" flexDirection={'row'} alignItems="center">
                    <CheckoutProductImage src={game.cover + `?height=${gameImageResolution}&width=${gameImageResolution}`} />
                </Grid>
            );
        })

        return (
            <>
                {gamesAsView}
                {orderGames.length > 3 && <Grid item xs={0.5} sm={0.5} md={0.5} lg={0.5} display="flex" flexDirection={'row'} alignItems="center" marginLeft={2}>+{orderGames.length - 3} more</Grid>}
            </>
        )

    }

    const OrderDescription = () => {
        const fullAddress = order.deliveryDetails.street + ", " + order.deliveryDetails.city + ", " + order.deliveryDetails.region + ", " + order.deliveryDetails.postcode + ", Israel";
        return (
            <>
                <Typography variant="h6">
                    Order id: {order.id}
                </Typography>
                <Typography variant="subtitle1">
                    Email: {order.email}
                </Typography>
                <Typography variant="subtitle2">
                    Deliver To: {order.deliveryDetails.fullName}, {order.deliveryDetails.mobile}
                </Typography>
                <Typography variant="subtitle2">
                    Deliver At: {fullAddress}
                </Typography>
            </>
        )
    }

    const OrderTotal = () => {
        const total = order.games.reduce((total, game) => total + (game.buyPrice * game.amount), 0);
        return (
            <>
                <Typography variant='h5'>
                    Total: {total.toFixed(2)}$
                </Typography>
            </>
        )
    }

    return (
        <Card>
            <Grid spacing={1.5} container display="flex" flexDirection={'row'} alignItems={"center"}>
                <Grid item xs={4} sm={4} md={4} lg={4} display="flex" flexDirection={'row'} alignItems={"center"}>
                    <FirstGamesOfOrder />
                </Grid>
                <Grid item xs={4} sm={4} md={4} lg={4}>
                    <OrderDescription />
                </Grid>
                <Grid item xs={2} sm={2} md={2} lg={2}>
                    <OrderTotal />
                </Grid>
                <Grid item xs={2} sm={2} md={2} lg={2} sx={{ position: "absolute", right: 0, textAlign: "center" }}>
                    <Button variant="contained" startIcon={<DeleteIcon />} onClick={async () => await onDeletePressed(order)} sx={{ background: "red" }}>
                        Cancel Order
                    </Button>
                </Grid>
            </Grid>
        </Card>
    )
}