import { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0);

  // 1
  // const handleIncrement = () => {
  //   setCount(count + 1);
  // }

  // 2
  // const handleIncrement = () => {
  //   //Here, it will not increment by 4
  //   setCount(count + 1);
  //   setCount(count + 1);
  //   setCount(count + 1);
  //   setCount(count + 1);
  // }

  // 3
  const handleIncrement = () => {
    //In order to increment by 4
    //Here, (prev) => {prev + 1} brackets are not neccessary 
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
  }

  return (
    <>
      <h1>My Count is {count}</h1>
      <button onClick={handleIncrement}>Increase</button>
    </>
  )
}

export default App
