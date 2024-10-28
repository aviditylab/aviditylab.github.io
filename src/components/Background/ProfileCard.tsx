import { useContext } from "react";
import { BgContext } from "../Hero";

function ProfileCard() {
  const { bg } = useContext(BgContext)
  return (
    <div className="p-4">
      <div className=" px-6 py-2 bg-white text-black cursor-pointer drop-shadow rounded-2xl">
        <div className="flex">
          <div className="flex-shrink-0">
            <div className="h-12 w-12 rounded-full bg-gray-500" />
          </div>
          <div className="ml-4 flex flex-col justify-center">
            <div className="font-semibold text-black text-md py-1">Placeholder Store</div>
            <div className=" flex text-gray-500 justify-around gap-4 items-center">
              <div><i className="fi fi-ss-star text-yellow-500 mr-2"></i> 4.5</div>
              <div>1.2k Followers</div>
              <div className=" border-l-2 pl-2 border-gray-200 flex items-center">
                <i className="fi fi-ss-bullet text-green-500 items-center flex"></i>
                <div>Online</div>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex justify-around items-center gap-2 mt-4">
          <div className={` flex-1 px-4 text-center py-2 text-white font-bold bg-${bg}-500 rounded-full`}>Follow</div>
          <div className={`flex-1 px-4 text-center py-2 bg-white text-${bg}-500 border font-bold border-${bg}-500 rounded-full`}>Chat</div>
          <div><i className={`fi fi-rr-share px-4 py-2 px4 text-${bg}-500`}></i></div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard;