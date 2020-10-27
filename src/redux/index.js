import { combineReducers } from 'redux';

import ContractsReducer from "./reducers/Contratos";
import EmployeesReducer from "./reducers/Colaboradores";
import BudgetsReducer from "./reducers/Orcamentos";
import ProjectsReducer from "./reducers/Projetos";

const Reducers = combineReducers({
  ContractsReducer,
  EmployeesReducer,
  BudgetsReducer,
  ProjectsReducer
});

export default Reducers;