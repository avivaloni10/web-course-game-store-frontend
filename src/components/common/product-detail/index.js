import { Dialog, DialogTitle, Slide, Box, IconButton, DialogContent, Typography, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import styled from "@emotion/styled";
import ProductCount from "../product-count";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { Colors } from "../../../styles/theme";
import { Product, ProductImage } from "../../../styles/product";
import { useAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { updateCartProductAmount } from "../../../utils";

function SlideTransition(props) {
    return <Slide direction="down" {...props} />;
}

const ProductDetailWrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    padding: theme.spacing(4),
}));

const ProductDetailInfoWrapper = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    maxWidth: 500,
    lineHeight: 1.5,
}));

export default function ProductDetail({ open, onClose, product }) {
    const { isUserSignedIn, getToken } = useAuth();
    const navigate = useNavigate()

    const onAddToCart = async (product) => {
        if (!isUserSignedIn()) {
            navigate("/signin");
            return;
        }
        const authToken = await getToken();
        await updateCartProductAmount(authToken, product, amountToAdd, true);
    };

    var amountToAdd = 1;
    const onSetAmountToAdd = (value) => {
        amountToAdd = value;
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
                        <CloseIcon />
                    </IconButton>
                </Box>
            </DialogTitle>
            <DialogContent>
                <ProductDetailWrapper display={"flex"} flexDirection={"row"}>
                    <Product sx={{ mr: 4 }}>
                        <ProductImage src={product.cover} />
                    </Product>
                    <ProductDetailInfoWrapper>
                        <Typography variant="subtitle">SKU: 123</Typography>
                        <Typography variant="subtitle">Availability: {product.availability} in stock</Typography>
                        <Typography sx={{ lineHeight: 2 }} variant="h4">
                            {product.name}
                        </Typography>
                        <Typography variant="body">
                            {product.description}
                        </Typography>
                        <Box
                            sx={{ mt: 4 }}
                            display="flex"
                            alignItems="center"
                            justifyContent="space-between"
                        >
                            <ProductCount min={1} max={Math.min(product.availability, 9)} amountSetter={onSetAmountToAdd} />
                            <Button variant="contained" onClick={() => onAddToCart(product)}>Add to Cart</Button>
                        </Box>
                        <Box
                            display="flex"
                            alignItems="center"
                            sx={{ mt: 4, color: Colors.light }}
                        >
                            <FavoriteIcon sx={{ mr: 2 }} />
                            Add to wishlist
                        </Box>
                        <Box
                            sx={{
                                mt: 4,
                                color: Colors.dove_gray,
                            }}
                        >
                            <FacebookIcon />
                            <TwitterIcon sx={{ pl: 2 }} />
                            <InstagramIcon sx={{ pl: 2 }} />
                        </Box>
                    </ProductDetailInfoWrapper>
                </ProductDetailWrapper>
            </DialogContent>
        </Dialog>
    );
}
