import { combineReducers } from 'redux';

import ContractsReducer from "./reducers/Contratos";
import EmployeesReducer from "./reducers/Colaboradores";

const Reducers = combineReducers({
  ContractsReducer,
  EmployeesReducer
});

export default Reducers;