import { AiOutlineSearch } from "react-icons/ai";

function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div className="flex  w-full items-center gap-[10px] rounded-full bg-bgColor px-[10px] py-[5px] shadow-md">
      <AiOutlineSearch className="text-2xl" />
      <input
        type="text"
        placeholder="Search for your city..."
        className="w-full border-none bg-transparent outline-none placeholder:text-textColor"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
