import { getHighestRatingGames } from "../../services";
import Products from "../common/products";
import HomePage from "../page-templates/home-page";

export default function Cart() {
    return (
        <HomePage
            productsTitle="Cart"
            hideBanner
        >
            <Products gameFetcher={getHighestRatingGames} />
        </HomePage>
    );
}
