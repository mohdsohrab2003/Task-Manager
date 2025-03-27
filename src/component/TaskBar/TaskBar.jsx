import React from "react";
import { RiExpandUpDownFill } from "react-icons/ri";
export const TaskBar = () => {
  return (
    <>
      <div className="TaskBar border-3 border-gray-400 bg-gray-100 w-full h-[8%] px-[3rem] py-[.8rem] ">
        <div className="flex items-center  justify-between">
          {/* checkbox */}
          <div className="checkbox mt-1 w-[1rem]">
            <input
              type="checkbox"
              style={{ transform: "scale(1.5)", margin: "" }}
            />
          </div>
          {/* todo */}
          <div className="todo mr-[15rem] -ml-[9rem]">
            <h1 className=" text-[1.1rem] font-medium ">To do</h1>
          </div>
          {/* Prority */}
          <div className="priority flex items-center gap-2">
            <h1 className=" text-[1.1rem] font-medium">Priority</h1>
            <RiExpandUpDownFill className="" />
          </div>
          {/* Associatede */}
          <div className="associated flex items-center gap-2">
            <h1 className=" text-[1.1rem] font-medium">Associated Recored</h1>
            <RiExpandUpDownFill className="" />
          </div>
          {/* Assigned */}
          <div className="Assigned flex items-center gap-2 ">
            <h1 className=" text-[1.1rem] font-medium">Assigned to</h1>
            <RiExpandUpDownFill className="" />
          </div>
        </div>
      </div>
    </>
  );
};
