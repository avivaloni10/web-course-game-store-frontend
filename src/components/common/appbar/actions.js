import {Divider, ListItemButton, ListItemIcon} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import {ActionIconsContainerDesktop, MyList} from "../../../styles/appbar";
import {Colors} from "../../../styles/theme";
import {useAuth} from "../../../context/AuthContext";
import {useNavigate} from "react-router-dom";

export default function Actions() {
    const { signout, isUserSignedIn } = useAuth()
    const navigate = useNavigate()

    const onPersonIconClick = () => {
        if (isUserSignedIn()) {
            signout()
        }
        navigate("/signin");
    }

    return (
        <ActionIconsContainerDesktop>
            <MyList type="row">
                <ListItemButton
                    sx={{
                        justifyContent: "center",
                    }}
                >
                    <ListItemIcon
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            color: Colors.secondary,
                        }}
                    >
                        <ShoppingCartIcon/>
                    </ListItemIcon>
                </ListItemButton>
                <Divider orientation="vertical" flexItem/>
                <ListItemButton
                    sx={{
                        justifyContent: "center",
                    }}
                >
                    <ListItemIcon
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            color: Colors.secondary,
                        }}
                    >
                        <FavoriteIcon/>
                    </ListItemIcon>
                </ListItemButton>
                <Divider orientation="vertical" flexItem/>
                <ListItemButton
                    sx={{
                        justifyContent: "center",
                    }}
                >
                    <ListItemIcon
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            color: Colors.secondary,
                        }}
                    >
                        <PersonIcon onClick={onPersonIconClick}/>
                    </ListItemIcon>
                </ListItemButton>
                <Divider orientation="vertical" flexItem/>
            </MyList>
        </ActionIconsContainerDesktop>
    );
}
