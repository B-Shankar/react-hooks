import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  //useRef: it will create a mutable variable, doesn't re-render again
  //Accessing DOM Element (select and modify DOM element.)

  const inputElement = useRef();

  const handleClick = () => {
    console.log(inputElement.current); //<input type="text">
    inputElement.current.style.background='blue'; //<input type="text" style="background: blue;">
  }

  return (
    <>
      <input type="text" ref={inputElement}/>
      <button onClick={handleClick}>Click Here</button>
    </>
  )
}

export default App
