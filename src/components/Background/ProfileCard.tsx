export default function () {
  return (
    <div className="p-4">
      <div className=" px-6 py-2 bg-white text-black cursor-pointer drop-shadow">
        <div className="flex">
          <div className="flex-shrink-0">
            <div className="h-12 w-12 rounded-full bg-gray-500" />
          </div>
          <div className="ml-4 flex flex-col">
            <div className="text-sm font-medium text-black">Placeholder Store</div>
            <div className=" flex">
              <div>* 4.5</div>
              <div>1.2k Followers</div>
              <div>* online</div>
            </div>
          </div>
        </div>
        <div className=" flex justify-around">
          <div>Follow</div>
          <div>Chat</div>
          <div>S</div>
        </div>
      </div>
    </div>
  )
}