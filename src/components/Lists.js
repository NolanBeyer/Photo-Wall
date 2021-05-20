import React from 'react'

const Lists = ({ tasks }) => {
  return (
    <div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ol>
    </div>
  )
}

export default Lists
