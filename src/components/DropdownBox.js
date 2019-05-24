import React from 'react';
import DropdownOptions from './DropdownOptions';

const DropdownBox = (props) => {

  const mapCountries = () => {
    return props.countries.map((element, index) => {
      return(
        <DropdownOptions
          key={index}
          name={element.name}
        />
      )
    })
  }

  return(
    <select>
      {mapCountries()}
    </select>
  )

}

export default DropdownBox;
