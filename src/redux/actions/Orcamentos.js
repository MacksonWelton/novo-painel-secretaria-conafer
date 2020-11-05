export const newBudgets = (budgets) => (dispatch) => {

  dispatch(setBudgets(budgets));
};

export const newBudget = (budget) => (dispatch) => {

  dispatch(setBudgets(budget));
};

export const newComment = (budget) => (dispatch) => {

  dispatch(setBudgets(budget));
};

export const setBudgets = (budgets) => ({
  type: "SET_BUDGETS",
  payload: {
    budgets,
  },
});

export const setBudget = (budget) => ({
  type: "SET_BUDGET",
  payload: {
    budget,
  },
});

export const downloadBudgets  = (data) => () => {
  try {
    
  } catch (err) {
    console.error(err.message);
  }
}

export const deleteBudgets  = (data) => (dispatch) => {
  try {
    
    dispatch(removeBudgets )
  } catch (err) {
    console.error(err.message);
  }
}

const removeBudgets  = (budgets) => ({
  type: "DELETE_EMPLOYEES",
  payload: {
    budgets
  }
})