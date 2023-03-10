import {useEffect, useState} from "react";

import {Container, Grid} from "@mui/material";

import SingleProduct from "./SingleProduct";
import {useAuth} from "../../../context/AuthContext";
import {getOrCreateWishlist} from "../../../services";

export default function Products({products, singleProductOverride}) {
    const {getToken} = useAuth();

    const [wishlist, setWishlist] = useState({games: []});
    const SingleProductView = singleProductOverride || SingleProduct;

    useEffect(() => {
        async function fetchWishlist() {
            const authToken = await getToken();
            setWishlist(await getOrCreateWishlist(authToken));
        }

        fetchWishlist();
    }, [getToken]);

    const renderProducts = () => {
        return products.map((product) => {
            return (
                <Grid item key={product.id} xs={2} sm={4} md={4} display="flex" flexDirection={'column'}
                      alignItems="center">
                    {<SingleProductView product={product} wishlist={wishlist}/>}
                </Grid>
            );
        });
    }

    return (
        <Container id="products">
            <Grid
                container
                spacing={{xs: 2, md: 3}}
                justifyContent="center"
                sx={{margin: `20px 4px 10px 4px`}}
                columns={{xs: 4, sm: 8, md: 12}}
            >
                {renderProducts()}
            </Grid>
        </Container>
    );
}
