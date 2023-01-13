import { Button } from "@mui/material";
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
    const topLevelStyle = {mb: 3, ml: '12%', width: detailsWidth}

    const isDisabled = useCallback(() => (
        !emailApproved || !deliveryDetailsApproved || !cardDetailsApproved
    ), [emailApproved, deliveryDetailsApproved, cardDetailsApproved])

    return (
        <HomePage
            title="Checkout"
            hideBanner
            hidePromotions
        >
            <CheckoutEmailAddress topLevelStyle={topLevelStyle} modifyEmail={setEmail} modifyIsEmailApproved={setEmailApproved} />
            <CheckoutDeliveryDetails topLevelStyle={topLevelStyle} modifyDeliveryDetails={setDeliveryDetails} modifyIsAddressApproved={setDeliveryDetailsApproved} />
            <CheckoutCreditCardDetails topLevelStyle={topLevelStyle} modifyCardDetails={setCardDetails} modifyIsCardDetailsApproved={setCardDetailsApproved} />
            <CheckoutBuyNow topLevelStyle={topLevelStyle} onClick={() => {}} disabled={isDisabled()}/>
        </HomePage>
    )
}