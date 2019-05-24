const countryReducer = (state = {countries: [], selected: ''}, action) => {
  switch (action.type) {
    case 'GET_COUNTRIES':
      const updatedCountries = {...state, countries: [...state.countries, ...action.countries]}
      return updatedCountries;
    case 'UPDATE_SELECTED':
      const updatedSelected = {...state, selected: action.country}
      return updatedSelected;
    default:
      return state;
  }
}

export default countryReducer;
