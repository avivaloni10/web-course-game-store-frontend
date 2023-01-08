import { useAuth } from "../../context/AuthContext";
import { getCartGames } from "../../services";
import Products from "../common/products";
import HomePage from "../page-templates/home-page";

export default function Cart() {
    const { getToken } = useAuth();
    return (
        <HomePage
            title="Cart"
            hideBanner
        >
            <Products gameFetcher={async () => await getCartGames(await getToken())}/>
        </HomePage>
    );
}
