import * as React from "react"
import ChatList from "./ChatList";
import bgBlue from './bg-blue.png';
import bgRed from './bg-red.png';
import bgOrange from './bg-orange.png';
import bgPurple from './bg-purple.png';
import bgBlack from './bg-black.png';
export const BgContext = React.createContext({ bg: "black", setBg: (color: string) => { } });
export const HeroThemeContext = React.createContext<{ heroTheme: string, setHeroTheme: React.Dispatch<React.SetStateAction<string>> }>({ heroTheme: "black", setHeroTheme: () => { } });
export default function () {
  const [bg, setBg] = React.useState("blue");
  const [bgImage, setBgImage] = React.useState(bgBlue);
  const [heroTheme, setHeroTheme] = React.useState('dark')

  React.useEffect(() => {
    switch (bg) {
      case "blue":
        setBgImage(bgBlue);
        break;
      case "red":
        setBgImage(bgRed);
        break;
      case "orange":
        setBgImage(bgOrange);
        break;
      case "purple":
        setBgImage(bgPurple);
        break;
      default:
        setBgImage(bgBlack);
        break;
    }
  }, [bg])

  return (
    <BgContext.Provider value={{ bg, setBg }}>
      <HeroThemeContext.Provider value={{ heroTheme, setHeroTheme }}><div className=" w-screen h-screen relative">
        <img src={bgImage} className=" absolute h-screen right-0 z-0" />
        <div className={`relative  z-10 flex flex-col h-screen mx-10 bg-${heroTheme == 'dark' ? 'dark' : 'light'}`}>
          <div className=" flex justify-between h-[15vh] items-center">
            <div className=" font-bold">Avidity</div>
            <div className=" cursor-pointer py-2 px-4 border rounded-full border-black bg-[#F8F9FA]">
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
              <div className=" pt-10">
                Welcome to Avidity Lab [uh-vi-duh-tee læb]
              </div>
            </div>
          </div>
        </div>
      </div>
      </HeroThemeContext.Provider>
    </BgContext.Provider>
  )
}