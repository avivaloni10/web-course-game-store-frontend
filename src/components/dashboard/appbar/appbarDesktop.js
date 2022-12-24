import {ListItemButton, ListItemIcon, ListItemText} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

import {AppbarContainer, AppbarHeader, MyList} from "../../../styles/appbar";

import {useUIContext} from "../../../context/ui";

import Actions from "./actions";

export default function AppbarDesktop() {

    const {setShowSearchBox} = useUIContext();

    return (
        <AppbarContainer>
            <AppbarHeader variant="h4">Aloni Games</AppbarHeader>
            <MyList type="row">
                <ListItemText primary="Home"/>
                <ListItemText primary="Categories"/>
                <ListItemText primary="Products"/>
                <ListItemText primary="About us"/>
                <ListItemText primary="Contact us"/>
                <ListItemButton onClick={() => setShowSearchBox(true)}>
                    <ListItemIcon>
                        <SearchIcon/>
                    </ListItemIcon>
                </ListItemButton>
            </MyList>
            <Actions/>
        </AppbarContainer>
    );
}
