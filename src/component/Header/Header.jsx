import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";

const Header = () => {
  return (
    <>
      <div className="header border-[1px] border-gray-400 w-full h-[8%] flex justify-between ">
        <div></div>
        <div className="flex justify-between items-center gap-[1.4rem] mr-[1.5rem]">
          <div className="notifaction">
            <IoMdNotificationsOutline className="w-6 h-7" />
          </div>
          <div className="user-profile flex justify-between items-center gap-[1rem] ">
            <div className="user-icon  bg-blue-500 rounded-[50%] w-[2.3rem] h-[2.3rem]  text-center">
              <h1 className="text-xl text-white text-center m-1">JD</h1>
            </div>
            <div className="user-name">
              <h2 className="text-[1.3rem] font-mono font-medium">John Dev</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
