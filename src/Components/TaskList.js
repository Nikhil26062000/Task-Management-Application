import React from 'react'

const TaskList = ({tasks}) => {
  return (
    <div>
        <div>
        {tasks.map((t, index) => (
              <li key={index}>
                <strong>{t.taskName}</strong> - {t.taskDescription} ({t.priorityLevel})
              </li>
            ))}
        </div>
    </div>
  )
}

export default TaskList