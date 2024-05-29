import * as React from "react"
import { FcIdea } from "react-icons/fc";
import useHandleToWa from "../hooks/useHandleToWa";
export default function () {
  const handleToWa = useHandleToWa();
  return <div className="h-screen bg-black">
    <div className="  h-4/5 relative font-livvic">
      <div className=" flex h-full w-full text-white text-4xl font-bold justify-center items-center space-x-2 font-sans">
        <div>
          Have an Idea?
        </div>
        <FcIdea />
      </div>
      <div onClick={handleToWa} className=" absolute opacity-50 hover:opacity-100 top-5 left-12 lg:top-32 lg:left-64">
        <div className=" text-[#FFD7A3] hover:text-black hover:bg-[#FFD7A3] rounded-full border border-[#FFD7A3] p-2 lg:p-4 lg:text-lg">プロジェクトを開始する</div>
      </div>
      <div onClick={handleToWa} className=" absolute opacity-50 hover:opacity-100 top-20 right-5 lg:top-32 lg:right-64">
        <div className=" text-[#FFA8A8] hover:text-black hover:bg-[#FFA8A8] rounded-full border border-[#FFA8A8] p-2 lg:p-4 lg:text-lg">Начать проект</div>
      </div>
      <div onClick={handleToWa} className=" absolute opacity-50 hover:opacity-100 top-40 right-36 lg:top-60 lg:right-[500px]">
        <div className=" text-[#E7FFAB] hover:text-black hover:bg-[#E7FFAB] rounded-full border border-[#E7FFAB] p-2 lg:p-4 lg:text-lg">Ein Projekt starten</div>
      </div>
      <div onClick={handleToWa} className=" absolute opacity-50 hover:opacity-100 top-60 left-24 lg:top-60 lg:left-[500px]">
        <div className=" text-[#CDBFFF] hover:text-black hover:bg-[#CDBFFF] rounded-full border border-[#CDBFFF] p-2 lg:p-4 lg:text-lg">开始项目</div>
      </div>
      <div onClick={handleToWa} className=" absolute opacity-50 hover:opacity-100 bottom-40 left-20 lg:bottom-60 lg:left-[340px]">
        <div className=" text-[#D1F7FF] hover:text-black hover:bg-[#D1F7FF] rounded-full border border-[#D1F7FF] p-2 lg:p-4 lg:text-lg">Démarrer un projet</div>
      </div>
      <div onClick={handleToWa} className=" absolute opacity-50 hover:opacity-100 bottom-60 right-20 lg:bottom-60 lg:right-[400px]">
        <div className=" text-[#E7BBFC] hover:text-black hover:bg-[#E7BBFC] rounded-full border border-[#E7BBFC] p-2 lg:p-4 lg:text-lg">Mulai proyek</div>
      </div>
      <div onClick={handleToWa} className=" absolute bottom-5 left-1/2 transform -translate-x-1/2">
        <div className=" text-white hover:text-black hover:bg-white rounded-full border border-white p-2 lg:p-4 lg:text-lg">Start a project</div>
      </div>
    </div>
    <div className=" text-white flex flex-col justify-end h-1/5">
      <div className="flex justify-center font-livvic text-white text-xs my-3">
        © 2024 Avidity. All rights reserved
      </div>
      <div className=" text-white flex justify-center space-x-2 items-center my-5">
        <div className=" font-josefinSans text-2xl font-bold">Avidity</div>
        <div className="relative flex overflow-x-hidden text-xs">
          <div className="animate-marquee whitespace-nowrap">
            <span className="mx-2">- Digital Product Agency</span>
          </div>
          <div className="absolute animate-marquee2 whitespace-nowrap">
            <span className="mx-2">- Digital Product Agency</span>
          </div>
        </div>
      </div>
      <div className="flex font-livvic justify-center space-x-2 my-2">
        <a href="">Linkedin</a>
        <a href="https://www.youtube.com/@aviditylab">Youtube</a>
        <a href="https://dribbble.com/aviditylab">Dribbble</a>
        <a href="https://www.instagram.com/aviditylab/">Instagram</a>
        <a href="https://www.behance.net/aviditylab">Behance</a>
      </div>
    </div>

  </div>
}