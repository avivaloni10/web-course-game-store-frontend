import {useEffect, useState} from "react";

import {Container, Grid} from "@mui/material";

import SingleProduct from "./SingleProduct";

export default function Products({games, singleProductOverride}) {
    const [showedGamesLimit, setShowedGamesLimit] = useState(12);
    const SingleProductView = singleProductOverride || SingleProduct

    const renderProducts = () => {
        console.log(games);
        return games.map((product) => {
            return (
                <Grid item key={product.id} xs={2} sm={4} md={4} display="flex" flexDirection={'column'}
                      alignItems="center">
                    {<SingleProductView product={product}/>}
                </Grid>
            );
        }).slice(0, showedGamesLimit);
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
