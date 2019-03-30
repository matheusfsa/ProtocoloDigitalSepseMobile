import { combineReducers } from 'redux';
import ProfissionalReducer from './ProfissionalReducer';
import PacienteReducer from './PacienteReducer';

export default combineReducers({
    ProfissionalReducer: ProfissionalReducer,
    PacienteReducer: PacienteReducer
});