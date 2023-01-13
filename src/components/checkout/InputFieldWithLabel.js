import { Typography, TextField } from "@mui/material"
export default function InputFieldWithLabel({ label, onChangeSetter, validator}) {
    return (
        <>
            <Typography textAlign={"left"} variant="h5">
                {label}
            </Typography>
            <TextField onChange={(e) => onChangeSetter(e.target.value)} error={validator()} sx={{mb: 1}}
                id="email-address" type={"search"} fullWidth />
        </>
    )
}