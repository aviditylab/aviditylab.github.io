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
  return (
    <div>
      <div className="flex space-x-1">
        <div className="w-3 h-3 rounded-full bg-blue-500 bg-opacity-50 cursor-pointer" onClick={() => colorContext.setBg("blue")}></div>
        <div className="w-3 h-3 rounded-full bg-orange-500 bg-opacity-50 cursor-pointer" onClick={() => colorContext.setBg("orange")}></div>
        <div className="w-3 h-3 rounded-full bg-red-500 bg-opacity-50 cursor-pointer" onClick={() => colorContext.setBg("red")}></div>
        <div className="w-3 h-3 rounded-full bg-purple-500 bg-opacity-50 cursor-pointer" onClick={() => colorContext.setBg("purple")}></div>
      </div>
    </div>
  )
}

export default function () {
  const colorContext = React.useContext(BgContext)
  const heroTheme = React.useContext(HeroThemeContext)
  const chatData = [
    {
      message: "Can we change the color?",
      logo: HiUser,
    },
    {
      message: "Sure, what color would you like?",
      logo: AvidityLabLogo,
    }, {
      message: `I want the primary color to be ${colorContext.bg}`,
      logo: HiUser,
      additional: ColorPicker,
    }, {
      message: "Also a quick access features would be great",
      logo: HiUser,
    },
    {
      message: `We've got you covered and adding ${heroTheme.heroTheme} mode as well`,
      logo: AvidityLabLogo,
      additional: ThemePicker,
    },
  ]
  return (
    <div className=" flex flex-col space-y-4">
      {chatData.map((item, index) => {
        return (
          <div className="flex text-md space-x-1" key={index}>
            <div className="flex items-center">
              <item.logo />
            </div>
            <div className=" flex justify-center items-center space-x-1">
              <div className=" bg-[#E9ECEF] dark:bg-[#343A40] px-2 py-1 rounded-t-xl rounded-r-xl">{item.message}</div>
              {item.additional && <item.additional />}
            </div>
          </div>
        )
      })}
    </div>
  )
}