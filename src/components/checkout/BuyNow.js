import { Button, Grid } from "@mui/material"
export default function CheckoutBuyNow({ onClick, disabled }) {
    return (
        <Grid container justifyContent="center">
            <Grid item xs={10} sm={10} md={10} lg={10}>
                <Button variant="contained" onClick={onClick} disabled={disabled} fullWidth sx={{height: "60px"}}>Buy Now</Button>
            </Grid>
        </Grid>
    )
}