import React, { useState } from "react"; // ✅ Added useState import
import todoData from "../../Data/todolist";

const TaskList = () => {
  const [todos, setTodos] = useState(todoData);
  console.log(todos);

  // Function to toggle checkbox
  const handleCheckboxChange = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">To-Do List</h2>
      <ul className="space-y-3">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center gap-3 p-3 border rounded-md shadow-sm"
          >
            {/* Checkbox */}
            <input
              type="checkbox"
              checked={todo.checked}
              onChange={() => handleCheckboxChange(todo.id)}
              className="w-5 h-5 accent-blue-500 cursor-pointer"
            />

            {/* Task Icon */}
            {todo.icon}

            {/* Task Name */}
            <span className={todo.checked ? "line-through text-gray-400" : ""}>
              {todo.task}
            </span>

            {/* Priority */}
            <span className="ml-auto">{todo.priority}</span>

            {/* Due Date */}
            <span className="ml-4 text-gray-500">{todo.dueDate}</span>

            {/* Associated Record */}
            <div className="flex items-center ml-4">
              {todo.associated.icon}
              <span className="ml-2">{todo.associated.name}</span>
            </div>

            {/* Assigned To */}
            <div className="flex items-center ml-4">
              {todo.assigned.icon}
              <span className="ml-2">{todo.assigned.name}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
