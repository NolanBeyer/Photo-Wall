import React, { useState } from 'react'

const Title = ({ title }) => {
  const [counter, setCounter] = useState(0)
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}> add one</button>
      <h1>{title}</h1>
    </div>
  )
}
export default Title
