import {Container, Grid, TextField} from "@mui/material";

import {styled} from "@mui/system";
import {Colors} from "../../../styles/theme";
import {useEffect, useState} from "react";
import {getHighestRatingGames, searchGames} from "../../../services";

const SearchFilter = styled(TextField)(({theme}) => ({
    ".MuiInputLabel-root": {
        color: Colors.secondary,
    },

    ".MuiInput-root::before": {
        borderBottom: `1px solid ${Colors.secondary}`,
    },
}));

export default function SearchFilters({
                                          filterName1, filterName2, filterName3,
                                          filter1, filter2, filter3,
                                          setFilter1, setFilter2, setFilter3
                                      }) {
    return (
        <Container id="products">
            <Grid
                container
                spacing={{xs: 2, md: 3}}
                justifyContent="center"
                sx={{margin: `20px 4px 20px 4px`}}
                columns={{xs: 4, sm: 8, md: 12}}
            >
                <Grid item key="filter1" xs={2} sm={4} md={4} display="flex" flexDirection={'column'}
                      alignItems="center">
                    {<SearchFilter color="primary" label={filterName1} variant="standard"
                                   value={filter1} onChange={(e) => setFilter1(e.target.value)}/>}
                </Grid>
                <Grid item key="filter2" xs={2} sm={4} md={4} display="flex" flexDirection={'column'}
                      alignItems="center">
                    {<SearchFilter color="primary" label={filterName2} variant="standard"
                                   value={filter2} onChange={(e) => setFilter2(e.target.value)}/>}
                </Grid>
                <Grid item key="filter3" xs={2} sm={4} md={4} display="flex" flexDirection={'column'}
                      alignItems="center">
                    {<SearchFilter color="primary" label={filterName3} variant="standard"
                                   value={filter3} onChange={(e) => setFilter3(e.target.value)}/>}
                </Grid>
            </Grid>
        </Container>
    );
}
