import Appbar from "../appbar";
import Banner from "../banner";
import Promotions from "../promotions";

export default function Header({hideAppbar, hideBanner, hidePromotions}) {
    return (
        <div>
            {hideAppbar ? null : <Appbar/>}
            {hideBanner ? null : <Banner/>}
            {hidePromotions ? null : <Promotions/>}
        </div>
    );
}
