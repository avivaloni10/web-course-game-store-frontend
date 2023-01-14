import { Grid } from "@mui/material";
import { useState, useEffect } from "react";
import HomePage from "../page-templates/home-page";
import BuyNow from "./BuyNow";
import CartDetails from "./CartDetils";
import UserDetails from "./UserDetails";
import { useAuth } from "../../context/AuthContext";
import { getOrCreateCart, getCartGames } from "../../services";
import { calculateTotal } from "../../utils/cart-view-utils";

export default function Checkout() {

    const [cart, setCart] = useState({ games: [] });
    const [games, setGames] = useState([]);
    const [total, setTotal] = useState(0);
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
    }, [cart, games]);

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
                        <BuyNow onClick={() => { }} disabled={!userDetailsApproved} />
                    </Grid>
                </Grid>
                <Grid item sm={3} md={3} lg={3}>
                    <CartDetails cart={cart} games={games} total={total}></CartDetails>
                </Grid>
            </Grid>
        </HomePage>
    )
}