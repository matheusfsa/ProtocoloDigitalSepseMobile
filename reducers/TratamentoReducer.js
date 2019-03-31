/**
 * 	private int id;
	private String data_diag;
	private String reg_paciente;
	private String nick_prof;
	private String data_inicio;
	private String data_fim;
	private String comentario;
	private int pacote;
	private ArrayList<OperacaoDto> ops;
 */
const INITIAL_STATE = {
    id : "",
    data_diag: "",
    reg_paciente: "",
    nick_prof: "",
    data_inicio: "",
    data_fim: "",
    comentario: "",
    pacote: "",
    ops: []
};
export default (state = INITIAL_STATE, action) => {
    console.log(action);
    if(action.type == 'modifica_tratamento'){
        return action.payload 
    }
    if(action.type == 'modifica_ops') {
        return { ...state, ops: action.payload }
    }
    
    return state;
}