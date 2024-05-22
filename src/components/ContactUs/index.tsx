import * as React from "react"
import { FcIdea } from "react-icons/fc";
export default function() {

    const toWa = () => {
        window.open("https://wa.me/08116311788?text=ready%20to%20start")
    }
    return <div className="h-screen bg-black">
        <div className="  h-4/5 relative font-livvic">
        <div className=" flex h-full w-full text-white text-4xl font-bold justify-center items-center space-x-2 font-sans">
            <div>
                Have an Idea? 
            </div>
            <FcIdea />
        </div>
        <div onClick={toWa} className=" absolute opacity-50 top-5 left-12">
            <div className=" text-[#FFD7A3] rounded-full border border-[#FFD7A3] p-2">プロジェクトを開始する</div>
        </div>
        <div onClick={toWa} className=" absolute opacity-50 top-20 right-5">
            <div className=" text-[#FFA8A8] rounded-full border border-[#FFA8A8] p-2">Начать проект</div>
        </div>
        <div onClick={toWa} className=" absolute opacity-50 top-40 left-36">
            <div className=" text-[#E7FFAB] rounded-full border border-[#E7FFAB] p-2">Ein Projekt starten</div>
        </div>
        <div onClick={toWa} className=" absolute opacity-50 top-60 left-24">
            <div className=" text-white rounded-full border border-white p-2">开始项目</div>
        </div>
        <div onClick={toWa} className=" absolute opacity-50 bottom-60 right-20">
            <div className=" text-[#E7BBFC] rounded-full border border-[#E7BBFC] p-2">Mulai proyek</div>
        </div>
        <div onClick={toWa} className=" absolute opacity-50 bottom-40 left-20">
            <div className=" text-[#D1F7FF] rounded-full border border-[#D1F7FF] p-2">Démarrer un projet</div>
        </div>
        <div onClick={toWa} className=" absolute bottom-5 left-1/2 transform -translate-x-1/2">
            <div className=" text-white rounded-full border border-white p-2">Start a project</div>
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