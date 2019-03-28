

export const modificaNickName = (texto) => {
    return {
        type: 'modifica_nick_name',
        payload: texto
    }
}

export const modificaSenha = (texto) => {
    return {
        type: 'modifica_senha',
        payload: texto
    }
}

export const modificaNome = (texto) => {
    return {
        type: 'modifica_nome',
        payload: texto
    }
}
export const modificaTipo = (texto) => {
    return {
        type: 'modifica_tipo',
        payload: texto
    }
}
export const modificaCodigo = (texto) => {
    return {
        type: 'modifica_codigo',
        payload: texto
    }
}
export const cadastraUsuario = ({ nome, email, senha }) => {
    alert(senha);
    return {
        type: 'teste'
    }
}
export const realizaLogin = ({nick_name, senha}) => {
    if(nick_name == ""){
      Alert.alert("Erro", "O campo nickname deve ser preenchido");
    }else if(senha == ""){
      Alert.alert("Erro", "O campo senha deve ser preenchido");
      
    }else{
      const user ={
        nick_name: nick_name,
        nome:null,
        senha:senha,
        sobrenome:null,
        tipo:null,
        codigo:null
      };
      Alert.alert("user", JSON.stringify(user));
      axios.post("http://10.0.2.2:8080/api/profissional/login", user)
        .then(res => {
          Actions.telaPrincipal();
        })
        .catch(error => {
          Alert.alert("Erro", error.response.data.errors[0]);
        }
      );
    }
  }