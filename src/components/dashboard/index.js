import "./index.css";

import {useEffect} from "react";
import {ThemeProvider} from "@mui/system";
import {Container, Typography, Box, Stack} from "@mui/material";

import {UIProvider} from "../../context/ui";

import Appbar from "./appbar";
import theme from "../../styles/theme";
import Banner from "./banner";
import Products from "./products";
import Footer from "./footer";
import Promotions from "./promotions";
import SearchBox from "./search";

export default function Dashboard() {
    useEffect(() => {
        document.title = "React Material UI - Home";
    }, []);
    return (
        <ThemeProvider theme={theme}>
            <Container
                disableGutters
                maxWidth="xl"
                sx={{
                    background: "#fff",
                }}
            >
                <Stack>
                    <UIProvider>
                        <Appbar/>
                        <Banner/>
                        <Promotions/>
                        <SearchBox/>
                        <Box display="flex" justifyContent="center" sx={{p: 4}}>
                            <Typography variant="h4">Our Products</Typography>
                        </Box>
                        <Products/>
                        <Footer/>
                    </UIProvider>
                </Stack>
            </Container>
        </ThemeProvider>
    );
}
