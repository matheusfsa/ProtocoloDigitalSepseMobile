import React, { Component } from 'react';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image,
  Alert
} from 'react-native';
import { connect } from 'react-redux';

import { modificaNickName, modificaSenha, realizaLogin } from '../actions/ProfissionalActions';

class Login extends Component {


  onClickLogin = () => {
    const { nick_name, senha } = this.props;

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
  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: "https://img.icons8.com/ultraviolet/50/000000/gender-neutral-user.png"}}/>
          <TextInput style={styles.inputs}
              placeholder="Nickname"
              underlineColorAndroid='transparent'
              onChangeText={(nick_name) => this.props.modificaNickName(nick_name)}/>
        </View>
        
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Senha"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(senha) => this.props.modificaSenha(senha)}/>
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickLogin()}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>


        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('register')}>
            <Text>Cadastre-se</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const mapStateToProps = state => (
  {
      nick_name: state.ProfissionalReducer.nick_name,
      senha: state.ProfissionalReducer.senha
  }
)

export default connect(mapStateToProps, { modificaNickName, modificaSenha, realizaLogin })(Login);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  inputContainer: {
      borderBottomColor: '#00b5ec',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
  }
});

 