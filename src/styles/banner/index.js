import {Box, Button, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import {Colors} from "../theme";

export const BannerContainer = styled(Box)(({theme}) => ({
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    padding: "0px 0px",
    background: Colors.light_gray,
}));

export const BannerContent = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    maxWidth: 420,
    padding: "30px",
}));

export const BannerImage = styled("img")(({src, theme}) => ({
    src: `url(${src})`,
    width: "500px",
}));

export const BannerTitle = styled(Typography)(({theme}) => ({
    lineHeight: 1.5,
    fontSize: "72px",
    marginBottom: "20px",
}));

export const BannerDescription = styled(Typography)(({theme}) => ({
    lineHeight: 1.25,
    letterSpacing: 1.25,
    marginBottom: "3em",
}));

export const BannerShopButton = styled(Button, {
    shouldForwardProp: (prop) => prop !== "color",
    name: "MyShopButton",
    slot: "Root",
    overridesResolver: (props, styles) => [
        styles.root,
        props.color === "primary" && styles.primary,
        props.color === "secondary" && styles.secondary,
    ],
})(({theme}) => ({
    padding: "20px 0px",
    color: Colors.white,
    fontWeight: "bold",
    fontSize: "16px",
}));
