import * as React from 'react';

import {ThemeProvider} from "@mui/system";
import {Container, Stack} from "@mui/material";
import {UIProvider} from "../../context/ui";
import Appbar from "../common/appbar";
import theme from "../../styles/theme";

export default function Temp() {
    return (
        <ThemeProvider theme={theme}>
            <Container disableGutters maxWidth="xl" sx={{background: "#fff"}}>
                <Stack>
                    <UIProvider>
                        <Appbar/>
                        <div>
                            This page will be implemented soon!
                        </div>
                    </UIProvider>
                </Stack>
            </Container>
        </ThemeProvider>
    );
}
