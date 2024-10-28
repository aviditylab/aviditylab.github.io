import { PiPencilSimpleFill } from "react-icons/pi";
import { FaBook } from "react-icons/fa";
import { FaCamera } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa";
import { FaInbox } from "react-icons/fa";
import { FaLayerGroup } from "react-icons/fa";
import { FaCompass } from "react-icons/fa";
import { useContext } from "react";
import { BgContext } from "../Hero";
export default function () {
    const { bg } = useContext(BgContext);
    return (
        <div className="flex justify-center">
            <div className=" flex p-4 gap-12 bg-white text-gray-500 dark:text-textDark dark:bg-bgDark justify-center w-auto rounded-xl">
                <PiPencilSimpleFill size={20} />
                <FaBook size={20} />
                <FaCamera size={20} />
                <FaHeadphones size={20} />
                <FaInbox className={`text-${bg}-500`} size={20} />
                <FaLayerGroup size={20} />
                <FaCompass size={20} />
            </div>
        </div>
    )
}