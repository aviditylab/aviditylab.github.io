import { useContext } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { BgContext } from "../Hero";
export default function () {
  const { bg } = useContext(BgContext);
  return (
    <div className="flex flex-col w-80 text-black bg-white drop-shadow p-4 rounded">
      <div className=" flex items-center justify-center">
        <FaChevronLeft />
        <div className="flex-1 font-bold text-center">
          September, 2021
        </div>
        <FaChevronRight />
      </div>
      <div className=" flex justify-around items-center ">
        <div className=" w-full h-8 flex items-center justify-center text-center">Mon</div>
        <div className=" w-full h-8 flex items-center justify-center text-center">Tue</div>
        <div className=" w-full h-8 flex items-center justify-center text-center">Wed</div>
        <div className=" w-full h-8 flex items-center justify-center text-center">Thu</div>
        <div className=" w-full h-8 flex items-center justify-center text-center">Fri</div>
        <div className=" w-full h-8 flex items-center justify-center text-center">Sat</div>
        <div className=" w-full h-8 flex items-center justify-center text-center">Sun</div>
      </div>
      <div className=" flex justify-around items-center ">
        {[31, 1, 2, 3, 4, 5, 6].map((date, index) => {
          if (date == 31)
            return (
              <div className=" text-gray-400 w-full h-8 flex items-center justify-center text-center">{date.toString()}</div>
            )
          return (
            <div className=" w-full h-8 flex items-center justify-center text-center">{date.toString()}</div>
          )
        })}
      </div>
      <div className=" flex justify-around items-center ">
        {[7, 8, 9, 10, 11, 12, 13].map((date, index) => {
          if (date == 12 || date == 22)
            return (
              <div className={` w-full h-8 flex items-center justify-center text-center bg-${bg}-500 text-white`}>{date.toString()}</div>
            )
          if (date > 12 && date < 22)
            return (
              <div className={` w-full h-8 flex items-center justify-center text-center bg-${bg}-200`}>{date.toString()}</div>
            )
          return (
            <div className=" w-full h-8 flex items-center justify-center text-center">{date.toString()}</div>
          )
        })}
      </div>
      <div className=" flex justify-around items-center ">
        {[14, 15, 16, 17, 18, 19, 20].map((date, index) => {
          if (date == 12 || date == 22)
            return (
              <div className={` w-full h-8 flex items-center justify-center text-center bg-${bg}-500 text-white`}>{date.toString()}</div>
            )
          if (date > 12 && date < 22)
            return (
              <div className={` w-full h-8 flex items-center justify-center text-center bg-${bg}-200`}>{date.toString()}</div>
            )
          return (
            <div className=" w-full h-8 flex items-center justify-center text-center">{date.toString()}</div>
          )
        })}
      </div>
      <div className=" flex justify-around items-center ">
        {[21, 22, 23, 24, 25, 26, 27].map((date, index) => {
          if (date == 12 || date == 22)
            return (
              <div className={` w-full h-8 flex items-center justify-center text-center bg-${bg}-500 text-white`}>{date.toString()}</div>
            )
          if (date > 12 && date < 22)
            return (
              <div className={` w-full h-8 flex items-center justify-center text-center bg-${bg}-200`}>{date.toString()}</div>
            )
          return (
            <div className=" w-full h-8 flex items-center justify-center text-center">{date.toString()}</div>
          )
        })}
      </div>
      <div className=" flex justify-around items-center ">
        {[28, 29, 30, 31, 1, 2, 3].map((date, index) => {
          if ([1, 2, 3].includes(date))
            return (
              <div className=" text-gray-400 w-full h-8 flex items-center justify-center text-center">{date.toString()}</div>
            )
          return (
            <div className=" w-full h-8 flex items-center justify-center text-center">{date.toString()}</div>
          )
        })}
      </div>
    </div>
  )
}