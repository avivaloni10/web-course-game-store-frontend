import { Grid } from "@mui/material";
import { width } from "@mui/system";
import { useCallback, useState } from "react";
import { Colors } from "../../styles/theme";
import Header from "../common/header";
import HomePage from "../page-templates/home-page";
import CheckoutBuyNow from "./BuyNow";
import CheckoutCreditCardDetails from "./CreditCardDetails";
import CheckoutDeliveryDetails from "./DeliveryDetails";
import CheckoutEmailAddress from "./EmailAddress";

export default function Checkout(total) {
    const [email, setEmail] = useState();
    const [emailApproved, setEmailApproved] = useState(false);
    const [deliveryDetails, setDeliveryDetails] = useState({});
    const [deliveryDetailsApproved, setDeliveryDetailsApproved] = useState(false);
    const [cardDetails, setCardDetails] = useState({});
    const [cardDetailsApproved, setCardDetailsApproved] = useState(false);
    const detailsWidth = '50%'
    const topLevelStyle = { mb: 3, ml: '12%', width: detailsWidth }

    const isDisabled = useCallback(() => (
        !emailApproved || !deliveryDetailsApproved || !cardDetailsApproved
    ), [emailApproved, deliveryDetailsApproved, cardDetailsApproved])

    return (
        <HomePage
            title="Checkout"
            hideBanner
            hidePromotions
        >
            <Grid container spacing={1} >
                <Grid item sx={topLevelStyle}>
                    <Grid container alignItems={"center"} spacing={1}>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <CheckoutEmailAddress modifyEmail={setEmail} modifyIsEmailApproved={setEmailApproved} />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <CheckoutDeliveryDetails modifyDeliveryDetails={setDeliveryDetails} modifyIsAddressApproved={setDeliveryDetailsApproved} />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <CheckoutCreditCardDetails modifyCardDetails={setCardDetails} modifyIsCardDetailsApproved={setCardDetailsApproved} />
                        </Grid>
                        <CheckoutBuyNow onClick={() => { }} disabled={isDisabled()} />
                    </Grid>
                </Grid>
            </Grid>
        </HomePage>
    )
}