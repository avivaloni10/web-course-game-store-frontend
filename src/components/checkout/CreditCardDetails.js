import { useCallback, useEffect, useState } from "react";
import { Autocomplete, Card, CardContent, Grid, MenuItem, Select, TextField, Typography } from "@mui/material";
import InputFieldWithLabel from "./InputFieldWithLabel";

export default function CheckoutCreditCardDetails({ topLevelStyle, modifyCardDetails, modifyIsCardDetailsApproved }) {
    const [cardNumber, setCardNumber] = useState("");
    const [expiryMonth, setExpiryMonth] = useState("1");
    const [expiryYear, setExpiryYear] = useState(new Date().getFullYear().toString());
    const [name, setName] = useState("");
    const [cvv, setCvv] = useState("")

    const isNameInvalid = useCallback(() => {
        return name.trim().length < 4 || !name.trim().includes(" ");
    }, [name])

    const isCardNumberInvalid = useCallback(() => {
        const isMastercard = /^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/.test(cardNumber);
        const isVisa = /^4[0-9]{12}(?:[0-9]{3})?$/.test(cardNumber);
        const isAmericanExpress = /^3[47][0-9]{13}$/.test(cardNumber);
        return !isMastercard && !isVisa && !isAmericanExpress;
    }, [cardNumber])

    const isCvvInvalid = useCallback(() => {
        return !(/^[0-9]{3}$/.test(cvv));
    }, [cvv])

    const isExpiryInvalid = useCallback(() => {
        const now = new Date();
        const currentYear = now.getFullYear();
        const currentMonth = now.getMonth() + 1;
        const chosenMonth = Number.parseInt(expiryMonth);
        const chosenYear = Number.parseInt(expiryYear);
        return ((chosenMonth / 12) + chosenYear) < ((currentMonth / 12) + currentYear);
    }, [expiryMonth, expiryYear])

    const allFieldsValid = useCallback(() => {
        return (
            !isCardNumberInvalid() && !isExpiryInvalid() && !isCvvInvalid() && !isNameInvalid()
        );
    }, [isNameInvalid, isCardNumberInvalid, isExpiryInvalid, isCvvInvalid]);

    useEffect(() => {
        if (!allFieldsValid()) {
            modifyIsCardDetailsApproved(false);
            return;
        }
        modifyCardDetails({ name, cardNumber, expiryMonth, expiryYear, cvv });
        modifyIsCardDetailsApproved(true);
    }, [name, cardNumber, expiryMonth, expiryYear, cvv, allFieldsValid, modifyCardDetails, modifyIsCardDetailsApproved])

    return (
        <Card sx={topLevelStyle}>
            <CardContent>
                <Typography variant="h4" sx={{ mb: 3 }}>Payment Details</Typography>
                <InputFieldWithLabel label={"Name On Card"} onChangeSetter={setName} validator={isNameInvalid} />
                <Grid container spacing={1} sx={{ mt: 1, mb: 1 }}>
                    <Grid item sm={8} md={8} lg={8}>
                        <InputFieldWithLabel label={"Card Number"} onChangeSetter={setCardNumber} validator={isCardNumberInvalid} />
                    </Grid>
                    <Grid item sm={3} md={2} lg={2}>
                        <InputFieldWithLabel label={"CVV"} onChangeSetter={setCvv} validator={isCvvInvalid} />
                    </Grid>
                </Grid>
                <Typography variant="h5">Expiry Date</Typography>
                <Grid container spacing={1} sx={{ mt: 1, mb: 1 }}>
                    <Grid item sm={3} md={3} lg={3}>
                        <TextField select label="Expiry Month" fullWidth defaultValue={1}
                            onChange={e => setExpiryMonth(e.target.value)} error={isExpiryInvalid()}>
                            {Array.from({ length: 12 }, (_, i) => (i + 1).toString()).map(opt => (
                                <MenuItem key={opt} value={opt}>{opt}</MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item sm={3} md={3} lg={3}>
                        <TextField select label="Expiry Year" fullWidth defaultValue={new Date().getFullYear()}
                            onChange={e => setExpiryYear(e.target.value)} error={isExpiryInvalid()}>
                            {Array.from({ length: 14 }, (_, i) => (new Date().getFullYear() + i - 1).toString()).map(opt => (
                                <MenuItem key={opt} value={opt}>{opt}</MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}