import { ThemeProvider } from "@mui/system";
import { Container, Typography, Box, Stack, Snackbar, Alert } from "@mui/material";
import theme from "../../../styles/theme";
import Footer from "../../common/footer";
import { useState } from "react";
import Header from "../../common/header";

export default function HomePage({
    title,
    hideAppbar,
    hideBanner,
    hidePromotions,
    hideFooter,
    children,
}) {
    const [search, setSearch] = useState("");
    const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState(false);

    const notifyUser = message => {
        setSnackbarMessage(message);
        setIsSnackbarOpen(true);
    };

    return (
        <ThemeProvider theme={theme}>
            <Container disableGutters maxWidth="xl" sx={{ background: "#fff" }}>
                <Stack>
                    <Header
                        hideAppbar={hideAppbar}
                        hideBanner={hideBanner}
                        hidePromotions={hidePromotions}
                        setSearch={setSearch} />

                    <Box display="flex" justifyContent="center" sx={{ p: 4 }}>
                        <Typography variant="h4">{title}</Typography>
                    </Box>
                    {children}
                    {hideFooter ? null :
                        <Footer notifyUser={notifyUser} />}
                </Stack>
            </Container>
            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                open={isSnackbarOpen}
                autoHideDuration={3000}
                onClose={() => setIsSnackbarOpen(false)}>
                <Alert onClose={() => setIsSnackbarOpen(false)} severity="success" sx={{ width: '100%' }}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </ThemeProvider>
    );
}
