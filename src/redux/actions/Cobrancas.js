export const newCharges = (charges) => (dispatch) => {
  try {

    dispatch(setCharges(charges));
  } catch (err) {
    console.error(err.message);
  }
};

const setCharges = (charges) => ({
  type: "SET_CHARGES",
  payload: {
    charges
  }
})

export const downloadCharges = (data) => () => {
  try {
    
  } catch (err) {
    console.error(err.message);
  }
}

export const deleteCharges = (data) => (dispatch) => {
  try {
    
    dispatch(removeCharges )
  } catch (err) {
    console.error(err.message);
  }
}

const removeCharges = (charges) => ({
  type: "DELETE_CHARGES",
  payload: {
    charges
  }
})