// export default Pipeline;
import React from "react";
import { BiDollarCircle } from "react-icons/bi";
import { FaCircleCheck } from "react-icons/fa6";
import { LuListMinus, LuSquarePlus } from "react-icons/lu";

const Pipeline = () => {
  const pipelineItems = [
    { icon: <BiDollarCircle />, label: "Opportunities" },
    { icon: <FaCircleCheck />, label: "Deals" },
    { icon: <LuListMinus />, label: "Items" },
    { icon: <LuSquarePlus />, label: "New Pipeline" },
  ];

  return (
    <div className="side-dashboard px-[1rem]">
      <h2 className="text-[.8rem] text-gray-400">Pipelines</h2>

      {/* Navigation */}
      <div className="flex flex-col gap-1 py-3">
        {pipelineItems.map((item, index) => (
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

export default Pipeline;
