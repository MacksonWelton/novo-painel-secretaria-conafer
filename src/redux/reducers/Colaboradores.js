const initialState = {
  employees: [],
  profile: {}
}

const EmployeesReducer = (state = initialState, action) => {
  switch(action.type) {
    case "SET_EMPLOYEES":
      return {...state, employees: action.payload.employees};
    case "SET_EMPLOYEE":
      return {...state, employee: action.payload.employee};
    case "SET_PROFILE":
      return {...state, profile: action.payload.profile};
    default: 
    return state;
  }
}

export default EmployeesReducer;