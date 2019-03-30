const INITIAL_STATE = {
    nick_name: "",
    nome:null,
    sobrenome:null,
    tipo:"0",
    codigo:null,
    list_em_tratamento :[],
    list_avaliacao :[],
    list_para_tratamento :[]
}
export default (state = INITIAL_STATE, action) => {
    console.log(action);
    if(action.type == 'modifica_nick_name'){
        return { ...state, nick_name: action.payload }
    }
    if(action.type == 'modifica_nome') {
        return { ...state, nome: action.payload }
    }
    if(action.type == 'modifica_sobrenome') {
        return { ...state, sobrenome: action.payload }
    }
    if(action.type == 'modifica_tipo') {
        return { ...state, tipo: action.payload }
    }
    if(action.type == 'modifica_codigo') {
        return { ...state, codigo: action.payload }
    }
    if(action.type == 'modifica_list_em_tratamento') {
        return { ...state, list_em_tratamento: action.payload }
    }
    if(action.type == 'modifica_list_avaliacao') {
        return { ...state, list_avaliacao: action.payload }
    }
    if(action.type == 'modifica_list_para_tratamento') {
        return { ...state, list_para_tratamento: action.payload }
    }
    return state;
}