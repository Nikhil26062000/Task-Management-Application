import React from "react";
import Header from "./Header";

const EditedTask = ({ editedTasks }) => {
  console.log(editedTasks);
  return (
    <div>
      <Header />
      <h2 className="text-center mt-2 text-2xl">Edited Task</h2>
      <div className="px-4 mt-2">
        {editedTasks.map((task, index) => (
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
    </div>
  );
};

export default EditedTask;
