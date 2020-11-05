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

export const downloadCharges = (data) => () => {
  try {
    console.log(data);
  } catch (err) {
    console.error(err.message);
  }
}

export const deleteCharges = (data) => (dispatch) => {
  try {
    console.log(data);
    dispatch(removeCharges )
  } catch (err) {
    console.error(err.message);
  }
}

const removeCharges = (charges) => ({
  type: "DELETE_EMPLOYEES",
  payload: {
    charges
  }
})