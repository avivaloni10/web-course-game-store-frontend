import { Grid } from "@mui/material";
import { width } from "@mui/system";
import { useCallback, useState } from "react";
import { Colors } from "../../styles/theme";
import Header from "../common/header";
import HomePage from "../page-templates/home-page";
import BuyNow from "./BuyNow";
import UserDetails from "./UserDetails";
import CreditCardDetails from "./CreditCardDetails";
import DeliveryDetails from "./DeliveryDetails";
import EmailAddress from "./EmailAddress";

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
                        <UserDetails setUserDetails={setUserDetails} setUserDetailsApproved={setUserDetailsApproved} />
                        <BuyNow onClick={() => { }} disabled={!userDetailsApproved} />
                    </Grid>
                </Grid>
            </Grid>
        </HomePage>
    )
}