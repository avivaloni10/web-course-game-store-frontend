import {Tooltip, Typography} from "@mui/material";

import {ProductMetaWrapper} from "../../../styles/product";

export default function ProductMeta({product, productMetaWrapperOverride}) {
    const ProductMetaWrapperOverride = productMetaWrapperOverride || ProductMetaWrapper
    return (
        <ProductMetaWrapperOverride>
            <Tooltip placement="top" title={product.name}>

                <Typography sx={{
                    display: '-webkit-box',
                    overflow: 'hidden',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 1
                }} variant={"h6"} lineHeight={2}>
                    {product.name}
                </Typography>
            </Tooltip>
            <Typography variant={"body1"}>
                ${product.price}
            </Typography>
        </ProductMetaWrapperOverride>
    );
}
