import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
 //useMemo: The React useMemo hook returns a memoized value. (it's like a caching a value so that it doesn't need to be re-calculate again).
 //useMemo hook runs only when one of its dependencies get updated.
 //improves performance. useMemo and useCallback hook are same, improves performance.
 
 //diff:
 //useMemo : returns an memoized value.
 //useCallback : returns an memoized function.
 //

  const [number, setNumber] = useState(0);
  const [counter, setCounter] = useState(0);

  function cubeOfNum(value){
    console.log('Calculation done');
    return Math.pow(value, 3);
  }

  const result = cubeOfNum(number);

  return (
    <>
      <input type="number" value={number} onChange={(e)=>{setNumber(e.target.value)}}/>
      <h1>The cube of the number is {result}</h1>
      <button onClick={()=>{setCounter(counter + 1)}}>Counter++</button>
      <h1>Counter: {counter}</h1>
    </>
  )

  //On just increasing counter, it also calculating the function (see console). To avoid we can use useMemo.
}

export default App
