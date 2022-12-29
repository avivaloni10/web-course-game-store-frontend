import {ThemeProvider} from "@mui/system";
import {Container, Typography, Box, Stack, Snackbar, Alert} from "@mui/material";
import {UIProvider} from "../../../context/ui";
import Appbar from "../../common/appbar";
import theme from "../../../styles/theme";
import Banner from "../../common/banner";
import Products from "../../common/products";
import Footer from "../../common/footer";
import Promotions from "../../common/promotions";
import SearchBox from "../../common/search";
import {useState} from "react";

export default function HomePage({
                                     productsTitle,
                                     productsFilter,
                                     hideAppbar,
                                     hideBanner,
                                     hidePromotions,
                                     hideProducts,
                                     hideFooter
                                 }) {
    const [search, setSearch] = useState("");
    const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState(false);

    const filter = product => {
        if (productsFilter && !productsFilter(product)) {
            return false
        }
        return product.name.toLowerCase().includes(search.toLowerCase())
    };

    const notifyUser = message => {
        setSnackbarMessage(message);
        setIsSnackbarOpen(true);
    };

    return (
        <ThemeProvider theme={theme}>
            <Container disableGutters maxWidth="xl" sx={{background: "#fff"}}>
                <Stack>
                    <UIProvider>
                        {hideAppbar ? null : <Appbar/>}
                        {hideBanner ? null : <Banner/>}
                        {hidePromotions ? null : <Promotions/>}
                        <SearchBox onSearch={setSearch}/>
                        <Box display="flex" justifyContent="center" sx={{p: 4}}>
                            <Typography variant="h4">{productsTitle}</Typography>
                        </Box>
                        {hideProducts ? null :
                            <Products filter={filter}/>}
                        {hideFooter ? null :
                            <Footer notifyUser={notifyUser}/>}
                    </UIProvider>
                </Stack>
            </Container>
            <Snackbar
                anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
                open={isSnackbarOpen}
                autoHideDuration={3000}
                onClose={() => setIsSnackbarOpen(false)}>
                <Alert onClose={() => setIsSnackbarOpen(false)} severity="success" sx={{width: '100%'}}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </ThemeProvider>
    );
}
