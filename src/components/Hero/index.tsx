import * as React from "react"
import ChatList from "./ChatList";
import bgBlue from './bg-blue.png';
import bgRed from './bg-red.png';
import bgOrange from './bg-orange.png';
import bgPurple from './bg-purple.png';
import bgBlueDark from './bg-blue-dark.png';
import bgRedDark from './bg-red-dark.png';
import bgOrangeDark from './bg-orange-dark.png';
import bgPurpleDark from './bg-purple-dark.png';
import bgBlack from './bg-black.png';
import useHandleToWa from "../hooks/useHandleToWa";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import Background from "../Background";
export const BgContext = React.createContext({ bg: "black", setBg: (color: string) => { } });
export const HeroThemeContext = React.createContext<{ heroTheme: string, setHeroTheme: React.Dispatch<React.SetStateAction<string>> }>({ heroTheme: "black", setHeroTheme: () => { } });
export default function () {
  const handleToWa = useHandleToWa();
  const [bg, setBg] = React.useState("blue");
  const [bgImage, setBgImage] = React.useState(bgBlue);
  const [heroTheme, setHeroTheme] = React.useState('light')

  React.useEffect(() => {
    switch (`${heroTheme}-${bg}`) {
      case "light-blue":
        setBgImage(bgBlue);
        break;
      case "light-red":
        setBgImage(bgRed);
        break;
      case "light-orange":
        setBgImage(bgOrange);
        break;
      case "light-purple":
        setBgImage(bgPurple);
        break;
      case "dark-blue":
        setBgImage(bgBlueDark);
        break;
      case "dark-red":
        setBgImage(bgRedDark);
        break;
      case "dark-orange":
        setBgImage(bgOrangeDark);
        break;
      case "dark-purple":
        setBgImage(bgPurpleDark);
        break;
      default:
        setBgImage(bgBlack);
        break;
    }
  }, [bg, heroTheme])

  React.useEffect(() => {
    if (heroTheme == 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.theme = heroTheme
  }, [heroTheme])

  const chatContainerRef = React.useRef<HTMLDivElement>(null)
  useGSAP(() => {
    if (chatContainerRef.current == null) return;
    let tl = gsap.timeline()
    let containerPanels = gsap.utils.toArray('.chat-list-items');

    if (!containerPanels[0]) return;
    const firstPanel = containerPanels[0] as any;
    tl.from(containerPanels[0], {
      duration: 2,
      y: -(chatContainerRef.current?.offsetHeight + 200 || 0)
    })


    const heroWants = document.getElementById('hero-wants');
    const heroNeeds = document.getElementById('hero-needs');
    const heroLoves = document.getElementById('hero-loves');
    if (!heroWants || !heroNeeds || !heroLoves) return;
    tl.to(heroWants, {
      opacity: 1,
      duration: 2
    }, "<")

    containerPanels.forEach((panel: any, i) => {
      if (i == 0) return;
      tl.to(chatContainerRef.current, {
        height: `+=${panel.offsetHeight + 16}px`,
        duration: 2
      })
      tl.to(panel, {
        display: "flex",
      }, "<")
      tl.from(panel, {
        duration: 1,
        y: (chatContainerRef.current?.offsetHeight || 0)
      }, "<")
      if (i == 3) {
        tl.to(heroNeeds, {
          opacity: 1,
          duration: 2
        }, "<")
      }
      if (i == 4) {
        tl.to(heroLoves, {
          opacity: 1,
          duration: 2,
          onComplete: () => {

            setHeroTheme('dark')
          }
        }, "<")
      }
    })
    containerPanels.forEach((panel: any, i) => {
      panel.style.display = "none";
    })
    firstPanel.style.display = "flex";

  }, {
    dependencies: [chatContainerRef]
  })
  return (
    <BgContext.Provider value={{ bg, setBg }}>
      <HeroThemeContext.Provider value={{ heroTheme, setHeroTheme }}><div className=" h-screen relative">
        <div className="bg-light dark:bg-dark text-black dark:text-white">
          {/* <img src={bgImage} className=" absolute bottom-0 h-auto lg:h-screen right-0 z-0" /> */}
          <Background />
          <div className={`relative  z-10 flex flex-col h-screen mx-10`}>
            <div className=" flex justify-between h-[15vh] items-center">
              <div className=" font-bold">Avidity</div>
              <div className=" cursor-pointer py-2 px-4 border rounded-full border-black bg-[#F8F9FA] dark:text-black font-semibold hover:bg-gray-200" onClick={handleToWa}>
                Let's talk
              </div>
            </div>
            <div className=" flex flex-col justify-between h-[85vh]">
              <div className=" text-2xl lg:text-4xl">
                <div className=" font-semibold">We Craft products</div>
                <div className=" font-semibold">based on users</div>
                <div className=" font-bold flex space-x-2">
                  <div id="hero-wants" className=" opacity-50">wants</div>
                  <div id="hero-needs" className=" opacity-50">• needs</div>
                  <div id="hero-loves" className=" opacity-50">• loves</div>
                </div>
              </div>
              <div>
                <ChatList chatContainerRef={chatContainerRef} />
                <div className=" py-6 text-sm text-center lg:text-lg">
                  Welcome to Avidity Lab [uh-vi-duh-tee læb]
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      </HeroThemeContext.Provider>
    </BgContext.Provider>
  )
}