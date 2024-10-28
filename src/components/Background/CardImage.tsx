import { useContext } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { PiMountainsFill } from "react-icons/pi";
import { BgContext } from "../Hero";

export default function () {
  const { bg } = useContext(BgContext);
  return (
    <div className="flex justify-stretch text-black bg-white dark:text-textDark dark:bg-bgDark drop-shadow rounded-xl overflow-hidden">
      <div className=" w-52  h-full bg-gray-400 dark:text-textDark dark:bg-bgDark flex justify-center items-center">
        <PiMountainsFill />
      </div>
      <div className="flex flex-col p-3 w-72 gap-1">
        <div className=" flex justify-between">
          <div className=" font-bold">
            Card title
          </div>
          <BsThreeDotsVertical />
        </div>
        <div className=" text-gray-400 text-left">
          Card description. Flexible components customizable in a few clicks.
        </div>
        <div className=" flex justify-around">
          <div className={`font-semibold text-${bg}-500`}>Get Started</div>
          <div className=" font-semibold text-gray-400">Learn More</div>
        </div>
      </div>
    </div>
  )
}