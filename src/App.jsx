import { useEffect, useState } from 'react'
import './App.css'

function App() {

  // useEffect(callBackFunction, dependencyList)
  // useEffect(()=>{},[])

  //Three ways to use useEffect,
    //  1. useEffect(callback);
    //  2. useEffect(callback, []); with empty array
    //  3. useEffect(callback, [one, two]); with dependency
    

  const [count, setCount] = useState(0);
/*
  //  1. useEffect(callback);  here we are using useEffect without any dependency, it will change when there is a state change in the component(here App()).
  useEffect(() => {
    setTimeout(() => {
      setCount(count => count + 1);
    }, 2000);
    //This will start 0, 2, 3, 4....  to include 1 also, remove     <StrictMode></StrictMode>, from index.jsx
  });
*/

/*
  //  2. useEffect(callback, []); with empty array
  //Executes once only when the component is loaded.
  useEffect(() => {
    setTimeout(() => {
      setCount(prev => prev + 1);
    }, 2000);
  }, []);
*/

  //  3. useEffect(callback, [one, two]); with dependency
  //Executes once when the component is loaded and again when the dependency state changes.
  useEffect(() => {
    setTimeout( () => {
      setCount(prev => prev + 1);
    }, 2000);
  }, [count]);

  return (
    <>
      <h1>I've rendered {count} times!</h1>
    </>
  )
}

export default App
