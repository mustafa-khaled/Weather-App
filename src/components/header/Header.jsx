import ToggleDarkModeBtn from "./ToggleDarkModeBtn";

function Header() {
  return (
    <header className="flex h-[70px] items-center  ">
      <div className="container mx-auto px-[10px]">
        <ToggleDarkModeBtn />
      </div>
    </header>
  );
}

export default Header;
