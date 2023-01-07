import { useState } from "react";

import FitScreenIcon from "@mui/icons-material/FitScreen";
import { Stack, Tooltip } from "@mui/material";
import {
    Product,
    ProductActionButton,
    ProductActionsWrapper, ProductImage
} from "../../../styles/product";

import useDialogModal from "../../hooks/useDialogModal";

import { useNavigate } from "react-router-dom";
import { updateCartProductAmount } from "../../../utils";
import { useAuth } from "../../context/AuthContext";
import ProductMeta from "../common/products/ProductMeta";
import ProductDetail from "../common/product-detail";
import { getCartProduct } from "../../utils";

export default function CartProduct({ product }) {
    const { isUserSignedIn, getToken } = useAuth();
    const navigate = useNavigate()
    const [ProductDetailDialog, showProductDetailDialog] = useDialogModal(ProductDetail);
    const [showOptions, setShowOptions] = useState(false);

    const handleMouseEnter = () => {
        setShowOptions(true);
    };
    const handleMouseLeave = () => {
        setShowOptions(false);
    };

    const onAddToCart = async (product) => {
        if (!isUserSignedIn()) {
            navigate("/signin");
            return;
        }
        const authToken = await getToken();
        await updateCartProductAmount(authToken, product, 1, true);
    };

    return (
        <>
            <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <ProductImage src={product.cover} />
                <ProductActionsWrapper show={showOptions}>
                    <Stack direction="column">
                        <ProductActionButton onClick={() => showProductDetailDialog()}>
                            <Tooltip placement="left" title="Full view">
                                <FitScreenIcon color="primary" />
                            </Tooltip>
                        </ProductActionButton>
                    </Stack>
                </ProductActionsWrapper>
            </Product>
            <ProductMeta product={product}>

            </ProductMeta>
            <ProductDetailDialog product={product} />
        </>
    );
}
