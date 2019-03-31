import { combineReducers } from 'redux';
import ProfissionalReducer from './ProfissionalReducer';
import PacienteReducer from './PacienteReducer';
import AvaliacaoReducer from './AvaliacaoReducer';
import TratamentoReducer from './TratamentoReducer';
export default combineReducers({
    ProfissionalReducer: ProfissionalReducer,
    PacienteReducer: PacienteReducer,
    AvaliacaoReducer: AvaliacaoReducer,
    TratamentoReducer: TratamentoReducer

});