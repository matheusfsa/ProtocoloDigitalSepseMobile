export const modificaPaciente = (paciente) => {
    return {
        type: 'modifica_paciente',
        payload:paciente
    }
}
export const modificaEtapa = (etapa) => {
    return {
        type: 'modifica_etapa',
        payload:etapa
    }
}