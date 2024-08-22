import { useEffect, useState } from 'react'
import './App.css'

function App() {
  //useRef: it will create a mutable variable, doesn't re-render again. Accessing DOM Element

  //what problem it solves
  const [value, setValue] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(()=>{
    setCount(prev => prev + 1); //run infinetly
  })

  return (
    <>
      <button onClick={() => { setValue(prev => prev - 1)}}>-1</button>
      <h1>{value}</h1>
      <button onClick={() => { setValue(prev => prev + 1)}}>+1</button>
      <h2>Rendered count: {count}</h2>
    </>
  )
}

export default App
