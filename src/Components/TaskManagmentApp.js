import React, { useState } from "react";
import "../index.css";

import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

import Home from "./Home";
import Landing from "./Landing";

import MyTask from "./MyTask";


const TaskManagmentApp = () => {

    const [tasks, setTasks] = useState([]);

    const addTask = (newTask) => {
      setTasks([...tasks, newTask]);
    };

    
  const appRouter = createBrowserRouter([
    { path: "/", element: <Landing /> },
    { path: "/home", element: <Home addTask={addTask}/> },
    {
      path: "/mytask",
      element: <MyTask tasks={tasks}/>,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default TaskManagmentApp;
