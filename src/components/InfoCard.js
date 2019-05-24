import React from 'react';

const InfoCard = (props) => {
  const country = props.countries.findIndex((element) => {
    return element.name === props.selected
  })

    if (country > -1) {
      return(
        <div>
          <div>{props.countries[country].name}</div>
          <button>Add to Bucket</button>
        </div>
      )
    } return null;
}

export default InfoCard;
