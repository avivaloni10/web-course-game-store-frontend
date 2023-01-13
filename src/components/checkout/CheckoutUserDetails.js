import { Grid } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import CheckoutCreditCardDetails from "./CreditCardDetails";
import CheckoutDeliveryDetails from "./DeliveryDetails";
import CheckoutEmailAddress from "./EmailAddress";

export default function CheckoutUserDetails({ setUserDetails, setUserDetailsApproved }) {
    const [email, setEmail] = useState();
    const [emailApproved, setEmailApproved] = useState(false);
    const [deliveryDetails, setDeliveryDetails] = useState({});
    const [deliveryDetailsApproved, setDeliveryDetailsApproved] = useState(false);
    const [cardDetails, setCardDetails] = useState({});
    const [cardDetailsApproved, setCardDetailsApproved] = useState(false);

    const haveInvalidDetails = useCallback(() => (
        !emailApproved || !deliveryDetailsApproved || !cardDetailsApproved
    ), [emailApproved, deliveryDetailsApproved, cardDetailsApproved])

    useEffect(() => {
        if (haveInvalidDetails()) {
            setUserDetails({})
            setUserDetailsApproved(false);
            return;
        }
        setUserDetails({ email, deliveryDetails, cardDetails })
        setUserDetailsApproved(true);
    }, [haveInvalidDetails, setUserDetails, setUserDetailsApproved, email, deliveryDetails, cardDetails])

    return (
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
        </Grid>

    )
}