import React, { useEffect, useState } from 'react';
import './App.css';
import Bars from './components/Bars'
import { populateArray, randomiseArray, quickSort } from './functions';


const quickSortAnimate = (array: any, setToSort: Function, animate:any):void => {
  animate = quickSort(array)
  console.log(animate)
  for (let x = 0; x<animate.length; x++){
    let bar1 = document.querySelectorAll('.bar')[animate[x][0]]
    let bar2 = document.querySelectorAll('.bar')[animate[x][1]]
    setTimeout(()=>{
      bar1.classList.toggle('highlight')
      bar2.classList.toggle('highlight')
      setTimeout(()=>{
        let temp = bar1.getAttribute('height')
        bar1.setAttribute('height',`${bar2.getAttribute('height')}vh`)
        bar2.setAttribute('height', `${temp}vh`)
        setTimeout(()=>{
          bar1.classList.toggle('highlight')
          bar2.classList.toggle('highlight')
        }, 100*(x+1))
      },100*(x+1))
    }, 1000*(x+1))
  }
  return
}


function App() {

  const [toSort, setToSort] = useState<number[]>([])
  const [arrayLength, setArrayLength] = useState(25)
 

  const updateArray = (desiredLength: number): void => {
    setToSort(randomiseArray(populateArray(desiredLength)))
  }

  useEffect(()=>{
    console.log(`toSort changed to ${toSort}`)
  },[toSort])

  useEffect(() => {
    updateArray(arrayLength)
  },[arrayLength])

  return (
    <div className="App">
      <h2>Move the slider to customise the array length!</h2>
      <input type="range" onChange={(event) => setArrayLength(Number(event.target.value))} id="slider" defaultValue="20" min="10" max="1000"/>
      <button onClick={() => {
        quickSortAnimate(toSort, setToSort, [])
      }}>Sort</button>
      <Bars toSort={toSort} />
    </div>
  );
}

export default App;