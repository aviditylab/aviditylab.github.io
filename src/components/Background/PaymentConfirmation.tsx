import { FaRegQuestionCircle } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { FaFileUpload } from "react-icons/fa";
import { BgContext } from "../Hero";
import { useContext } from "react";

export default function () {
  const { bg } = useContext(BgContext);
  return (
    <div className=" text-black bg-white rounded-3xl drop-shadow">
      <div className=" flex justify-between  p-8 border-b">
        <div className="font-bold">
          Payment Confirmation
        </div>
        <div className=" flex justify-center items-center">
          <HiX color=" gray" />
        </div>
      </div>
      <div className=" m-8 p-8 rounded-3xl border-4 border-dashed border-gray-400 min-w-96 text-center">
        <div className=" flex justify-center items-center">
          <FaFileUpload size={60} color="gray" />
        </div>
        <div className=" mt-4">
          <span className={`font-bold underline text-${bg}-500`}>Click to upload</span>
          <span className=" font-semibold"> or drag your files here</span>
        </div>
        <div className=" text-gray-500 mt-1 font-semibold">
          Maximum file size 50 MB.
        </div>
      </div>
      <div className=" p-8 flex justify-between border-t-2 ">
        <div className=" flex justify-center items-center gap-2">
          <FaRegQuestionCircle />
          <div className=" font-semibold">Learn how</div>
        </div>
        <div className=" flex font-bold gap-4">
          <div className=" py-2 px-4 text-gray-400">Cancel</div>
          <div className={` py-2 px-4 rounded-full bg-${bg}-500 text-white`}>Submit</div>

        </div>
      </div>
    </div>
  )
}