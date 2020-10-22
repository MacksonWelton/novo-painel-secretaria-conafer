const initialState = {
  contracts: []
}

const ContractsReducer = (state = initialState, action) => {
  switch(action.type) {
    case "SET_CONTRACTS":
      return {...state, contracts: action.payload.contracts};
    case "SET_CONTRACT":
      return {...state, contract: action.payload.contract};
    default: 
    return state;
  }
}

export default ContractsReducer;