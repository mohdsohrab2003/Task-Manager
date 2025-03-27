import React from "react";

import SideDash from "./SidebarNav/SideDash";
import Record from "./SidebarNav/Record";
import Pipeline from "./SidebarNav/Pipeline";
import Application from "./SidebarNav/Application";

const Sidebar = () => {
  return (
    <div className="Sidebar flex flex-col gap-5 border-1 border-gray-400 w-1/5 h-[100%] px-2 py-3 text-black">
      {/* Logo */}
      <div className="logo flex items-center gap-2 px-4">
        <img
          src="src/assets/Icons/Logo.png"
          className="w-10 border-2 border-gray-300 rounded-full"
          alt="Logo"
        />
        <h1 className="font-semibold text-2xl">Task Manager</h1>
      </div>

      {/* Sidebar Sections */}
      <SideDash />
      <Record />
      <Pipeline />
      <Application />
    </div>
  );
};

export default Sidebar;
