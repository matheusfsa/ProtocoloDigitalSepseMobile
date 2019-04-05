const INITIAL_STATE = {
    nome : "",
    sobrenome : "",
    data_nascimento : "",
    registro:"",
    etapa:"",
    sexo:"",
    grupo_de_risco:""
}

export default (state = INITIAL_STATE, action) => {
    if(action.type == 'modifica_paciente'){
        return action.payload; 
    }
    if(action.type == 'modifica_etapa'){
        return { ...state, etapa: action.payload }
    }
    return state;
}