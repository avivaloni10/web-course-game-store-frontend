import { Grid, Snackbar, Alert } from "@mui/material";
import { useState, useEffect } from "react";
import HomePage from "../page-templates/home-page";
import BuyNow from "./BuyNow";
import CartDetails from "./CartDetils";
import UserDetails from "./UserDetails";
import { useAuth } from "../../context/AuthContext";
import { getOrCreateCart, getCartGames, deleteCart } from "../../services";
import { calculateTotal } from "../../utils/cart-view-utils";
import { createOrder } from "../../services";
import { useNavigate } from "react-router-dom";

export default function Checkout() {

    const navigate = useNavigate();
    const [cart, setCart] = useState({ games: [] });
    const [games, setGames] = useState([]);
    const [total, setTotal] = useState(0);
    const [isErrorSnackbarOpen, setIsErrorSnackbarOpen] = useState(false);
    const [isSuccessSnackbarOpen, setIsSuccessSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");
    const { getToken } = useAuth();

    const [userDetails, setUserDetails] = useState({});
    const [userDetailsApproved, setUserDetailsApproved] = useState(false);
    const detailsWidth = '50%'
    const topLevelStyle = { mb: 3, ml: '12%', width: detailsWidth }

    useEffect(() => {
        async function fetchGames() {
            const token = await getToken();
            const gs = await getCartGames(token);
            setGames(gs);
            const cart = await getOrCreateCart(token);
            setCart(cart);
        }
        fetchGames();
    }, [getToken]);

    useEffect(() => {
        setTotal(calculateTotal(games, cart));
    }, [cart, games, getToken]);

    const onBuyNow = async () => {
        const token = await getToken();
        const objectDetails = {
            games: cart.games,
            cardLastDigits: userDetails.cardDetails.cardNumber.substr(userDetails.cardDetails.cardNumber.length - 4),
            deliveryDetails: userDetails.deliveryDetails,
            email: userDetails.email
        }
        const { result, error } = await createOrder(token, objectDetails);
        if (error !== null) {
            setSnackbarMessage(error);
            console.log(error);
            setIsErrorSnackbarOpen(true);
            return;
        }
        setSnackbarMessage(`Order placed successfully. Order ID is: ${result.id}`);
        setIsSuccessSnackbarOpen(true);
        deleteCart(token, cart.id);
    }

    return (
        <HomePage
            title="Checkout"
            hideBanner
            hidePromotions
        >
            <Grid container spacing={5} flexDirection="row">
                <Grid item sx={topLevelStyle}>
                    <Grid container alignItems={"center"} spacing={1}>
                        <UserDetails setUserDetails={setUserDetails} setUserDetailsApproved={setUserDetailsApproved} />
                        <BuyNow onClick={onBuyNow} disabled={!userDetailsApproved} />
                    </Grid>
                </Grid>
                <Grid item sm={3} md={3} lg={3}>
                    <CartDetails cart={cart} games={games} total={total}></CartDetails>
                </Grid>
            </Grid>
            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                open={isErrorSnackbarOpen}
                autoHideDuration={3000}
                onClose={() => setIsErrorSnackbarOpen(false)}>
                <Alert onClose={() => setIsErrorSnackbarOpen(false)} severity="error" sx={{ width: '100%' }}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                open={isSuccessSnackbarOpen}
                autoHideDuration={3000}
                onClose={() => { setIsSuccessSnackbarOpen(false); navigate("/") }}>
                <Alert onClose={() => setIsSuccessSnackbarOpen(false)} severity="success" sx={{ width: '100%' }}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </HomePage>
    )
}