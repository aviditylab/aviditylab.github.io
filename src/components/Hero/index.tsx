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
export const BgContext = React.createContext({ bg: "black", setBg: (color: string) => { } });
export const HeroThemeContext = React.createContext<{ heroTheme: string, setHeroTheme: React.Dispatch<React.SetStateAction<string>> }>({ heroTheme: "black", setHeroTheme: () => { } });
export default function () {
  const [bg, setBg] = React.useState("blue");
  const [bgImage, setBgImage] = React.useState(bgBlue);
  const [heroTheme, setHeroTheme] = React.useState('dark')

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
  return (
    <BgContext.Provider value={{ bg, setBg }}>
      <HeroThemeContext.Provider value={{ heroTheme, setHeroTheme }}><div className=" h-screen relative">
        <div className="bg-light dark:bg-dark text-black dark:text-white">
          <img src={bgImage} className=" absolute h-screen right-0 z-0" />
          <div className={`relative  z-10 flex flex-col h-screen mx-10`}>
            <div className=" flex justify-between h-[15vh] items-center">
              <div className=" font-bold">Avidity</div>
              <div className=" cursor-pointer py-2 px-4 border rounded-full border-black bg-[#F8F9FA] dark:text-black">
                Let's talk
              </div>
            </div>
            <div className=" flex flex-col justify-between h-[85vh]">
              <div className=" text-5xl">
                <div className=" font-semibold">We Craft products</div>
                <div className=" font-semibold">based on users</div>
                <div className=" font-bold">wants • needs • loves</div>
              </div>
              <div>
                <ChatList />
                <div className=" py-10">
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