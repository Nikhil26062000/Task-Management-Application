
import React from 'react';
import TaskList from './TaskList';
import Header from './Header';

const MyTask = ({ tasks, updateTask,handleCheckbox }) => {
  return (
    <div>
     <Header />
      <TaskList tasks={tasks} updateTask={updateTask} handleCheckbox={handleCheckbox}/>
    </div>
  );
};

export default MyTask;
