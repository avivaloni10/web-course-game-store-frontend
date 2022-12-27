import {Colors} from "../theme";
import {Typography} from "@mui/material";
import {Box, styled} from "@mui/system";

export const PromotionsContainer = styled(Box)(({theme}) => ({
    padding: "40px 0px 40px 0px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    background: Colors.secondary,
}));

export const MessageText = styled(Typography)(({theme}) => ({
    fontFamily: '"Montez", "cursive"',
    fontSize: "3rem",
    color: Colors.white,
}));
