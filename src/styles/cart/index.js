import styled from "@emotion/styled";
import { Box } from "@mui/system";

export const CartProductMetaWrapper = styled(Box)(({theme}) => ({
    padding: 4,
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    textAlign: "left"
}));