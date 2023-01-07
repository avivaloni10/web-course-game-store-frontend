import { getHighestRatingGames } from "../../services";
import Products from "../common/products";
import HomePage from "../page-templates/home-page";

export default function Cart() {
    return (
        <HomePage
            title="Cart"
            hideBanner
        >
            <Products gameFetcher={getHighestRatingGames} />
        </HomePage>
    );
}
