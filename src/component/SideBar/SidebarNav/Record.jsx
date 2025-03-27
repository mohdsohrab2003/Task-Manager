// export default Record;
import React from "react";
import { FaBuilding } from "react-icons/fa6";
import { CiViewList } from "react-icons/ci";

const Record = () => {
  const recordItems = [
    { icon: <FaBuilding />, label: "Company" },
    { icon: <CiViewList />, label: "Tasks" },
  ];

  return (
    <div className="side-dashboard px-[1rem]">
      <h2 className="text-[.8rem] text-gray-400">Records</h2>

      {/* Navigation */}
      <div className="flex flex-col gap-1 py-3">
        {recordItems.map((item, index) => (
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

export default Record;
