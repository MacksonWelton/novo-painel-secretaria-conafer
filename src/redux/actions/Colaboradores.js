export const newEmployees = (employees) => (dispatch) => {
  try {
    dispatch(setEmployees(employees));
  } catch (err) {
    console.err(err.message);
  }
};

const setEmployees = (employees) => ({
  type: "SET_EMPLOYEES",
  payload: {
    employees,
  },
});

export const editProfile = (profile) => (dispatch) => {
  try {
    dispatch(setProfile(profile));
  } catch (err) {
    console.error(err.message);
  }
};

const setProfile = (profile) => ({
  type: "SET_PROFILE",
  payload: {
    profile,
  },
});

export const downloadEmployees= (data) => () => {
  try {
    
  } catch (err) {
    console.error(err.message);
  }
}

export const deleteEmployees= (data) => (dispatch) => {
  try {
    
    dispatch(removeEmployees)
  } catch (err) {
    console.error(err.message);
  }
}

const removeEmployees = (employees) => ({
  type: "DELETE_EMPLOYEES",
  payload: {
    employees
  }
})