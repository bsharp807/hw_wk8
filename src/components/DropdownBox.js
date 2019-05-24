import React from 'react';
import DropdownOptions from './DropdownOptions';

const DropdownBox = (props) => {

  const mapCountries = () => {
    console.log(props.countries);
    return props.countries.map((element, index) => {
      return(
        <DropdownOptions
          key={index}
          name={element.name}
        />
      )
    })
  }

  const handleChange = (event) => {
    props.updateSelected(event.target.value)
  }

  return(
    <select onChange={handleChange}>
      {mapCountries()}
    </select>
  )

}

export default DropdownBox;
