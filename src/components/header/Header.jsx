import SearchBar from "./SearchBar";
import ToggleDarkModeBtn from "./ToggleDarkModeBtn";

function Header({ searchQuery, setSearchQuery }) {
  return (
    <header className="flex h-[70px] items-center text-textColor">
      <div className="container mx-auto flex items-center justify-between gap-[20px] px-[10px]">
        <ToggleDarkModeBtn />
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>
    </header>
  );
}

export default Header;
