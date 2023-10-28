import SearchBar from "./SearchBar";
import ToggleDarkModeBtn from "./ToggleDarkModeBtn";
import CurrentLocation from "./CurrentLocation";

function Header() {
  return (
    <header className="flex h-[70px] items-center text-textColor">
      <div className="container mx-auto flex items-center justify-between gap-[10px] px-[10px]">
        <ToggleDarkModeBtn />
        <SearchBar />
        <CurrentLocation />
      </div>
    </header>
  );
}

export default Header;
