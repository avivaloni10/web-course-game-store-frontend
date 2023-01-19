import { Card, CardContent, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { getOrdersWithSpends } from "../../services";

export default function OrdersWithSpends({notifySummaryFetchFailed}) {
    const { getToken } = useAuth();
    const [ordersWithSpends, setOrdersWithSpends] = useState({ ordersCount: 0, totalSpent: 0 })

    useEffect(() => {
        async function retrieveOrdersWithSpends() {
            const token = await getToken();
            if(!token){
                return;
            }
            const { result, error } = await getOrdersWithSpends(await getToken());
            if (error) {
                notifySummaryFetchFailed(error);
                return;
            };
            setOrdersWithSpends(result);
        }
        retrieveOrdersWithSpends()
    }, [getToken, notifySummaryFetchFailed]);

    return (
        <Card sx={{ m: 3, boxShadow: 3, width: '50%' }}>
            <CardContent>
                <Grid container alignItems="center" justifyContent="center">
                    <Grid item xs={2} sm={4} md={4}>
                        <Typography variant="h5" align="center">
                            Total spent: {ordersWithSpends.totalSpent}
                        </Typography>
                    </Grid>
                    <Grid item xs={2} sm={4} md={4} textAlign="center">
                        <Typography variant="h5">Total orders: {ordersWithSpends.ordersCount}</Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}