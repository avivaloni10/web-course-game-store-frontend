import { UIProvider } from "../../../context/ui";
import Appbar from "../appbar";
import Banner from "../banner";
import Promotions from "../promotions";
import SearchBox from "../search";

export default function Header({ setSearch, hideAppbar, hideBanner, hidePromotions }) {
  return (
    <UIProvider>
      {hideAppbar ? null : <Appbar />}
      {hideBanner ? null : <Banner />}
      {hidePromotions ? null : <Promotions />}
      <SearchBox onSearch={setSearch} />
    </UIProvider>
  );
}
