const initialState = {
  charges: []
}

const ChargesReducer = (state = initialState, action) => {
  switch(action.type) {
    case "SET_CHARGES":
      return {...state, charges: action.payload.charges};
    default: 
    return state;
  }
}

export default ChargesReducer;