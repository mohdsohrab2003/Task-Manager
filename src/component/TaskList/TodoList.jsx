import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import NameIcon from "./Samellercomp/NameIcon";
import { TbDotsVertical } from "react-icons/tb";

const TodoList = () => {
  return (
    <>
      <div className="todoList text-[15px] font-semibold px-[2rem] py-[1rem]">
        <ul>
          <li className="flex justify-between items-center">
            <input type="checkbox" className="ml-[1rem] "
             style={{ transform: "scale(1.5)", margin: "" }} />
            {/* Todo type */}
            {/* <div className="todo-tu">
              <FaPhoneAlt/>
            </div> */}
            {/* Todo task */}
            <div className="todo-task flex items-center gap-2 text-[15px] -ml-[1rem] mr-[7rem]">
            <FaPhoneAlt/>
              <h2>Call to the Demo Sehedule</h2>
            </div>
            {/* Priority */}
            <div className="priority flex justify-center items-center ">
              <h3>High</h3>
            </div>
            {/* Due Data */}
            <div className="due_Date flex justify-center items-center gap-2">
              <p>1 Dec,2002,12:30PM</p>
            </div>
            {/* Associated Name */}
            <div className="associated_name flex justify-center items-center gap-2">
              <NameIcon firstName={"Mohd"} lastName={"Sohrab"}/>
              <h2>Mohd Sohrab alam</h2>
            </div>
            {/* Assinged name */}
            <div className="assinged_name flex justify-center items-center gap-2">
            <NameIcon firstName={"Majibur"} lastName={"Rahman"}/>
              <h2>Majibur Rahman</h2>
              <TbDotsVertical/>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default TodoList;
