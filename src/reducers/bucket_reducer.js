const bucketReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_BUCKET':
      const newState = [...state, action.country]
      return newState;
    default:
      return state;
  }
}

export default bucketReducer;
