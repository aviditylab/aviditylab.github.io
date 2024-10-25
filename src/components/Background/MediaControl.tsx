import { FaPlay } from "react-icons/fa";
export default function () {
    return (
        <div className=" flex w-1/2 p-4 rounded-xl drop-shadow-sm bg-white gap-2">
            <div className=" flex justify-center items-center p-1 bg-gray-200 rounded-full"><FaPlay color="black" /></div>
            <div className=" flex flex-1 justify-center items-center">
                <div className="bg-gray-200 w-full h-2 rounded-full">
                    <div className="bg-gray-900 w-1/2 h-2 rounded-full" />
                </div>
            </div>
            <div className=" flex text-black gap-1">
                <div className=" font-bold">05:15 </div>
                <div className=" text-gray-400"> / 10:00</div>
            </div>
        </div>
    )
}