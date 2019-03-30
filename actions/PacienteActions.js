export const modificaPaciente = (paciente) => {
    return {
        type: 'modifica_paciente',
        payload:paciente
    }
}