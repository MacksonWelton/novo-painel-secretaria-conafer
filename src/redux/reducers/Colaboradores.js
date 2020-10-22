const initialState = {
  employees: []
}

const EmployeesReducer = (state = initialState, action) => {
  switch(action.type) {
    case "SET_EMPLOYEES":
      return {...state, employees: action.payload.employees};
    case "SET_EMPLOYEE":
      return {...state, employee: action.payload.employee};
    default: 
    return state;
  }
}

export default EmployeesReducer;