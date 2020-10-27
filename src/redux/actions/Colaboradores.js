export const newEmployees = (employees) => (dispatch) => {
  try {
    dispatch(setEmployees(employees));
  } catch (err) {
    console.err(err.message);
  }
};

export const setEmployees = (employees) => ({
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

export const setProfile = (profile) => ({
  type: "SET_PROFILE",
  payload: {
    profile,
  },
});
