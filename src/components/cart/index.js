import HomePage from "../page-templates/home-page";
import CartProducts from "./CartProducts";

export default function Cart() {
    return (
        <HomePage
            title="My Items"
            hideBanner
            hidePromotions
        >

            <CartProducts />
        </HomePage>
    );
}
