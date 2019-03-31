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
import RadioGroup from 'react-native-radio-buttons-group';
import { connect } from 'react-redux';

import { modificaNickName, modificaCodigo, modificaTipo } from '../actions/ProfissionalActions';

class Login extends Component {
  state = {
    data: [
      {
          label: 'Médica(o)',
          value: "0"
      },
      {
          label: 'Enfermeira(o)',
          value:"1"
      }
      
  ]
  }
  onPress = data => {
    this.setState({ data });
    let selectedButton = this.state.data.find(e => e.selected == true);
    selectedButton = selectedButton ? selectedButton.value : this.state.data[0].value;
    console.log("botão selecionado " + selectedButton);
    this.props.modificaTipo(selectedButton);
  }
  
  onClickLogin = () => {
    const { codigo, tipo } = this.props;
    let nick_name = "";
    if (tipo  == "0"){
      nick_name = "med"+codigo;
    }else{
      nick_name = "enf"+codigo;
    }
    this.props.modificaNickName(nick_name);
    if(codigo == ""){
      Alert.alert("Erro", "O campo deve ser preenchido");
    }else{
      const user ={
        nick_name: nick_name,
        nome:null,
        sobrenome:null,
        tipo:null,
        codigo:null
      };
      
      axios.post("http://10.0.2.2:8080/api/profissional/login", user)
        .then(res => {
          Alert.alert("user", JSON.stringify(res.data.data));
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
        <Image style={styles.logo} source={require('../imgs/logo.png')}/>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: "https://img.icons8.com/ultraviolet/50/000000/gender-neutral-user.png"}}/>
          <TextInput style={styles.inputs}
              placeholder="CRM/COREN"
              underlineColorAndroid='transparent'
              onChangeText={(codigo) => this.props.modificaCodigo(codigo)}/>
        </View>
        <View style={styles.inputTipo}>
          <RadioGroup radioButtons={this.state.data} onPress={this.onPress} flexDirection="row"/>
        </View>
          

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickLogin()}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>

      </View>
    );
  }
}

const mapStateToProps = state => (
  {
      codigo: state.ProfissionalReducer.codigo,
      tipo: state.ProfissionalReducer.tipo
  }
)

export default connect(mapStateToProps, { modificaNickName, modificaCodigo,modificaTipo })(Login);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logo:{
    marginBottom:60
  },
  inputTipo: {
    borderBottomColor: 'white',
    backgroundColor: '#FFFFFF',
    borderRadius:30,
    borderBottomWidth: 1,
    width:250,
    height:45,
    marginBottom:20,
    flexDirection: 'row',
    alignItems:'center'
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

 