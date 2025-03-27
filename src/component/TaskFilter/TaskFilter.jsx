import React, { useState } from "react";
import TaskType from "./TaskType";
import DueDate from "./DueDate";
import Assigned from "./Assigned";
import Priority from "./Prority";

const TaskFilter = () => {
  const [click, setClick] = useState(false);
  return (
    <>
      <div className="TaskFilter flex gap-[2rem] items-center border-[1px] border-gray-400 w-ful text-blackl h-[8%] px-[2rem] py-[.4rem] ">
        {/* filter */}
        <TaskType />
        <DueDate />
        <Assigned />
        <Priority />
      </div>
    </>
  );
};

export default TaskFilter;
