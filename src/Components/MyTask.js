
import React from 'react';
import TaskList from './TaskList';
import Header from './Header';

const MyTask = ({ tasks, updateTask }) => {
  return (
    <div>
     <Header />
      <TaskList tasks={tasks} updateTask={updateTask} />
    </div>
  );
};

export default MyTask;
