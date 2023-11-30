import React from "react";
import TaskList from "./TaskList";
import Header from "./Header";

const MyTask = ({ tasks, updateTask, handleCheckbox, deleteTask }) => {
  return (
    <div>
      <Header />
      <TaskList
        tasks={tasks}
        updateTask={updateTask}
        handleCheckbox={handleCheckbox}
        deleteTask={deleteTask}
      />
    </div>
  );
};

export default MyTask;
