import React from 'react';
import './InfoCard.css'

const Flag = (props) => {
  return(
    <div>
      <img className='flag' src={props.flag} alt='flag' />
      <div>{props.name}</div>
      <div>{props.native}</div>
    </div>
  )
}

export default Flag;
