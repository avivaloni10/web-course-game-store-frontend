import {deleteWishlist, getOrCreateWishlist, getWishlistGames} from "../../services";
import Products from "../common/products";
import HomePage from "../page-templates/home-page";
import {useEffect, useState} from "react";
import {useAuth} from "../../context/AuthContext";
import {Button, Grid} from "@mui/material";

export default function Wishlist() {
    const {getToken} = useAuth();

    const [wishlist, setWishlist] = useState({games: [], children: []});

    useEffect(() => {
        async function fetchWishlist() {
            const token = await getToken();
            let wishlist = await getOrCreateWishlist(token);
            wishlist["children"] = wishlist.games.length !== 0 ? await getWishlistGames(token) : [];
            setWishlist(wishlist);
        }

        fetchWishlist();
    }, [getToken])

    const emptyWishlist = async () => {
        const token = await getToken();
        await deleteWishlist(token);
        let wishlist = await getOrCreateWishlist(token);
        wishlist["children"] = wishlist.games.length !== 0 ? await getWishlistGames(token) : [];
        setWishlist(wishlist);
    }

    return (
        <HomePage title="Wishlist" hideBanner>
            <Products products={wishlist.children}/>
            <Grid
                container
                spacing={{xs: 2, md: 3}}
                justifyContent="center"
                sx={{margin: `20px 4px 10px 4px`}}
                columns={{xs: 4, sm: 8, md: 12}}
            >
                <Button sx={{mt: 4, mb: 4}} variant="contained" onClick={emptyWishlist}>Empty Wishlist</Button>
            </Grid>
        </HomePage>
    );
}
