import {ListItemButton, ListItemIcon} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

import {AppbarContainer, AppbarHeader, AppbarListItemText, AppbarList} from "../../../styles/appbar";

import {useUIContext} from "../../../context/ui";
import {useNavigate} from "react-router-dom";

import Actions from "./actions";
import {smoothScrollToId} from "../../../utils";

export default function Appbar() {
    const {setShowSearchBox} = useUIContext();
    const navigate = useNavigate()

    return (
        <AppbarContainer>
            <AppbarHeader variant="h4">Aloni Games</AppbarHeader>
            <AppbarList type="row">
                <AppbarListItemText primary="Home" onClick={() => navigate("/")}/>
                <AppbarListItemText primary="Categories" onClick={() => navigate("/categories")}/>
                <AppbarListItemText primary="Products" onClick={() => smoothScrollToId('products')}/>
                <AppbarListItemText primary="About us" onClick={() => smoothScrollToId('footer')}/>
                <AppbarListItemText primary="Contact us" onClick={() => smoothScrollToId('footer')}/>
                <ListItemButton onClick={() => setShowSearchBox(true)}>
                    <ListItemIcon>
                        <SearchIcon/>
                    </ListItemIcon>
                </ListItemButton>
            </AppbarList>
            <Actions/>
        </AppbarContainer>
    );
}
