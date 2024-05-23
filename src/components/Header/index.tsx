import * as React from "react"
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import ListMenu from "./ListMenu";
import useHandleToWa from "../hooks/useHandleToWa";

const Header: React.FC = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const handleClickMenu = () => {
    setShowMenu((prev) => !prev)
  }

  const handleToWa = useHandleToWa();
  return <div className="pt-5 px-16 absolute w-full z-50">
    <div className="z-10 relative overflow-hidden" >
      <div className="bg-white rounded-xl flex justify-between md:justify-between font-josefinSans  items-center">
        <div className=" py-2 px-4 font-bold text-lg lg:text-2xl md:px-8 md:py-4">
          Avidity
        </div>
        <div className="md:flex hidden w-full justify-center text-sm font-semibold space-x-10 ">
            <div className=" hover:underline transition-all duration-1000 cursor-pointer">About</div>
            <div className=" hover:underline transition-all duration-1000 cursor-pointer">Process</div>
            <div className=" hover:underline transition-all duration-1000 cursor-pointer">FAQ</div>
        </div>
        <div onClick={handleToWa} className="md:flex hidden md:mr-8 justify-center text-nowrap text-sm font-bold bg-black text-white rounded-full py-1 px-4 items-center cursor-pointer">
            Start a project
        </div>
        <div className="md:hidden px-4 cursor-pointer flex items-center rounded-bl-xl" onClick={handleClickMenu}>
          {!showMenu && <GiHamburgerMenu />}
          {showMenu && <IoMdClose />}
        </div>
      </div>
      <ListMenu show={showMenu} />

    </div>
  </div>
}

export default Header;