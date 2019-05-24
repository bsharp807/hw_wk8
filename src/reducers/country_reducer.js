const countryReducer = (state = {countries: [], selected: '', action) => {
  switch (action.type) {
    case 'GET_COUNTRIES':
      return state;
    case 'UPDATE_SELECTED':
      return state;
    default:
      return state;
  }
}

export default countryReducer;
