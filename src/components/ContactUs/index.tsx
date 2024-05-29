import * as React from "react"
import { FcIdea } from "react-icons/fc";
import useHandleToWa from "../hooks/useHandleToWa";
import { FaArrowRight } from "react-icons/fa";

export default function () {
  const handleToWa = useHandleToWa();

  return <div className="h-screen bg-black min-h-[896px]">
    <div className="  h-4/5 relative font-livvic">
      <div className=" flex h-full w-full text-white text-4xl font-bold justify-center items-center space-x-2 font-sans">
        <div>
          Have an Idea?
        </div>
        <FcIdea />
      </div>
      <div onClick={handleToWa} className="group flex justify-end items-center absolute opacity-50 hover:opacity-100 top-5 left-12 lg:top-32 lg:left-64 cursor-pointer" >
        <div className=" text-[#FFD7A3] group-hover:text-black group-hover:bg-[#FFD7A3] rounded-full border border-[#FFD7A3] p-2 lg:p-4 lg:text-lg translate-x-6 group-hover:-translate-x-0 transition-all">プロジェクトを開始する</div>
        <div className=" bg-[#FFD7A3] rounded-full w-10 h-10 lg:w-16 lg:h-16 group-hover:flex justify-center items-center hidden">
          <FaArrowRight size={16} />
        </div>
      </div>

      <div onClick={handleToWa} className="group flex justify-end items-center cursor-pointer absolute opacity-50 hover:opacity-100 top-20 right-10 lg:top-32 lg:right-64">
        <div className="translate-x-6 group-hover:-translate-x-0 transition-all text-[#FFA8A8] group-hover:text-black group-hover:bg-[#FFA8A8] rounded-full border border-[#FFA8A8] p-2 lg:p-4 lg:text-lg">Начать проект</div>
        <div className=" bg-[#FFA8A8] rounded-full w-10 h-10 lg:w-16 lg:h-16 group-hover:flex justify-center items-center hidden">
          <FaArrowRight size={16} />
        </div>
      </div>
      <div onClick={handleToWa} className="group flex justify-end items-center cursor-pointer absolute opacity-50 hover:opacity-100 top-40 right-36 lg:top-60 lg:right-[500px]">
        <div className="translate-x-6 group-hover:-translate-x-0 transition-all text-[#E7FFAB] group-hover:text-black group-hover:bg-[#E7FFAB] rounded-full border border-[#E7FFAB] p-2 lg:p-4 lg:text-lg">Ein Projekt starten</div>
        <div className=" bg-[#E7FFAB] rounded-full w-10 h-10 lg:w-16 lg:h-16 group-hover:flex justify-center items-center hidden">
          <FaArrowRight size={16} />
        </div>
      </div>
      <div onClick={handleToWa} className="group flex justify-end items-center cursor-pointer absolute opacity-50 hover:opacity-100 top-60 left-24 lg:top-60 lg:left-[500px]">
        <div className="translate-x-6 group-hover:-translate-x-0 transition-all text-[#CDBFFF] group-hover:text-black group-hover:bg-[#CDBFFF] rounded-full border border-[#CDBFFF] p-2 lg:p-4 lg:text-lg">开始项目</div>
        <div className=" bg-[#CDBFFF] rounded-full w-10 h-10 lg:w-16 lg:h-16 group-hover:flex justify-center items-center hidden">
          <FaArrowRight size={16} />
        </div>
      </div>
      <div onClick={handleToWa} className="group flex justify-end items-center cursor-pointer absolute opacity-50 hover:opacity-100 bottom-40 left-20 lg:bottom-60 lg:left-[340px]">
        <div className="translate-x-6 group-hover:-translate-x-0 transition-all text-[#D1F7FF] group-hover:text-black group-hover:bg-[#D1F7FF] rounded-full border border-[#D1F7FF] p-2 lg:p-4 lg:text-lg">Démarrer un projet</div>
        <div className=" bg-[#D1F7FF] rounded-full w-10 h-10 lg:w-16 lg:h-16 group-hover:flex justify-center items-center hidden">
          <FaArrowRight size={16} />
        </div>
      </div>
      <div onClick={handleToWa} className="group flex justify-end items-center cursor-pointer absolute opacity-50 hover:opacity-100 bottom-60 right-20 lg:bottom-60 lg:right-[400px]">
        <div className="translate-x-6 group-hover:-translate-x-0 transition-all text-[#E7BBFC] group-hover:text-black group-hover:bg-[#E7BBFC] rounded-full border border-[#E7BBFC] p-2 lg:p-4 lg:text-lg">Mulai proyek</div>
        <div className=" bg-[#E7BBFC] rounded-full w-10 h-10 lg:w-16 lg:h-16 group-hover:flex justify-center items-center hidden">
          <FaArrowRight size={16} />
        </div>
      </div>
      <div onClick={handleToWa} className="group flex justify-end cursor-pointer absolute bottom-5 left-1/2 transform -translate-x-1/2">
        <div className="translate-x-6 group-hover:-translate-x-0 transition-all text-white group-hover:text-black group-hover:bg-white rounded-full border border-white p-2 lg:p-4 lg:text-lg">Start a project</div>
        <div className=" bg-white rounded-full w-10 h-10 lg:w-16 lg:h-16 group-hover:flex justify-center items-center hidden">
          <FaArrowRight size={16} />
        </div>
      </div>
    </div>
    <div className=" text-white flex flex-col justify-end h-1/5">
      <div className="flex justify-center font-livvic text-white text-xs my-3">
        © 2024 Avidity. All rights reserved
      </div>
      <div className=" flex flex-col md:flex-row items-center md:mx-20 md: justify-around">
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

  </div>
}