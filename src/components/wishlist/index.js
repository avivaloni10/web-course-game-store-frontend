import HomePage from "../page-templates/home-page";

export default function Wishlist() {
    return (
        <HomePage
            productsTitle="Wishlist"
            productsFilter={product => product.isInWishList}
            hideBanner
        />
    );
}
