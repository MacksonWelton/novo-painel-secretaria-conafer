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
