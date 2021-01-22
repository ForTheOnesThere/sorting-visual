import React, { useEffect, useState } from 'react';
import './App.css';
import { populateArray, randomiseArray } from './functions';


function App() {

  const [toSort, setToSort] = useState<number[]>([])
  const [arrayLength, setArrayLength] = useState(25)

  const updateArray = (desiredLength: number): void => {
    setToSort(randomiseArray(populateArray(desiredLength)))
  }

  useEffect(() => {
    updateArray(arrayLength)
  },[arrayLength])

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <h2>Move the slider to customise the array length!</h2>
      <p>
        Array to be sorted: {toSort.join(', ')}
      </p>
      <input type="range" onChange={(event) => setArrayLength(Number(event.target.value))} id="slider" defaultValue="20" min="10" max="100"/>
    </div>
  );
}

export default App;
