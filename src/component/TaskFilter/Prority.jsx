import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
const Priority = () => {
  const [click, setClick] = useState(false);
  return (
    <>
      {click ? (
        <div
          className="task_type items-center inline-block px-[1rem] py-[.5rem] bg-blue-200  text-blue-400 cursor-pointer "
          onClick={() => setClick((prev) => !prev)}
        >
          <div className="flex items-center gap-2">
            <h1 className="hidden">(1)</h1>
            <h1 className="text-[1rem] font-semibold">Priority</h1>

            <MdOutlineKeyboardArrowDown className="mt-[4px] rotate-180 font-bold" />
            <RxCross2 className="" />
          </div>
        </div>
      ) : (
        <div
          className="task_type items-center inline-block px-[1rem] py-[.5rem] text-blue-400 cursor-pointer "
          onClick={() => setClick((prev) => !prev)}
        >
          <div className="flex items-center gap-2">
            <h1 className="hidden">(1)</h1>
            <h1 className="text-[1rem] font-semibold">Priority</h1>
            <MdOutlineKeyboardArrowDown className="mt-[4px]" />
            <RxCross2 className="hidden" />
          </div>
        </div>
      )}
    </>
  );
};

export default Priority;
