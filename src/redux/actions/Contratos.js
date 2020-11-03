export const newContracts = (contracts) => (dispatch) => {
  try {

    dispatch(setContracts(contracts));
  } catch (err) {
    console.err(err.message);
  }
};

export const setContracts = (contracts) => ({
  type: "SET_CONTRACTS",
  payload: {
    contracts,
  },
});

export const newComment = (comment) => (dispatch) => {
  try {
  } catch (err) {
    console.err(err.message);
  }
};

export const setComment = (comment) => ({
  type: "SET_COMMENT",
  payload: {
    comment
  }
})
