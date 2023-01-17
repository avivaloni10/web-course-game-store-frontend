import { Card, CardContent, Typography } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import InputFieldWithLabel from "./InputFieldWithLabel";

function isInputInvalid(value) {
    return () => {
        return value.length < 2
    }
}

export default function DeliveryDetails({ modifyDeliveryDetails, modifyIsAddressApproved }) {

    const [fullName, setFullName] = useState("");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [region, setRegion] = useState("");
    const [postcode, setPostcode] = useState("");
    const [mobile, setMobile] = useState("");

    const isMobileInvalid = useCallback(() => {
        return !(/^[0-9]{10}$/.test(mobile))
    }, [mobile]);

    const isPostcodeInvalid = useCallback(() => {
        return !(/^[0-9]{7}$/.test(postcode))
    }, [postcode]);

    const isFullNameInvalid = useCallback(() => {
        return fullName.trim().length < 4 || !fullName.trim().includes(" ");
    }, [fullName])

    const allFieldsValid = useCallback(() => {
        return (
            !isFullNameInvalid() &&
            !isMobileInvalid() &&
            !isInputInvalid(street)() &&
            !isInputInvalid(city)() &&
            !isInputInvalid(region)() &&
            !isPostcodeInvalid()
        );
    }, [street, city, region, isFullNameInvalid, isMobileInvalid, isPostcodeInvalid]);

    useEffect(() => {
        if (!allFieldsValid()) {
            modifyIsAddressApproved(false);
            return;
        }
        modifyDeliveryDetails({ fullName, street, city, region, postcode, mobile});
        modifyIsAddressApproved(true);
    }, [fullName, street, city, region, postcode, mobile, allFieldsValid, modifyDeliveryDetails, modifyIsAddressApproved])

    return (
        <Card>
            <CardContent>
                <Typography variant="h4" sx={{ mb: 3 }}>Delivery Details</Typography>
                <Typography textAlign={"left"} variant="subtitle1" sx={{mb: 2}}>* IL shipping only</Typography>
                <InputFieldWithLabel label={"Full Name"} onChangeSetter={setFullName} validator={isFullNameInvalid} />
                <InputFieldWithLabel label={"Mobile"} onChangeSetter={setMobile} validator={isMobileInvalid} />
                <InputFieldWithLabel label={"Street"} onChangeSetter={setStreet} validator={isInputInvalid(street)} />
                <InputFieldWithLabel label={"City"} onChangeSetter={setCity} validator={isInputInvalid(city)} />
                <InputFieldWithLabel label={"Region"} onChangeSetter={setRegion} validator={isInputInvalid(region)} />
                <InputFieldWithLabel label={"Postcode"} onChangeSetter={setPostcode} validator={isPostcodeInvalid} />
            </CardContent>
        </Card>
    )
}