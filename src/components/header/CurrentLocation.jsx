import { BiTargetLock } from "react-icons/bi";

function CurrentLocation() {
  return (
    <div className="my-[5px] flex w-[20%] items-center gap-[10px] rounded-full bg-[#4CBB17] px-[5px] py-[5px] hover:bg-opacity-[0.9] sm:px-[10px]">
      <div className="hidden sm:block">
        <BiTargetLock className="text-3xl" />
      </div>
      <button className="w-full text-sm sm:text-base">Current Location</button>
    </div>
  );
}

export default CurrentLocation;
