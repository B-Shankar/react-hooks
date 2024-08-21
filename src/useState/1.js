import { useState } from 'react'
import './App.css'

function App() {

  // const [brand, setBrand] = useState('BMW');
  // const [color, setColor] = useState('White');
  // const [model, setModel] = useState('SZ6');
  // const [yaer, setYear] = useState('2019');


  //Instead of using multiple useState, we can use as a Object.
  const [car, setCar] = useState({ //[variable, function]
    brand: 'BMW',
    color: 'White',
    model: 'SZ6',
    year: '2019',
  });


  const changeColor = () => {
    setCar((prev) => {
      return {...prev, color: 'Blue'}; //use spread-operator and set the value of a element.
    });
  }

  return (
    <>
      <h1>My {car.brand}</h1>
      <h2>It is a {car.color} {car.model} from {car.year}</h2>
      <button onClick={changeColor}>Blue</button>
    </>
  )
}

export default App
