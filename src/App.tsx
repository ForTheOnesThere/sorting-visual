import React, { useEffect, useState } from 'react';
import './App.css';
import { populateArray, randomiseArray } from './functions';


function App() {
// eslint-disable-next-line 
  const [toSort, setToSort] = useState<number[]>([])

  let arrayLength = 5

  const updateArray = (arrayLength: number): void => {
    setToSort(randomiseArray(populateArray(arrayLength)))
  }

  useEffect(() => {
    updateArray(arrayLength)
  },[arrayLength])
  
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <p>
        Array to be sorted: {toSort}
      </p>
    </div>
  );
}

export default App;
