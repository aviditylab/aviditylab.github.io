import { PiMagicWandLight } from "react-icons/pi";
export default function () {
    return (
        <div className="flex text-black justify-between w-full bg-white p-4 rounded-lg drop-shadow">
            <div className=" flex justify-center items-center gap-2">
                <PiMagicWandLight size={24} />
                <div className=" font-bold">
                    We are excited to announce our new Feature!
                </div>
            </div>
            <div className=" bg-black text-white py-1 px-2 rounded-lg">
                Read update
            </div>
        </div>
    )
}