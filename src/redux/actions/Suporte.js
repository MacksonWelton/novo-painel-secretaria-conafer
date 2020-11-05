export const newSupports = (supports) => (dispatch) => {
  dispatch(setSupports(supports));
};

export const newAnswers = (answers) => (dispatch) => {
  dispatch(setAnswers(answers));
};

export const setSupports = (supports) => ({
  type: "SET_SUPPORTS",
  payload: {
    supports,
  },
});

export const setAnswers = (answers) => ({
  type: "SET_ANSWES",
  payload: {
    answers,
  },
});

export const downloadSupports  = (data) => () => {
  try {
    
  } catch (err) {
    console.error(err.message);
  }
}

export const deleteSupports  = (data) => (dispatch) => {
  try {
    
    dispatch(removeSupports )
  } catch (err) {
    console.error(err.message);
  }
}

const removeSupports  = (supports) => ({
  type: "DELETE_EMPLOYEES",
  payload: {
    supports
  }
})