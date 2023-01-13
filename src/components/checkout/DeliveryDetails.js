import { useCallback, useEffect, useState } from "react";
import { Card, CardContent, Container, TextField, Typography } from "@mui/material";
import InputFieldWithLabel from "./InputFieldWithLabel";

function isInputInvalid(value) {
    return () => {
        return value.length < 2
    }
}

export default function CheckoutDeliveryDetails({ modifyDeliveryDetails, modifyIsAddressApproved }) {

    const [name, setName] = useState("");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [region, setRegion] = useState("");
    const [postcode, setPostcode] = useState("");
    const country = "Israel";
    const [phone, setPhone] = useState("");

    const isPhoneInvalid = useCallback(() => {
        return !(/^[0-9]{10}$/.test(phone))
    }, [phone]);

    const isPostcodeInvalid = useCallback(() => {
        return !(/^[0-9]{7}$/.test(postcode))
    }, [postcode]);

    const isNameInvalid = useCallback(() => {
        return name.trim().length < 4 || !name.trim().includes(" ");
    }, [name])

    const allFieldsValid = useCallback(() => {
        return (
            !isNameInvalid() &&
            !isPhoneInvalid() &&
            !isInputInvalid(street)() &&
            !isInputInvalid(city)() &&
            !isInputInvalid(region)() &&
            !isPostcodeInvalid()
        );
    }, [street, city, region, isNameInvalid, isPhoneInvalid, isPostcodeInvalid]);

    useEffect(() => {
        if (!allFieldsValid()) {
            modifyIsAddressApproved(false);
            return;
        }
        modifyDeliveryDetails({ name, street, city, region, postcode, phone, country });
        modifyIsAddressApproved(true);
    }, [name, street, city, region, postcode, phone, country, allFieldsValid, modifyDeliveryDetails, modifyIsAddressApproved])

    return (
        <Card>
            <CardContent>
                <Typography variant="h4" sx={{ mb: 3 }}>Delivery Details</Typography>
                <InputFieldWithLabel label={"Full Name"} onChangeSetter={setName} validator={isNameInvalid} />
                <InputFieldWithLabel label={"Mobile"} onChangeSetter={setPhone} validator={isPhoneInvalid} />
                <InputFieldWithLabel label={"Street"} onChangeSetter={setStreet} validator={isInputInvalid(street)} />
                <InputFieldWithLabel label={"City"} onChangeSetter={setCity} validator={isInputInvalid(city)} />
                <InputFieldWithLabel label={"Region"} onChangeSetter={setRegion} validator={isInputInvalid(region)} />
                <InputFieldWithLabel label={"Postcode"} onChangeSetter={setPostcode} validator={isPostcodeInvalid} />
                <Typography textAlign={"left"} variant="h5">Country: {country}</Typography>
            </CardContent>
        </Card>
    )
}