import * as React from "react"
import { GiHamburgerMenu } from "react-icons/gi";
import ListMenu from "./ListMenu";

const Header: React.FC = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const handleClickMenu = () => {
    setShowMenu((prev) => !prev)
  }
  return <div className="mt-5 mx-16 ">
    <div className="flex justify-between font-josefinSans font-bold text-lg">
      <div className=" py-2 px-4 ">
        Avidity
      </div>
      <div className=" py-2 px-4" onClick={handleClickMenu}>
        <GiHamburgerMenu />
      </div>
    </div>
    <ListMenu show={showMenu} />
  </div>
}

export default Header;