import React from "react";
import Sidebar from "../../component/SideBar/Sidebar";
import Header from "../../component/Header/Header";
import TaskImplement from "../../component/TaskImplement/TaskImplement";
import { TaskBar } from "../../component/TaskBar/TaskBar";
import TaskFilter from "../../component/TaskFilter/TaskFilter";
import TodoList from "../../component/TaskList/TodoList";

const Home = () => {
  return (
    <>
      <div className="dashboard flex gap-[.1rem]  border-1 border-gray-400 w-full h-[100%] p-[.2rem]">
        {/* Sidebar */}
        <Sidebar />
        {/* Main Section */}
        <div className="main-section w-[80%] max-h-full flex flex-col ">
          <Header />
          <TaskImplement />
          <TaskFilter />
          <TaskBar />
          <TodoList />
        </div>
      </div>
    </>
  );
};

export default Home;
