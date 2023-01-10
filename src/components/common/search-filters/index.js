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

export default function SearchFilters({setGames}) {
    const [filterById, setFilterById] = useState("");
    const [filterByName, setFilterByName] = useState("");
    const [filterByDescription, setFilterByDescription] = useState("");

    useEffect(() => {
        async function filterGames() {
            const gs = await searchGames(filterById, filterByName, filterByDescription)
            console.log("gs:", gs)
            setGames(gs);
        }
        filterGames();
    }, [filterById, filterByName, filterByDescription]);

    return (
        <Container id="products">
            <Grid
                container
                spacing={{xs: 2, md: 3}}
                justifyContent="center"
                sx={{margin: `20px 4px 20px 4px`}}
                columns={{xs: 4, sm: 8, md: 12}}
            >
                <Grid item key="filter-by-id" xs={2} sm={4} md={4} display="flex" flexDirection={'column'}
                      alignItems="center">
                    {<SearchFilter color="primary" label="Filter by id" variant="standard"
                                   value={filterById} onChange={(e) => setFilterById(e.target.value)}/>}
                </Grid>
                <Grid item key="filter-by-name" xs={2} sm={4} md={4} display="flex" flexDirection={'column'}
                      alignItems="center">
                    {<SearchFilter color="primary" label="Filter by name" variant="standard"
                                   value={filterByName} onChange={(e) => setFilterByName(e.target.value)}/>}
                </Grid>
                <Grid item key="filter-by-description" xs={2} sm={4} md={4} display="flex" flexDirection={'column'}
                      alignItems="center">
                    {<SearchFilter color="primary" label="Filter by description" variant="standard"
                                   value={filterByDescription} onChange={(e) => setFilterByDescription(e.target.value)}/>}
                </Grid>
            </Grid>
        </Container>
    );
}
