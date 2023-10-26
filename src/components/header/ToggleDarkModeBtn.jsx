import { useDarkMode } from "../../context/DarkModeContext";

function ToggleDarkModeBtn() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <label
      htmlFor="toggleB"
      className="flex cursor-pointer items-center"
      onChange={toggleDarkMode}
    >
      <div className="relative rounded-full ">
        <input type="checkbox" id="toggleB" className="sr-only" />
        <div className="bg-grayOne block h-8 w-14 rounded-full"></div>
        <div
          className={`${
            isDarkMode ? "translate-x-0" : "translate-x-[100%]"
          }  bg-textColor absolute left-1 top-1  h-6 w-6 rounded-full transition`}
        ></div>
      </div>
    </label>
  );
}

export default ToggleDarkModeBtn;
