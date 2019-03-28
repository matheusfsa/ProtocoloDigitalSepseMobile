const INITIAL_STATE = {
    nick_name: "",
    nome:null,
    senha:"",
    sobrenome:null,
    tipo:null,
    codigo:null
}
export default (state = INITIAL_STATE, action) => {
    console.log(action);
    if(action.type == 'modifica_nick_name'){
        return { ...state, nick_name: action.payload }
    }
    if(action.type == 'modifica_senha') {
        return { ...state, senha: action.payload }
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
    return state;
}