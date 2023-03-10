import styled from "@emotion/styled";
import {Colors} from "../theme";
import {Button, IconButton} from "@mui/material";
import {Box} from "@mui/system";
import {slideInBottom, slideInRight} from "../../animation";

export const Product = styled(Box)(({theme}) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    position: "relative",
}));

export const ProductImage = styled("img")(({src}) => ({
    src: `url(${src})`,
    width: "100%",
    height: "100%",
    background: Colors.light_gray,
    padding: '10px',
}));

export const CheckoutProductImage = styled("img")(({src}) => ({
    src: `url(${src})`,
    width: "100%",
    height: "100%",
    background: Colors.light_gray,
    padding: '5px',
}));

export const ProductActionButton = styled(IconButton)(() => ({
    background: Colors.white,
    margin: 4,
}));

export const ProductFavButton = styled(ProductActionButton)(({isfav, theme}) => ({
    color: isfav ? Colors.primary : Colors.light,
    position: "absolute",
    right: 0,
    top: 0,
}));

export const ProductAddToCart = styled(Button, {
    shouldForwardProp: (prop) => prop !== "show",
})(({show, theme, width}) => ({
    fontSize: "12px",
    position: "absolute",
    bottom: "2%",
    width: width || "300px",
    padding: "10px 5px",
    animation:
        show &&
        `${slideInBottom} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
    background: Colors.secondary,
    opacity: 0.9,
}));

export const ProductMetaWrapper = styled(Box)(({theme}) => ({
    padding: 4,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
}));

export const ProductActionsWrapper = styled(Box)(({show, theme}) => ({
    display: show ? 'visible' : 'none',
    position: "absolute",
    right: 0,
    top: '20%',
    animation: show && `${slideInRight} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
}));
