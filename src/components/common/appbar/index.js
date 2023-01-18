import { AppbarContainer, AppbarHeader, AppbarListItemText, AppbarList } from "../../../styles/appbar";

import { useNavigate } from "react-router-dom";

import Actions from "./actions";
import { smoothScrollToId } from "../../../utils";

export default function Appbar() {
    const navigate = useNavigate();
    const goToProducts = () => {
        if (document.getElementById('products')) {
            smoothScrollToId('products');
            return;
        }
        navigate("/");
    }

    return (
        <AppbarContainer>
            <AppbarHeader variant="h4">Aloni Games</AppbarHeader>
            <AppbarList type="row">
                <AppbarListItemText primary="Home" onClick={() => navigate("/")} />
                <AppbarListItemText primary="My Orders" onClick={() => navigate("/orders")} />
                <AppbarListItemText primary="Products" onClick={goToProducts} />
                <AppbarListItemText primary="Collections" onClick={() => navigate("/collections")} />
                <AppbarListItemText primary="Platforms" onClick={() => navigate("/platforms")} />
                <AppbarListItemText primary="About us" onClick={() => smoothScrollToId('footer')} />
                <AppbarListItemText primary="Contact us" onClick={() => smoothScrollToId('footer')} />
            </AppbarList>
            <Actions />
        </AppbarContainer>
    );
}
