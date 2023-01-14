import { TextField } from "@mui/material";
import { useState } from "react";
export default function InputFieldWithLabel({ label, onChangeSetter, validator }) {

    const [val, setVal] = useState("");

    const isInvalid = () => (
        val !== "" && validator()
    )

    const onValueChanged = (e) => {
        onChangeSetter(e.target.value);
        setVal(e.target.value);
    }

    return (
        <TextField onChange={onValueChanged} error={isInvalid()} sx={{ mb: 1 }}
            type={"search"} fullWidth label={label} />
    )
}