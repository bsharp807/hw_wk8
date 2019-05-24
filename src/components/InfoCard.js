import React from 'react';
import './InfoCard.css'

const InfoCard = (props) => {
  const country = props.countries.findIndex((element) => {
    return element.name === props.selected
  })

  const handleClick = () => {
    const selectedCountry = {
      name: props.countries[country].name,
      flag: props.countries[country].flag,
      native: props.countries[country].nativeName,
    }
    props.addToBucket(selectedCountry);
  }

  const handleVisit = () => {
    const selectedCountry = {
      name: props.countries[country].name,
      flag: props.countries[country].flag,
      native: props.countries[country].nativeName,
    }
    props.addToVisited(selectedCountry);
  }

  if (country > -1) {
    return(
      <div>
        <div>{props.countries[country].name}</div>
        <img className='flag' src={props.countries[country].flag} alt='flag' />
        <button onClick={handleClick}>Add to Bucket</button>
        <button onClick={handleVisit}>Visited</button>
      </div>
    )
  } return null;
}

export default InfoCard;
