import {getHighestRatingGames} from "../../services";
import Products from "../common/products";
import HomePage from "../page-templates/home-page";
import SearchFilters from "../common/search-filters";

export default function Wishlist() {
    return (
        <HomePage title="Wishlist" hideBanner>
            {/*<SearchFilters/>*/}
            <Products gameFetcher={getHighestRatingGames}/>
        </HomePage>
    );
}
