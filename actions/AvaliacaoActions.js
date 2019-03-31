export const modificaAvaliacao = (avaliacao) => {
    return {
        type: 'modifica_avaliacao',
        payload:avaliacao
    }
}
export const modificaOps = (ops) => {
    return {
        type: 'modifica_ops',
        payload:ops
    }
}