import { useEffect, useState } from "react";

import {
    Product, ProductAddToCart, ProductImage
} from "../../styles/product";

import useDialogModal from "../../hooks/useDialogModal";

import { useAuth } from "../../context/AuthContext";
import { getCartProduct, updateCartProductAmount } from "../../utils";
import ProductCount from "../common/product-count";
import ProductDetail from "../common/product-detail";
import ProductMeta from "../common/products/ProductMeta";
import "./CartProduct.css";
import { CartProductMetaWrapper } from "../../styles/cart";

export default function CartProduct({ product, notifyTotalUpdate }) {
    const { getToken } = useAuth();
    const [ProductDetailDialog, showProductDetailDialog] = useDialogModal(ProductDetail);
    const [showOptions, setShowOptions] = useState(false);
    const [cartProduct, setCartProduct] = useState({ amount: 1 });
    const [token, setToken] = useState();
    const productScale = 100;

    useEffect(() => {
        async function retrieveCartProduct() {
            const tkn = await getToken();
            const cp = await getCartProduct(tkn, product);
            setCartProduct(cp);
            setToken(tkn);
        }
        retrieveCartProduct();
    }, [getToken, product])

    const handleMouseEnter = () => {
        setShowOptions(true);
    };
    const handleMouseLeave = () => {
        setShowOptions(false);
    };

    const setNewCartProductAmount = (value) => {
        updateCartProductAmount(token, product, value, false);
        setCartProduct(p => ({
            ...p,
            amount: value,
        }));
        notifyTotalUpdate()
    }

    return (
        <>
            <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <ProductImage src={product.cover + `?height=${productScale}&width=${productScale}`} />
                {(showOptions) && (
                    <ProductAddToCart width={`${productScale}px`} show={showOptions} variant="contained" onClick={() => showProductDetailDialog()}>
                        Full View
                    </ProductAddToCart>
                )}
            </Product>
            <div className="text-center">
                <ProductMeta product={product} productMetaWrapperOverride={CartProductMetaWrapper} />
            </div>
            <div id={"cartProductCount"}>
                <ProductCount id={"cartProductCount"} key={cartProduct.amount} min={1} max={Math.min(product.availability, 9)} amountSetter={setNewCartProductAmount} initialValue={cartProduct && cartProduct.amount} />
            </div>
            <ProductDetailDialog product={product} initialValue={(cartProduct && cartProduct.amount) || 1} setNewCartProductAmount={setNewCartProductAmount} />
        </>
    );
}
