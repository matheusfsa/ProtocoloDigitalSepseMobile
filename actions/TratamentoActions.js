export const modificaTratamento = (tratamento) => {
    return {
        type: 'modifica_tratamento',
        payload:tratamento
    }
}
export const modificaOps = (ops) => {
    return {
        type: 'modifica_ops',
        payload:ops
    }
}