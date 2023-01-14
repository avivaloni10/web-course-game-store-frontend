import { Grid } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import CreditCardDetails from "./CreditCardDetails";
import DeliveryDetails from "./DeliveryDetails";
import EmailAddress from "./EmailAddress";

export default function UserDetails({ setUserDetails, setUserDetailsApproved }) {
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
                <EmailAddress modifyEmail={setEmail} modifyIsEmailApproved={setEmailApproved} />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <DeliveryDetails modifyDeliveryDetails={setDeliveryDetails} modifyIsAddressApproved={setDeliveryDetailsApproved} />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CreditCardDetails modifyCardDetails={setCardDetails} modifyIsCardDetailsApproved={setCardDetailsApproved} />
            </Grid>
        </Grid>

    )
}