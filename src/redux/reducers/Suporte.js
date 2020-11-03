const initialState = {
  supports: [],
};

const SupportsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SUPPORTS":
      return { ...state, supports: action.payload.supports };
    case "SET_SUPPORT":
      return { ...state, support: action.payload.support };
    default:
      return state;
  }
};

export default SupportsReducer;
