const initialState = {
  budgets: []
}

const BudgetsReducer = (state = initialState, action) => {
  switch(action.type) {
    case "SET_BUDGETS":
      return {...state, budgets: action.payload.budgets};
    case "SET_BUDGET":
      return {...state, budgets: action.payload.budget};
    default: 
    return state;
  }
}

export default BudgetsReducer;