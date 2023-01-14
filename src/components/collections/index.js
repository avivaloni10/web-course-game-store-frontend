import * as React from 'react';
import './index.css'

import {ThemeProvider} from "@mui/system";
import {Container, Stack} from "@mui/material";
import Appbar from "../common/appbar";
import theme from "../../styles/theme";
import {AnimatedTree} from 'react-tree-graph';
import 'react-tree-graph/dist/style.css'
import Promotions from "../common/promotions";
import Footer from "../common/footer";
import {getGameCollections, searchGames} from "../../services";
import {useEffect, useState} from "react";

export default function Collections() {
    const [data, setData] = useState({
        name: 'Store',
        children: [],
    });

    useEffect(() => {
        async function fetchGameCollections() {
            let gameCollections = await getGameCollections()
            gameCollections = ({
                name: 'Store',
                children: await Promise.all(gameCollections.map(async gameCollection => {
                    console.log(gameCollection.games.join())
                    gameCollection['children'] = await searchGames(gameCollection.games.join());
                    return gameCollection;
                })),
            })
            console.log(gameCollections)
            setData(gameCollections);
        }

        fetchGameCollections();
    }, [])

    return (
        <ThemeProvider theme={theme}>
            <Container disableGutters maxWidth="xl" sx={{background: "#fff"}}>
                <Stack>
                    <Appbar/>
                    <Promotions/>
                    <AnimatedTree
                        data={data}
                        margins={{top: 20, bottom: 20, left: 100, right: 200}}
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
