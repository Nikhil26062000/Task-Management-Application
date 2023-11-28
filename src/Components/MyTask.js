import React from 'react'
import TaskList from './TaskList'
import Header from './Header'

const MyTask = ({tasks}) => {
  return (
    <div>
         <Header />
        <TaskList tasks={tasks}/>
    </div>
  )
}

export default MyTask