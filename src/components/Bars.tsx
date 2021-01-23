import React from 'react';

interface BarProps {
  toSort: number[],
  setToSort?: Function
}

const Bars = (props: BarProps) => {

  const { toSort } = props

  return(
    <div id={'bar-list'}>
      {toSort.map(( value , i) => {
        return (
          <div key={i} style={{display: 'inline-block', height: `${value}vh`, width: `${(100/toSort.length)}vw`, backgroundColor: 'red'}}>{value}</div>
        )
      })}
    </div>
  )
}

export default Bars