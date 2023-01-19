import { List, Snackbar, Alert, Card, CardContent, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { deleteOrder, getOrders } from "../../services";
import HomePage from "../page-templates/home-page";
import OrdersWithSpends from "./OrdersWithSpends";
import SingleOrder from "./SingleOrder";

export default function Orders() {
    const { getToken } = useAuth();
    const [orders, setOrders] = useState([]);
    const [isErrorSnackbarOpen, setIsErrorSnackbarOpen] = useState(false);
    const [isSuccessSnackbarOpen, setIsSuccessSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");

    useEffect(() => {
        async function retrieveOrders() {
            const token = await getToken();
            const ords = await getOrders(token);
            setOrders(ords);
        }
        retrieveOrders();
    }, [getToken]);

    const onOrderDelete = async (order) => {
        const token = await getToken();
        const error = await deleteOrder(token, order.id);
        if (error) {
            setSnackbarMessage(error);
            setIsErrorSnackbarOpen(true);
            return;
        }
        setOrders(ords => ords.filter(o => o.id !== order.id));
        setSnackbarMessage("Cancelled order successfully");
        setIsSuccessSnackbarOpen(true);
    }

    const Orders = () => (
        orders.map(order => (
            <SingleOrder key={order.id} order={order} onDeletePressed={onOrderDelete} />
        ))
    )

    const notifySummaryFetchFailed = (error) => {
        setSnackbarMessage(error);
        setIsErrorSnackbarOpen(true);
    }

    return (
        <HomePage hideBanner>
            <Grid container direction="column" alignItems="center" justify="center">
                <OrdersWithSpends notifySummaryFetchFailed={notifySummaryFetchFailed} />
            </Grid>
            <List>
                <Orders />
            </List>
            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                open={isErrorSnackbarOpen}
                autoHideDuration={3000}
                onClose={() => setIsErrorSnackbarOpen(false)}>
                <Alert onClose={() => setIsErrorSnackbarOpen(false)} severity="error" sx={{ width: '100%' }}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                open={isSuccessSnackbarOpen}
                autoHideDuration={3000}
                onClose={() => { setIsSuccessSnackbarOpen(false); }}>
                <Alert onClose={() => setIsSuccessSnackbarOpen(false)} severity="success" sx={{ width: '100%' }}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </HomePage>
    )

}