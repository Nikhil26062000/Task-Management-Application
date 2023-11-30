import React, { useState, useEffect } from "react";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Home from "./Home";
import Landing from "./Landing";
import MyTask from "./MyTask";
import EditedTask from "./EditedTask";

const TaskManagmentApp = () => {
  const [tasks, setTasks] = useState([]);
  const [editedTasks, setEditedTasks] = useState([]);

  useEffect(() => {
    const updatedEditedTasks = tasks.filter((task) => task.edited);
    setEditedTasks(updatedEditedTasks);
  }, [tasks]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      console.log("Tasks loaded from local storage:", storedTasks);
      setTasks(storedTasks);
    } else {
      console.log("No tasks found in local storage.");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    console.log("Tasks saved to local storage:", tasks);
  }, [tasks]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const updateTask = (updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === updatedTask.id
        ? { ...task, ...updatedTask, edited: true }
        : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const handleCheckboxChange = (taskId) => {
    setTasks((prevTasks) => {
      return prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      );
    });
  };

  const appRouter = createBrowserRouter([
    { path: "/", element: <Landing /> },
    { path: "/home", element: <Home addTask={addTask} /> },
    { path: "/editedtask", element: <EditedTask editedTasks={editedTasks} /> },
    {
      path: "/mytask",
      element: (
        <MyTask
          tasks={tasks}
          updateTask={updateTask}
          handleCheckbox={handleCheckboxChange}
          deleteTask={deleteTask}
        />
      ),
    },
  ],{
    basename: "/Task-Management-Application",
  });

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default TaskManagmentApp;
