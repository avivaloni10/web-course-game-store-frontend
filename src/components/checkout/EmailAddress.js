import { Card, CardContent, TextField, Typography } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import InputFieldWithLabel from "./InputFieldWithLabel";

export default function EmailAddress({ modifyEmail, modifyIsEmailApproved }) {

    const [emailAddr, setEmailAddr] = useState("");

    const isInvalidEmailAddress = useCallback(() => {

        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailAddr)) {
            return false;
        }
        return true;

    }, [emailAddr])

    useEffect(() => {
        if (isInvalidEmailAddress()) {
            modifyIsEmailApproved(false);
            return;
        }
        modifyIsEmailApproved(true);
        modifyEmail(emailAddr);
    }, [emailAddr, setEmailAddr, isInvalidEmailAddress, modifyEmail, modifyIsEmailApproved])

    return (
        <Card>
            <CardContent>
                <InputFieldWithLabel label={"EMAIL ADDRESS"} onChangeSetter={setEmailAddr} validator={isInvalidEmailAddress} />
            </CardContent>
        </Card>
    )
}