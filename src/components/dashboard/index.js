import {ThemeProvider} from "@mui/system";
import {Container, Typography, Box, Stack} from "@mui/material";
import {UIProvider} from "../../context/ui";
import Appbar from "../common/appbar";
import theme from "../../styles/theme";
import Banner from "../common/banner";
import Products from "../common/products";
import Footer from "../common/footer";
import Promotions from "../common/promotions";
import SearchBox from "../common/search";
import {useState} from "react";

export default function Dashboard() {
    const [search, setSearch] = useState("");

    return (
        <ThemeProvider theme={theme}>
            <Container disableGutters maxWidth="xl" sx={{background: "#fff"}}>
                <Stack>
                    <UIProvider>
                        <Appbar/>
                        <Banner/>
                        <Promotions/>
                        <SearchBox onSearch={setSearch}/>
                        <Box display="flex" justifyContent="center" sx={{p: 4}}>
                            <Typography variant="h4">Our Products</Typography>
                        </Box>
                        <Products filter={product => product.name.toLowerCase().includes(search.toLowerCase())}/>
                        <Footer/>
                    </UIProvider>
                </Stack>
            </Container>
        </ThemeProvider>
    );
}
