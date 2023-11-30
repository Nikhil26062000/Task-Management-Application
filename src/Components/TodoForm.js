import React, { useEffect, useState } from "react";

const TodoForm = ({ addTask }) => {
  const [numbers, setNumbers] = useState([]);
  // const [id, setId] = useState();

  const generateRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 1000000) + 1;

    return randomNumber;
  };

  const number = generateRandomNumber();

  const [count, setCount] = useState(number);
  // const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({
    id: count,
    taskName: "",
    taskDescription: "",
    priorityLevel: "low",
    completed: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
    console.log(count);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(task);
    setCount(count + 1000);

    setTask({
      id: count + 1000,
      taskName: "",
      taskDescription: "",
      priorityLevel: "low",
      completed: false,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-md shadow-lg w-full sm:w-3/4 md:w-2/3 lg:w-200/2">
        <h1 className="text-3xl font-bold mb-6 text-center">Create a Task</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="taskName"
              className="block text-gray-700 font-semibold"
            >
              Task Name*
            </label>
            <input
              type="text"
              id="taskName"
              name="taskName"
              value={task.taskName}
              onChange={handleInputChange}
              className="w-full border-b-2 border-gray-300 py-2 px-3 focus:outline-none focus:border-blue-500"
              placeholder="Enter task name"
              required
            />
            <div className="text-red-500 text-xs mt-200">
              Please enter a task name.
            </div>
          </div>
          <div>
            <label
              htmlFor="taskDescription"
              className="block text-gray-700 font-semibold"
            >
              Task Description
            </label>
            <textarea
              id="taskDescription"
              name="taskDescription"
              value={task.taskDescription}
              onChange={handleInputChange}
              rows="3"
              className="w-full border-b-2 border-gray-300 py-2 px-3 focus:outline-none focus:border-blue-500"
              placeholder="Enter task description"
            ></textarea>
          </div>
          <div>
            <label
              htmlFor="priorityLevel"
              className="block text-gray-700 font-semibold"
            >
              Priority Level
            </label>
            <select
              id="priorityLevel"
              name="priorityLevel"
              value={task.priorityLevel}
              onChange={handleInputChange}
              className="w-full border-b-2 border-gray-300 py-2 px-3 focus:outline-none focus:border-blue-500"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 w-full"
          >
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default TodoForm;
