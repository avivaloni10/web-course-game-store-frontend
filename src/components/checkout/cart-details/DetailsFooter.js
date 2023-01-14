import { Grid, Typography } from "@mui/material"

export default function DetailsFooter({ total }) {
    const LabelWithValue = ({ label, value }) => (
        <Grid container direction={"row"} justifyContent={"space-between"}>
            <Typography>
                {label}
            </Typography>
            <Typography>
                {value}
            </Typography>
        </Grid>
    )
    return (
        <Grid container>
            <LabelWithValue label={"Subtotal"} value={total} />
            <LabelWithValue label={"Delivery"} value={"free"} />
            <LabelWithValue label={"Total"} value={total} />
        </Grid>
    )
}