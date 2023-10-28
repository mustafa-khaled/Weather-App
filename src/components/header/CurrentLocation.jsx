import { BiTargetLock } from "react-icons/bi";

function CurrentLocation() {
  return (
    <div className="my-[5px] flex w-[20%] items-center gap-[10px] rounded-full bg-[#4CBB17] px-[10px] py-[5px]">
      <BiTargetLock className="text-3xl" />
      <button className="w-full text-sm md:text-base">Current Location</button>
    </div>
  );
}

export default CurrentLocation;
