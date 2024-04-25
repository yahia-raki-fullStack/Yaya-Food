import Logo from "./HeaderComponents/Logo";
import SearchInput from "./HeaderComponents/SearchInput";

function Header() {
  return (
    <div className="flex justify-between  items-center py-4 px-3 md:py-5 md:px-4 sticky top-0 bg-gray-900  w-full">
      <Logo />
      <SearchInput />
    </div>
  );
}

export default Header;
