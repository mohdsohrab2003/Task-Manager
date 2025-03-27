import React from "react";
import { RiDashboardHorizontalLine } from "react-icons/ri";
import { GoGraph } from "react-icons/go";

const SideDash = () => {
  return (
    <div className="side-dashboard px-[1rem] mt-3">
      <h2 className="text-[.8rem] text-gray-400">Dashboard</h2>

      {/* Navigation */}
      <div className="flex flex-col gap-1 py-3">
        {[
          { icon: <RiDashboardHorizontalLine />, label: "Dashboard" },
          { icon: <GoGraph />, label: "Report" },
        ].map((item, index) => (
          <button
            key={index}
            className="flex items-center gap-2 py-2 px-2 rounded-md cursor-pointer transition-all duration-200 
            hover:bg-blue-300 hover:text-blue-900 w-full text-left"
          >
            {item.icon}
            <h3>{item.label}</h3>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SideDash;
