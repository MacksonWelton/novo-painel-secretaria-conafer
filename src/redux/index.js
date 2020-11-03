import { combineReducers } from "redux";

import ContractsReducer from "./reducers/Contratos";
import EmployeesReducer from "./reducers/Colaboradores";
import BudgetsReducer from "./reducers/Orcamentos";
import ProjectsReducer from "./reducers/Projetos";
import ChargesReducer from "./reducers/Cobrancas";
import ProposalReducer from "./reducers/Propostas";
import SupportsReducer from "./reducers/Suporte";

const Reducers = combineReducers({
  ContractsReducer,
  EmployeesReducer,
  BudgetsReducer,
  ProjectsReducer,
  ChargesReducer,
  ProposalReducer,
  SupportsReducer,
});

export default Reducers;
