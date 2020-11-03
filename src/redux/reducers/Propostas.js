const initialState = {
  proposals: [],
};

const ProposalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PROPOSALS":
      return {
        ...state,
        proposals: action.payload.proposals,
      };
    case "SET_COMMENT":
      return state;
    default:
      return state;
  }
};

export default ProposalReducer;
