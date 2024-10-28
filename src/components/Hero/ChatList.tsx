import * as React from "react"
import { HiUser } from "react-icons/hi"
import AvidityLabLogo from "./AvidityLabLogo"
import { BgContext, HeroThemeContext } from "."
import { MdDarkMode, MdLightMode } from "react-icons/md";
const ThemePicker = () => {
  const themeContext = React.useContext(HeroThemeContext)
  return (
    <div onClick={() => {
      themeContext.setHeroTheme((prev: any) => {
        if (prev == 'dark')
          return 'light'
        else
          return 'dark'
      })
    }}>
      {themeContext.heroTheme == 'dark' ? <MdDarkMode /> : <MdLightMode />}
    </div>
  )
}

const ColorPicker = () => {
  const colorContext = React.useContext(BgContext)
  const handleChangeColor = (color: string) => {
    colorContext.setBg(color)
    colorContext.setBgText(color)
  }
  return (
    <div>
      <div className="flex space-x-1">
        <div className="w-3 h-3 rounded-full bg-blue-500  cursor-pointer" onClick={() => handleChangeColor("blue")}></div>
        <div className="w-3 h-3 rounded-full bg-orange-500  cursor-pointer" onClick={() => handleChangeColor("orange")}></div>
        <div className="w-3 h-3 rounded-full bg-red-500  cursor-pointer" onClick={() => handleChangeColor("red")}></div>
        <div className="w-3 h-3 rounded-full bg-purple-500  cursor-pointer" onClick={() => handleChangeColor("purple")}></div>
      </div>
    </div>
  )
}
const UserLogo = () => {
  return <div className=" h-[18px] w-[18px] bg-black rounded-full flex justify-center items-center"><HiUser color="white" /></div>
}
export default function ({ chatContainerRef }: { chatContainerRef: any }) {
  const colorContext = React.useContext(BgContext)
  const heroTheme = React.useContext(HeroThemeContext)
  const chatData = [
    {
      message: "Can we change the color?",
      logo: UserLogo,
    },
    {
      message: "Sure, what color would you like?",
      logo: AvidityLabLogo,
    }, {
      message: `I want the primary color to be ${colorContext.bgText}`,
      logo: UserLogo,
      additional: ColorPicker,
    }, {
      message: "Also a quick access features would be great",
      logo: UserLogo,
    },
    {
      message: `We've got you covered and adding ${heroTheme.heroTheme} mode as well`,
      logo: AvidityLabLogo,
      additional: ThemePicker,
    },
  ]
  return (
    <div className=" flex flex-col-reverse min-h-60 overflow-hidden py-5">
      <div className=" flex space-y-4 flex-col" ref={chatContainerRef}>
        {chatData.map((item, index) => {
          return (
            <div className="flex text-sm lg:text-xl space-x-1 chat-list-items" key={index} id={`chat-item-${index}`}>
              <div className="flex items-center">
                <item.logo />
              </div>
              <div className=" flex lg:flex-row flex-col justify-normal lg:justify-center items-start lg:items-center space-y-1 space-x-1">
                <div className=" bg-[#E9ECEF] dark:bg-[#343A40] px-2 py-1 rounded-t-xl rounded-r-xl">{item.message}</div>
                {item.additional && <item.additional />}
              </div>
            </div>
          )
        })}
      </div>

    </div>

  )
}