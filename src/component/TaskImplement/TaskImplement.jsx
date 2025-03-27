import React from "react";

const TaskImplement = () => {
  return (
    <>
      <div className="TaskImplement  border-[1px] border-gray-400 bg-gray-100 w-full h-[8%] px-[1rem] py-[.4rem]">
        <h2 className="text-[.8rem] text-gray-500 ">Task</h2>
        <div className="flex  justify-between items-center -mt-2">
          <h1 className="font-semibold">Important Task</h1>
          <button className="bg-blue-600 px-[1rem] py-[.3rem] rounded-xl text-white cursor-pointer">
            Create Task
          </button>
        </div>
      </div>
    </>
  );
};

export default TaskImplement;
