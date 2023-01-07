import { getHighestRatingGames } from "../../services";
import Products from "../common/products";
import HomePage from "../page-templates/home-page";

export default function Wishlist() {
    return (
        <HomePage
            productsTitle="Wishlist"
            productsFilter={product => product.isInWishList}
            hideBanner
        >
            <Products gameFetcher={getHighestRatingGames}/>
        </HomePage>
    );
}
