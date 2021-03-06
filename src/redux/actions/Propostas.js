export const newProposals = (proposals) => (dispatch) => {
  try {
    dispatch(setProposals(proposals));
  } catch(err) {
    console.error(err.message);
  }
}

export const setProposals = (proposals) => ({
  type: 'SET_PROPOSALS',
  payload: {
    proposals
  }
})

export const newComment = (comment) => (dispatch) => {
  try {
    dispatch(setComment(comment));
  } catch (err) {
    console.error(err.message)
  }
}

export const setComment = (comment) => ({
  type: "SET_COMMENT",
  payload: {
    comment
  }
})

export const downloadProposals  = (data) => () => {
  try {
    
  } catch (err) {
    console.error(err.message);
  }
}

export const deleteProposals  = (data) => (dispatch) => {
  try {
    
    dispatch(removeProposals )
  } catch (err) {
    console.error(err.message);
  }
}

const removeProposals  = (proposals) => ({
  type: "DELETE_PROPOSALS",
  payload: {
    proposals
  }
})