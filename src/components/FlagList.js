import React from 'react';
import Flag from './Flag';

const FlagList = (props) => {

  const mapFlags = props.bucket.map((element, index) => {
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

export default FlagList;
