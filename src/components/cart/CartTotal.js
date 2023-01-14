import { Button, Card, CardContent, Grid, Typography } from "@mui/material"

export default function CartTotal({ total, onCheckoutClick }) {
    return (
        <Grid container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center" >
        <Card sx={{m: 3, boxShadow: 3, width: '50%'}}>
            <CardContent>
                <Grid container alignItems="center" justifyContent="center">
                    <Grid item xs={2} sm={4} md={4}>
                        <Typography variant="h5" align="center">
                            Total: {total.toFixed(2)}$
                        </Typography>
                    </Grid>
                    <Grid item xs={2} sm={4} md={4} textAlign="center">
                        <Button variant="contained" onClick={() => onCheckoutClick()} disabled={total === 0}>Checkout</Button>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
        </Grid>
    )
}