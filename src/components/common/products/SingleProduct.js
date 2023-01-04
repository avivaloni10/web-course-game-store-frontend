import {useState} from "react";

import {Stack, Tooltip} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import FitScreenIcon from "@mui/icons-material/FitScreen";
import {
    Product,
    ProductActionButton,
    ProductActionsWrapper,
    ProductAddToCart,
    ProductFavButton,
    ProductImage,
} from "../../../styles/product";

import useDialogModal from "../../../hooks/useDialogModal";

import ProductDetail from "../product-detail";
import ProductMeta from "./ProductMeta";
import {Colors} from "../../../styles/theme";
import {useAuth} from "../../../context/AuthContext";
import {useNavigate} from "react-router-dom";

export default function SingleProduct({product}) {
    const {isUserSignedIn} = useAuth()
    const navigate = useNavigate()
    const [ProductDetailDialog, showProductDetailDialog] = useDialogModal(ProductDetail);
    const [showOptions, setShowOptions] = useState(false);

    const handleMouseEnter = () => {
        setShowOptions(true);
    };
    const handleMouseLeave = () => {
        setShowOptions(false);
    };

    const onAddToCart = product => {
        if (!isUserSignedIn()) {
            navigate("/signin");
            return;
        }
        console.log(product);
    }

    return (
        <>
            <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <ProductImage src={product.cover}/>
                <ProductFavButton isfav={0} onClick={() => product.isInWishList = !product.isInWishList}>
                    <Tooltip placement="left" title="add to wishlist">
                        {product.isInWishList ? <FavoriteIcon sx={{color: Colors.danger}}/> : <FavoriteIcon/>}
                    </Tooltip>
                </ProductFavButton>
                {(showOptions) && (
                    <ProductAddToCart show={showOptions} variant="contained" onClick={() => onAddToCart(product)}>
                        Add to cart
                    </ProductAddToCart>
                )}
                <ProductActionsWrapper show={showOptions}>
                    <Stack direction="column">
                        <ProductActionButton>
                            <Tooltip placement="left" title="share this product">
                                <ShareIcon color="primary"/>
                            </Tooltip>
                        </ProductActionButton>
                        <ProductActionButton onClick={() => showProductDetailDialog()}>
                            <Tooltip placement="left" title="Full view">
                                <FitScreenIcon color="primary"/>
                            </Tooltip>
                        </ProductActionButton>
                    </Stack>
                </ProductActionsWrapper>
            </Product>
            <ProductMeta product={product}/>
            <ProductDetailDialog product={product}/>
        </>
    );
}
