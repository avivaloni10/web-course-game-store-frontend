import {useAuth} from "../../context/AuthContext";
import HomePage from "../page-templates/home-page";
import CartProducts from "./CartProducts";
import SearchFilters from "../common/search-filters";

export default function Cart() {
    const {getToken} = useAuth();
    return (
        <HomePage title="My Items" hideBanner hidePromotions>
            {/*<SearchFilters/>*/}
            <CartProducts/>
        </HomePage>
    );
}
