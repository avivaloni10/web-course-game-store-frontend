import { Grid } from "@mui/material";
import { width } from "@mui/system";
import { useCallback, useState } from "react";
import { Colors } from "../../styles/theme";
import Header from "../common/header";
import HomePage from "../page-templates/home-page";
import CheckoutBuyNow from "./BuyNow";
import CheckoutUserDetails from "./CheckoutUserDetails";
import CheckoutCreditCardDetails from "./CreditCardDetails";
import CheckoutDeliveryDetails from "./DeliveryDetails";
import CheckoutEmailAddress from "./EmailAddress";

export default function Checkout(total) {
    const [userDetails, setUserDetails] = useState({});
    const [userDetailsApproved, setUserDetailsApproved] = useState(false);
    const detailsWidth = '50%'
    const topLevelStyle = { mb: 3, ml: '12%', width: detailsWidth }

    return (
        <HomePage
            title="Checkout"
            hideBanner
            hidePromotions
        >
            <Grid container spacing={1} >
                <Grid item sx={topLevelStyle}>
                    <Grid container alignItems={"center"} spacing={1}>
                        <CheckoutUserDetails setUserDetails={setUserDetails} setUserDetailsApproved={setUserDetailsApproved} />
                        <CheckoutBuyNow onClick={() => { }} disabled={!userDetailsApproved} />
                    </Grid>
                </Grid>
            </Grid>
        </HomePage>
    )
}