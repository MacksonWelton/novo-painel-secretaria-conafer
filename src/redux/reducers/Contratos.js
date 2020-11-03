const initialState = {
  contracts: [],
};

const ContractsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CONTRACTS":
      return { ...state, contracts: action.payload.contracts };
    case "SET_CONTRACT":
      return { ...state, contract: action.payload.contract };
    case "SET_COMMENT":
      return {
        ...state,
        contracts: [
          ...state.contracts.map((contract) => {
            if (contract.id === action.payload.comment.id) {
              return {
                ...contract,
                comments: [
                  ...contract.comments,
                  {
                    id: 3,
                    comment: action.payload.comment.value,
                    mainComment: null,
                    createdBy: "Marcos",
                    createdIn: "25/10/2020",
                  },
                ],
              };
            } else {
              return contract;
            }
          }),
        ],
      };
    default:
      return state;
  }
};

export default ContractsReducer;
