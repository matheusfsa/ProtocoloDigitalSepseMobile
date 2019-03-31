/**
 * private int id;
	private String codigo;
	private String registro;
	private String data;
	private ArrayList<AvMedOpDto> ops;
 */
const INITIAL_STATE = {
    id : "",
    codigo: "",
    registro: "",
    data: "",
    ops: []
};
export default (state = INITIAL_STATE, action) => {
    console.log(action);
    if(action.type == 'modifica_avaliacao'){
        return action.payload 
    }
    if(action.type == 'modifica_ops') {
        return { ...state, ops: action.payload }
    }
    
    return state;
}