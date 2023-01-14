import styled from "@emotion/styled";
import CloseIcon from "@mui/icons-material/Close";
import FacebookIcon from "@mui/icons-material/Facebook";
import FavoriteIcon from "@mui/icons-material/Favorite";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import {Box, Button, Dialog, DialogContent, DialogTitle, IconButton, Slide, Typography} from "@mui/material";
import ProductCount from "../product-count";

import {useNavigate} from "react-router-dom";
import {useAuth} from "../../../context/AuthContext";
import {Product, ProductImage} from "../../../styles/product";
import {Colors} from "../../../styles/theme";
import {updateCartProductAmount} from "../../../utils";
import {useEffect, useState} from "react";
import {getGame} from "../../../services";

function SlideTransition(props) {
    return <Slide direction="down" {...props} />;
}

const ProductDetailWrapper = styled(Box)(({theme}) => ({
    display: "flex",
    padding: theme.spacing(4),
}));

const ProductDetailInfoWrapper = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    maxWidth: 500,
    lineHeight: 1.5,
}));

export default function ProductDetail({open, onClose, product, initialValue, setNewCartProductAmount}) {
    const [game, setGame] = useState(product);
    const {isUserSignedIn, getToken} = useAuth();
    const navigate = useNavigate()

    useEffect(() => {
        async function fetchGame() {
            setGame(await getGame(product.id));
        }

        fetchGame();
    }, [])

    const onAddToCart = async (product) => {
        if (!isUserSignedIn()) {
            navigate("/signin");
            return;
        }
        const authToken = await getToken();
        await updateCartProductAmount(authToken, product, amountToSet);
        setNewCartProductAmount(amountToSet);
    };

    var amountToSet = initialValue || 1;
    const onSetAmountToAdd = (value) => {
        amountToSet = value;
    }

    return (
        <Dialog
            TransitionComponent={SlideTransition}
            variant="permanant"
            open={open}
            fullScreen
        >
            <DialogTitle
                sx={{
                    background: Colors.secondary,
                }}
            >
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent={"space-between"}
                >
                    Product title
                    <IconButton onClick={onClose}>
                        <CloseIcon/>
                    </IconButton>
                </Box>
            </DialogTitle>
            <DialogContent>
                <ProductDetailWrapper display={"flex"} flexDirection={"row"}>
                    <Product sx={{mr: 4}}>
                        <ProductImage src={product.cover}/>
                    </Product>
                    <ProductDetailInfoWrapper>
                        <Typography variant="subtitle">ID: {game.id}</Typography>
                        <Typography variant="subtitle">Availability: {product.availability} in stock</Typography>
                        <Typography sx={{lineHeight: 2}} variant="h4">
                            {product.name}
                        </Typography>
                        <Typography variant="body">
                            {game.summary}
                        </Typography>
                        <Box
                            sx={{mt: 4}}
                            display="flex"
                            alignItems="center"
                            justifyContent="space-between"
                        >
                            <ProductCount min={1} max={Math.min(product.availability, 9)} amountSetter={onSetAmountToAdd}
                                          initialValue={amountToSet}/>
                            <Button variant="contained" onClick={() => onAddToCart(product)}>Update Cart</Button>
                        </Box>
                        <Box
                            display="flex"
                            alignItems="center"
                            sx={{mt: 4, color: Colors.light}}
                        >
                            <FavoriteIcon sx={{mr: 2}}/>
                            Add to wishlist
                        </Box>
                        <Box
                            sx={{
                                mt: 4,
                                color: Colors.dove_gray,
                            }}
                        >
                            <FacebookIcon/>
                            <TwitterIcon sx={{pl: 2}}/>
                            <InstagramIcon sx={{pl: 2}}/>
                        </Box>
                    </ProductDetailInfoWrapper>
                </ProductDetailWrapper>
            </DialogContent>
        </Dialog>
    );
}
