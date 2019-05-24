import React from 'react';
import Flag from './Flag';

const VisitList = (props) => {

  const mapFlags = props.visited.map((element, index) => {
    return(
      <Flag
        key={index}
        name={element.name}
        flag={element.flag}
        native={element.native}
      />
    )
  })

  return(
    <div>
      {mapFlags}
    </div>
  )
}

export default VisitList;
