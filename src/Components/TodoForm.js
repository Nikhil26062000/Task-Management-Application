// import React from 'react';

// const TodoForm = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <div className="bg-white p-8 rounded-md shadow-lg w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
//         <h1 className="text-3xl font-bold mb-6 text-center">Create a Task</h1>
//         <form className="space-y-4">
//           <div>
//             <label htmlFor="taskName" className="block text-gray-700 font-semibold">Task Name*</label>
//             <input type="text" id="taskName" className="w-full border-b-2 border-gray-300 py-2 px-3 focus:outline-none focus:border-blue-500" placeholder="Enter task name" required />
//             <div className="text-red-500 text-xs mt-1">Please enter a task name.</div>
//           </div>
//           <div>
//             <label htmlFor="taskDescription" className="block text-gray-700 font-semibold">Task Description</label>
//             <textarea id="taskDescription" rows="3" className="w-full border-b-2 border-gray-300 py-2 px-3 focus:outline-none focus:border-blue-500" placeholder="Enter task description"></textarea>
//           </div>
//           <div>
//             <label htmlFor="priorityLevel" className="block text-gray-700 font-semibold">Priority Level</label>
//             <select id="priorityLevel" className="w-full border-b-2 border-gray-300 py-2 px-3 focus:outline-none focus:border-blue-500">
//               <option value="low">Low</option>
//               <option value="medium">Medium</option>
//               <option value="high">High</option>
//             </select>
//           </div>
//           <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 w-full">Add Task</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default TodoForm;

import React, { useState } from 'react';

const TodoForm = ({addTask}) => {
  // const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({
    taskName: '',
    taskDescription: '',
    priorityLevel: 'low',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   addTask(task);
    setTask({  // Reset the task input fields after adding the task
      taskName: '',
      taskDescription: '',
      priorityLevel: 'low',
    });

    
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-md shadow-lg w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
        <h1 className="text-3xl font-bold mb-6 text-center">Create a Task</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="taskName" className="block text-gray-700 font-semibold">Task Name*</label>
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
            <div className="text-red-500 text-xs mt-1">Please enter a task name.</div>
          </div>
          <div>
            <label htmlFor="taskDescription" className="block text-gray-700 font-semibold">Task Description</label>
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
            <label htmlFor="priorityLevel" className="block text-gray-700 font-semibold">Priority Level</label>
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
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 w-full">Add Task</button>
        </form>

        {/* Displaying tasks */}
        {/* <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Task List:</h2>
          <ul>
            {tasks.map((t, index) => (
              <li key={index}>
                <strong>{t.taskName}</strong> - {t.taskDescription} ({t.priorityLevel})
              </li>
            ))}
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default TodoForm;
