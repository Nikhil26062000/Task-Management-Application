import React, { useState } from "react";

const TaskList = ({ tasks, updateTask }) => {
  const [editTaskData, setEditTaskData] = useState({
    taskId: null,
    taskName: "",
    taskDescription: "",
    priorityLevel: "low",
  });

  const handleEditTask = (taskId) => {
    const taskToEdit = tasks.find((task) => task.id === taskId);

    setEditTaskData({
      taskId: taskToEdit.id,
      taskName: taskToEdit.taskName,
      taskDescription: taskToEdit.taskDescription,
      priorityLevel: taskToEdit.priorityLevel,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditTaskData({ ...editTaskData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedTask = {
      id: editTaskData.taskId,
      taskName: editTaskData.taskName,
      taskDescription: editTaskData.taskDescription,
      priorityLevel: editTaskData.priorityLevel,
    };

    updateTask(updatedTask);
    setEditTaskData({
      taskId: null,
      taskName: "",
      taskDescription: "",
      priorityLevel: "low",
    });
  };

  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold mb-4 text-center">My Tasks</h1>
      <div className="grid gap-4">
        {tasks.map((task, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-md p-4 mb-4 flex flex-col sm:flex-row items-start sm:items-center sm:justify-between"
          >
            <div className="mb-4 sm:mb-0 sm:mr-4 flex-1">
              <div>
                <h2 className="text-xl font-semibold mb-2">{task.taskName}</h2>
                <p className="text-gray-600 mb-2">{task.taskDescription}</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center">
              <button
                onClick={() => handleEditTask(task.id)}
                className="bg-blue-500 text-white py-1 px-4 rounded-md mb-2 sm:mb-0 sm:mr-2"
              >
                Edit Task
              </button>
              <span
                className={`inline-block px-2 py-1 text-sm font-semibold ${
                  task.priorityLevel === "high"
                    ? "bg-red-500 text-white"
                    : task.priorityLevel === "medium"
                    ? "bg-yellow-500 text-gray-900"
                    : "bg-green-500 text-white"
                } rounded-md`}
              >
                {task.priorityLevel}
              </span>
            </div>
          </div>
        ))}
      </div>

                
            
                {editTaskData.taskId && (
                    <><div>
                        <h2 className="text-xl font-bold">Edit Form</h2>
                    </div>
                    <div className="flex justify-center">

                  <form onSubmit={handleSubmit} className="mt-4">

                      <input

                          type="text"
                          name="taskName"
                          value={editTaskData.taskName}
                          onChange={handleChange}
                          className="border rounded-md py-2 px-3 mb-2 mx-4"
                          placeholder="Task Name" />
                      <textarea
                          name="taskDescription"
                          value={editTaskData.taskDescription}
                          onChange={handleChange}
                          className="border rounded-md py-2 px-3 mb-2 mx-4"
                          rows="3"
                          placeholder="Task Description"
                      ></textarea>
                      <select
                          name="priorityLevel"
                          value={editTaskData.priorityLevel}
                          onChange={handleChange}
                          className="border rounded-md py-2 px-3 mb-2 mx-4"
                      >
                          <option value="low">Low</option>
                          <option value="medium">Medium</option>
                          <option value="high">High</option>
                      </select>
                      <button
                          type="submit"
                          className="bg-blue-500 text-white py-2 px-4 rounded-md"
                      >
                          Save Changes
                      </button>
                  </form>
              </div></>
      )}
         
      
    </div>
  );
};

export default TaskList;
