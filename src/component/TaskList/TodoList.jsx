import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
const TodoList = () => {
  return (
    <>
      <div className="todoList px-[2rem] py-[1rem]">
        <ul>
          <li>
            <input type="checkbox" />
            {/* Todo type */}
          </li>
        </ul>
      </div>
    </>
  );
};

export default TodoList;
