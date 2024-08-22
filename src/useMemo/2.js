import { useEffect, useMemo, useRef, useState } from 'react'
import './App.css'

function App() {
 //On just increasing counter, it also calculating the function (see console). To avoid we can use useMemo.

  const [number, setNumber] = useState(0);
  const [counter, setCounter] = useState(0);

  function cubeOfNum(value){
    console.log('Calculation done');
    return Math.pow(value, 3);
  }

  //useMemo(arr_fun, [dependencies])
  const result = useMemo(()=>{return cubeOfNum(number);}, [number]);
  //now it wont execute entire component, it will render only counter on clicking button

  return (
    <>
      <input type="number" value={number} onChange={(e)=>{setNumber(e.target.value)}}/>
      <h1>The cube of the number is {result}</h1>
      <button onClick={()=>{setCounter(counter + 1)}}>Counter++</button>
      <h1>Counter: {counter}</h1>
    </>
  ) 
}

export default App
