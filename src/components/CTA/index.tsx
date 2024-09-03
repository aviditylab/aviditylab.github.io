import { useGSAP } from "@gsap/react";
import React from "react";
import { FaLightbulb } from "react-icons/fa";
import gsap, { Linear } from 'gsap';
import TextPlugin from "gsap/TextPlugin";
import useHandleToWa from "../hooks/useHandleToWa";
export default function () {
    const handleToWa = useHandleToWa();
    const [brainstorming, setBrainstorming] = React.useState(false)
    const containerRef = React.useRef<HTMLDivElement>(null);
    gsap.registerPlugin(TextPlugin)
    const [haveIdea, setHaveIdea] = React.useState(false);
    useGSAP(() => {
        const lightBulb = document.getElementById("lightBulb");
        const lightBulbText = document.getElementById("lightBulbText");
        const lightBulbContainer = document.getElementById("lightBulbContainer");
        const textLangs = document.getElementsByClassName("text-lang");
        const tl = gsap.timeline();
        if (brainstorming) {
            tl.to(lightBulbText, {
                text: "",
                margin: 0,
                duration: 0.5,
            })
            tl.to(lightBulb, {
                duration: 0.5,
                flexDirection: "row-reverse",
                backgroundColor: "black",
                color: "white",
            }, "<")
            tl.to(lightBulbContainer, {
                backgroundColor: "white",
                duration: 0.5,
                flexDirection: "row-reverse",
                filter: "drop-shadow(0px 0px 20px #ffffff)"
            }, "<")
            tl.to(lightBulbText, {
                color: "black",
            })
            tl.to(lightBulbText, {
                text: "Brainstrom with us",
                marginLeft: 8,
                marginRight: 8,
                duration: 0.5,
            })
            tl.to(textLangs, {
                opacity: 1,
                duration: 0.5,
                ease: Linear.easeNone
            }, "<")
        } else {
            tl.to(lightBulbText, {
                text: "",
                margin: 0,
                duration: 0.5,
            })
            tl.to(lightBulb, {
                duration: 0.5,
                flexDirection: "row",
                backgroundColor: "white",
                color: "black",
            }, "<")
            tl.to(lightBulbContainer, {
                backgroundColor: "black",
                duration: 0.5,
                flexDirection: "row",
                filter: "drop-shadow(0px 0px 20px #000000)"
            }, "<")
            tl.to(lightBulbText, {
                color: "white",
            })
            tl.to(lightBulbText, {
                text: "Have an idea?",
                marginLeft: 8,
                marginRight: 8,
                duration: 0.5,
            })
            tl.to(textLangs, {
                opacity: 0,
                duration: 0.5,
                ease: Linear.easeNone
            }, "<")
        }
    },
        {
            scope: containerRef,
            dependencies: [brainstorming]
        })
    const firstPartText = ["Branstromen Sie mit uns", "与我们头脑风暴", "私たちとブレインストーミング", "Проведите мозговой штурм с нами", "Brainstormez avec nous", "Fai brainstorming con noi"]
    const secondPartText = ["Llueva ideas con nosotros", "Faça brainstorming conosco", "우리와 브레인스토밍하세요", "हमारे साथ विचार-मंथन करें", "تبادل الأفكار معنا", "Κάντε brainstorming μαζί μας"]
    const colorsText = ["#495057", "#6C757D", "#ADB5BD"]
    return (
        <div className=" font-poppins" ref={containerRef}>
            <div className="bg-dark h-screen w-full flex justify-center items-center flex-col">
                <div className="flex-1 flex-wrap flex justify-center items-center text-center text-lang opacity-0">
                    {firstPartText.map((text, index) => {
                        let selectedColor = colorsText[0];
                        if (window.innerWidth > 1024) {
                            selectedColor = colorsText[1];
                            if (index > 2) {
                                selectedColor = colorsText[2];
                            }
                        } else {
                            if (index > 1) {
                                selectedColor = colorsText[1];
                            }
                            if (index > 3) {
                                selectedColor = colorsText[2];
                            }

                        }
                        return (
                            <div key={index} className="text-white font-bold  w-[45vw] lg:w-[30vw]" style={{ color: (selectedColor) }}>
                                {text}
                            </div>
                        )
                    })}
                </div>
                <div className="w-full cursor-pointer  flex-none" onClick={() => {
                    if (brainstorming) return handleToWa()
                    return setBrainstorming((prev) => !prev)
                }
                } >
                    <div className="flex justify-center items-center">
                        <div id="lightBulbContainer" className="flex items-center justify-center border-2 rounded-full p-1">
                            <div id="lightBulb" className=" bg-white rounded-full p-1">
                                <FaLightbulb />
                            </div>
                            <div id="lightBulbText" className=" text-white text-xl font-bold mx-2">
                                Have an idea?
                            </div>
                        </div>
                    </div>

                </div>
                <div className="flex-1 flex-wrap flex justify-center items-center text-center text-lang opacity-0">
                    {secondPartText.map((text, index) => {
                        let selectedColor = colorsText[2];
                        if (window.innerWidth > 1024) {
                            console.log('don this')
                            selectedColor = colorsText[2];
                            if (index > 2) {
                                selectedColor = colorsText[1];
                            }
                        } else {
                            if (index > 1) {
                                selectedColor = colorsText[1];
                            }
                            if (index > 3) {
                                selectedColor = colorsText[0];
                            }
                        }
                        return (
                            <div key={index} className="text-white font-bold  w-[45vw] lg:w-[30vw]" style={{ color: (selectedColor) }}>
                                {text}
                            </div>
                        )
                    })}
                </div>

            </div>
        </div>
    )
}