export const newCharges = (charges) => (dispatch) => {

  console.log(charges)
  dispatch(setCharges(charges));
};

export const setCharges = (charges) => ({
  type: "SET_CHARGES",
  payload: {
    charges
  }
})