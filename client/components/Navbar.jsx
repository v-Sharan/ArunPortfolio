import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";

import { useStateContext } from "../contexts/ContextProvider";

const NavButton = ({ title, customFunc, icon }) => (
  <div
    data-tip={title}
    className="tooltip tooltip-bottom"
  >
    <button
      type="button"
      onClick={() => customFunc()}
      className="relative text-xl rounded-full p-3 dark:hover:bg-light-gray dark:text-white dark:hover:text-black"
    >
      {icon}
    </button>
  </div>
);

const Navbar = () => {
  const { activeMenu, setActiveMenu, setScreenSize, screenSize } =
    useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  return (
    <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative">
      <NavButton
        title="Menu"
        customFunc={handleActiveMenu}
        icon={<AiOutlineMenu />}
      />
    </div>
  );
};

export default Navbar;
