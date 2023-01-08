import { useAuth } from "../../context/AuthContext";
import { getCartGames } from "../../services";
import HomePage from "../page-templates/home-page";
import CartProduct from "./CartProduct";
import CartProducts from "./CartProducts";

export default function Cart() {
    const { getToken } = useAuth();
    return (
        <HomePage
            title="My Items"
            hideBanner
        >
            
            <CartProducts gameFetcher={async () => await getCartGames(await getToken())} singleProductOverride={CartProduct}/>
        </HomePage>
    );
}
