import HomePage from "../page-templates/home-page";
import Products from "../common/products";
import { getHighestRatingGames } from "../../services";

export default function Dashboard() {

    return (
        <HomePage
            title="Our Top Products"
        >
        <Products gameFetcher={getHighestRatingGames} />
        </HomePage>
    );
}
