export const newEmployees = (employees) => (dispatch) => {
  try {

    dispatch(setEmployees(employees));
  } catch (err) {
    console.err(err.message);
  }
}

export const setEmployees = (employees) => ({
  type: "SET_EMPLOYEES",
  payload: {
    employees
  }
})