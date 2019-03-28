import React, { Component } from 'react';
import axios from 'axios';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class LoginView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nick_name: "",
	    password:""
    }
  }
  onClickLogin = () => {
    if(this.state.nick == ""){
      Alert.alert("Erro", "O campo nickname deve ser preenchido");
    }else if(this.state.password == ""){
      Alert.alert("Erro", "O campo password deve ser preenchido");
      
    }else{
      const user ={
        "nick_name": this.state.nick_name,
        "nome":null,
        "senha":this.state.password,
        "sobrenome":null,
        "tipo":null,
        "codigo":null
      };
      Alert.alert("user", JSON.stringify(user));
      axios.post("http://10.0.2.2:8080/api/profissional/login", user)
        .then(res => {
          Alert.alert("Resultado", JSON.stringify(res.data));
          Actions.telaPrincipal();
        })
        .catch(error => {
          Alert.alert("Erro", error.response.data.errors[0]);
        }
      );
      //Actions.telaPrincipal();
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
              onChangeText={(nick_name) => this.setState({nick_name})}/>
        </View>
        
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
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
 