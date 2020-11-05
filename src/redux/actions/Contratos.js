export const newContracts = (contracts) => (dispatch) => {
  try {
    dispatch(setContracts(contracts));
  } catch (err) {
    console.err(err.message);
  }
};

const setContracts = (contracts) => ({
  type: "SET_CONTRACTS",
  payload: {
    contracts,
  },
});

export const newComment = (comment) => (dispatch) => {
  try {

    dispatch(setComment(comment))
  } catch (err) {
    console.err(err.message);
  }
};

const setComment = (comment) => ({
  type: "SET_COMMENT",
  payload: {
    comment
  }
})

export const downloadContracts = (data) => () => {
  try {
    
  } catch (err) {
    console.error(err.message);
  }
}

export const deleteContracts = (data) => (dispatch) => {
  try {
    
    dispatch(removeContracts(data))
  } catch (err) {
    console.error(err.message);
  }
}

const removeContracts = (contracts) => ({
  type: "DELETE_CONTRACTS",
  payload: {
    contracts
  }
})

