import {Tooltip, Typography} from "@mui/material";
import {
    Product,
    ProductImage,
} from "../../styles/product";

import {ProductMetaWrapper} from "../../styles/product";

export default function SinglePlatform({product}) {
    return (
        <>
            <Product>
                <ProductImage src={product.platformLogo}/>
            </Product>
            <ProductMetaWrapper>
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
            </ProductMetaWrapper>
        </>
    );
}
