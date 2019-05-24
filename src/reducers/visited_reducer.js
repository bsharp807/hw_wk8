const visitedReducer = (state = [], action) => {
  switch (action.type) {
    case 'VISIT':
      const newState = [...state, action.country]
      return newState;
    default:
      return state;
  }
}

export default visitedReducer;
