import * as React from 'react';

import {ThemeProvider} from "@mui/system";
import {Container, Stack} from "@mui/material";
import Appbar from "../common/appbar";
import theme from "../../styles/theme";
import {AnimatedTree} from 'react-tree-graph';
import 'react-tree-graph/dist/style.css'
import Promotions from "../common/promotions";
import Footer from "../common/footer";

export default function Collections() {
    const data = {
        name: 'Store',
        children: [
            {
                name: 'Collection1',
                children: [
                    {
                        name: 'Game1',
                    },
                    {
                        name: 'Game2',
                    },
                    {
                        name: 'Game3',
                    },
                    {
                        name: 'Game4',
                    },
                    {
                        name: 'Game5',
                    },
                    {
                        name: 'Game6',
                    },
                ]
            },
            {
                name: 'Collection2',
                children: [
                    {
                        name: 'Game1',
                    },
                    {
                        name: 'Game2',
                    },
                    {
                        name: 'Game3',
                    },
                    {
                        name: 'Game4',
                    },
                    {
                        name: 'Game5',
                    },
                    {
                        name: 'Game6',
                    },
                ]
            },
            {
                name: 'Collection3',
                children: [
                    {
                        name: 'Game1',
                    },
                    {
                        name: 'Game2',
                    },
                    {
                        name: 'Game3',
                    },
                    {
                        name: 'Game4',
                    },
                    {
                        name: 'Game5',
                    },
                    {
                        name: 'Game6',
                    },
                ]
            },
            {
                name: 'Collection4',
                children: [
                    {
                        name: 'Game1',
                    },
                    {
                        name: 'Game2',
                    },
                    {
                        name: 'Game3',
                    },
                    {
                        name: 'Game4',
                    },
                    {
                        name: 'Game5',
                    },
                    {
                        name: 'Game6',
                    },
                ]
            },
            {
                name: 'Collection5',
                children: [
                    {
                        name: 'Game1',
                    },
                    {
                        name: 'Game2',
                    },
                    {
                        name: 'Game3',
                    },
                    {
                        name: 'Game4',
                    },
                    {
                        name: 'Game5',
                    },
                    {
                        name: 'Game6',
                    },
                ]
            },
            {
                name: 'Collection6',
                children: [
                    {
                        name: 'Game1',
                    },
                    {
                        name: 'Game2',
                    },
                    {
                        name: 'Game3',
                    },
                    {
                        name: 'Game4',
                    },
                    {
                        name: 'Game5',
                    },
                    {
                        name: 'Game6',
                    },
                ]
            },
        ]
    };

    return (
        <ThemeProvider theme={theme}>
            <Container disableGutters maxWidth="xl" sx={{background: "#fff"}}>
                <Stack>
                    <Appbar/>
                    <Promotions/>
                    <AnimatedTree
                        data={data}
                        margins={{top: 20, bottom: 20, left: 200, right: 200}}
                        height={36 * 75}
                        width={3 * 500}
                        textProps={{x: -25, y: 25}}
                        nodeProps={{r: 12.5}}
                    />
                    <Footer/>
                </Stack>
            </Container>
        </ThemeProvider>
    );
}
