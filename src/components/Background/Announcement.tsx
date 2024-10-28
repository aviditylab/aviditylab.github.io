import { PiMagicWandLight } from "react-icons/pi";
import { BgContext } from "../Hero";
import { useContext } from "react";
export default function () {
    const { bg } = useContext(BgContext);
    return (
        <div className="flex text-black justify-between w-full bg-white p-4 rounded-lg drop-shadow">
            <div className=" flex justify-center items-center gap-2">
                <PiMagicWandLight size={24} />
                <div className=" font-bold">
                    We are excited to announce our new Feature!
                </div>
            </div>
            <div className={` bg-${bg}-500 text-white py-1 px-2 rounded-lg`}>
                Read update
            </div>
        </div>
    )
}