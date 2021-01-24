import React from 'react';

interface BarProps {
  toSort: number[],
  setToSort?: Function
}

const Bars = (props: BarProps) => {

  let { toSort } = props

  return(
    <div id={'bar-list'}>
      {toSort.map(( value , i) => {
        return (
          <div key={i} className={'bar'} style={{height: `${(value/toSort.length)*100}vh`, width: `${(100/toSort.length)}vw`}}>{value}</div>
        )
      })}
    </div>
  )
}

export default Bars