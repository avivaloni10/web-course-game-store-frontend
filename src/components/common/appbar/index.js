import {AppbarContainer, AppbarHeader, AppbarListItemText, AppbarList} from "../../../styles/appbar";

import {useNavigate} from "react-router-dom";

import Actions from "./actions";
import {smoothScrollToId} from "../../../utils";

export default function Appbar() {
    const navigate = useNavigate()

    return (
        <AppbarContainer>
            <AppbarHeader variant="h4">Aloni Games</AppbarHeader>
            <AppbarList type="row">
                <AppbarListItemText primary="Home" onClick={() => navigate("/")}/>
                <AppbarListItemText primary="Collections" onClick={() => navigate("/collections")}/>
                <AppbarListItemText primary="Products" onClick={() => smoothScrollToId('products')}/>
                <AppbarListItemText primary="About us" onClick={() => smoothScrollToId('footer')}/>
                <AppbarListItemText primary="Contact us" onClick={() => smoothScrollToId('footer')}/>
            </AppbarList>
            <Actions/>
        </AppbarContainer>
    );
}
