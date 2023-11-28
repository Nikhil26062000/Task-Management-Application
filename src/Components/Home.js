import React from 'react'
import Header from './Header'
import TodoForm from './TodoForm'

const Home = ({addTask}) => {
  return (
    <div>
         <Header />
      <TodoForm addTask={addTask} />
    </div>
  )
}

export default Home