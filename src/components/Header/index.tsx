import * as React from "react"
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import ListMenu from "./ListMenu";

const Header: React.FC = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const handleClickMenu = () => {
    setShowMenu((prev) => !prev)
  }
  return <div className="pt-5 px-16 absolute w-full z-50">
    <div className="z-10 relative overflow-hidden" >
      <div className="bg-white rounded-xl flex justify-between font-josefinSans font-bold text-lg items-stretch">
        <div className=" py-2 px-4 ">
          Avidity
        </div>
        <div className="px-4 cursor-pointer flex items-center rounded-bl-xl" onClick={handleClickMenu}>
          {!showMenu && <GiHamburgerMenu />}
          {showMenu && <IoMdClose />}
        </div>
      </div>
      <ListMenu show={showMenu} />

    </div>
  </div>
}

export default Header;