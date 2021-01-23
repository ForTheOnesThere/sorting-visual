import React, { useEffect, useState } from 'react';
import './App.css';
import Bars from './components/Bars'
import { populateArray, randomiseArray, quickSort } from './functions';


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
      <h2>Move the slider to customise the array length!</h2>
      <input type="range" onChange={(event) => setArrayLength(Number(event.target.value))} id="slider" defaultValue="20" min="10" max="1000"/>
      <button onClick={() => {setToSort(quickSort(toSort))}}>Sort</button>
      <Bars toSort={toSort} />
    </div>
  );
}

export default App;