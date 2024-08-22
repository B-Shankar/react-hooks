import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  //useRef: it will create a mutable variable, doesn't re-render again. Accessing DOM Element
  //const count = useRef(10);   console.log(count);  {currrent: 10}
  //store value in current.

  const [value, setValue] = useState(0);
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <button onClick={() => { setValue(prev => prev - 1)}}>-1</button>
      <h1>{value}</h1>
      <button onClick={() => { setValue(prev => prev + 1)}}>+1</button>
      <h2>Rendered count: {count.current}</h2>
    </>
  )
}

export default App
