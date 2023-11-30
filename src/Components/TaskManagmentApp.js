import React, { useState, useEffect } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import Home from './Home';
import Landing from './Landing';
import MyTask from './MyTask';
import EditedTask from './EditedTask';

const TaskManagmentApp = () => {
  const [tasks, setTasks] = useState([]);
  const [editedTasks, setEditedTasks] = useState([]);

  useEffect(() => {
    // Update editedTasks whenever tasks are updated
    const updatedEditedTasks = tasks.filter(task => task.edited);
    setEditedTasks(updatedEditedTasks);
  }, [tasks]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const updateTask = (updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === updatedTask.id ? { ...task, ...updatedTask, edited: true } : task
    );
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
    { path: '/', element: <Landing /> },
    { path: '/home', element: <Home addTask={addTask} /> },
    { path: '/editedtask', element: <EditedTask editedTasks={editedTasks} /> },
    { path: '/mytask', element: <MyTask tasks={tasks} updateTask={updateTask}  handleCheckbox={handleCheckboxChange} /> },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default TaskManagmentApp;

