import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import './App.css'
import Header from './useCallback/Component/Header';

function App() {
  //useCallback Hook
  //useCallback is a react hook that lets you cache a function definition between re-renders.
  //It means, when we use the useCallback Hook, it doesn't create a multiple instance of same function when re-render happens.
  //Instead of creating new instance of the function, it provides the cached function on re-render of the component. 
  const [count, setCount] = useState(0);

  // const newFun = () => {}
    const newFun = useCallback(()=>{}, []);

  return (
    <>
      <Header newFun={newFun}/>
      <h1>{count}</h1>
      <button onClick={()=>{ setCount(count + 1)}}>Click here</button>
    </>  
  )
}

export default App
