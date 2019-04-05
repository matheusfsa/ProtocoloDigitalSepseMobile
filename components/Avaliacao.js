import React, { Component } from 'react';
import { Text, View, StyleSheet,TouchableHighlight,ScrollView  } from 'react-native';
import {ListItem } from 'react-native-elements';
import { modificaOps } from '../actions/AvaliacaoActions';
import { modificaPaciente } from '../actions/PacienteActions';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import axios from 'axios';
class Avaliacao extends Component {
   state = {
      valor: true,
      passo_max:0,
      passo_atual:1,
      botao_titulo:"Próxima Avaliacão",
      op  : [],
      perguntas : []

    };
    press(l){
      console.log("valor: " + l.resultado);
      let op = this.state.op;
      console.log(op);
      if(l.resultado=="0"){
         op[op.indexOf(l)].resultado = "1";
      }else{
         op[op.indexOf(l)].resultado = "0";
      }
      console.log(op);
      this.setState({op});
      
    };
    
    onClickAvancar(){
         let passo_atual = 0;

       if(this.props.tipo == "0"){
          if(this.state.passo_atual == 3){
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();
            var hour = today.getHours();
            var min = today.getMinutes();
            var sec = today.getSeconds();
            today = yyyy + '-' + mm + '-' + dd + ' ' + hour + ':' + min + ':' + sec ;
            console.log(this.state.op);
            avaliacao = {
               id : this.props.id,
               codigo: this.props.codigo,
               registro:  this.props.registro,
               data:  today,
               ops: this.state.op
            };
            paciente  = {
               nome : this.props.nome,
               sobrenome : this.props.sobrenome,
               data_nascimento : this.props.data_nascimento,
               etapa:2,
               sexo:this.props.sexo,
               grupo_de_risco:this.props.grupo_de_risco,
               registro: this.props.registro
            };
            console.log(paciente);
            this.props.modificaPaciente(paciente);   
            axios.post("http://10.0.2.2:8080/api/consulta_pacientes/atualizar", paciente).then(res => {});
            if(this.props.tipo == "0"){
            axios.post("http://10.0.2.2:8080/api/avaliacao/atualizarAvaliacaoMedico", avaliacao)
            .then(res => {
               Actions.telaPrincipal();
            })
            .catch(error => {
            });
            }else{
               axios.post("http://10.0.2.2:8080/api/avaliacao/atualizarAvaliacaoEnfermeiro", avaliacao)
               .then(res => {
                  Actions.telaPrincipal();
               })
               .catch(error => {
               });
            }
          }else{
             passo_atual = this.state.passo_atual + 1
             this.setState({passo_atual});
          }
       }
       else if(this.props.tipo == "1"){
         if(this.state.passo_atual == 2){
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();
            var hour = today.getHours();
            var min = today.getMinutes();
            var sec = today.getSeconds();
            today = yyyy + '-' + mm + '-' + dd + ' ' + hour + ':' + min + ':' + sec ;
            avaliacao = {
               id : this.props.id,
               codigo: this.props.codigo,
               registro:  this.props.registro,
               data:  today,
               ops: this.props.ops
            };
            paciente  = {
               nome : this.props.nome,
               sobrenome : this.props.sobrenome,
               data_nascimento : this.props.data_nascimento,
               etapa:1,
               sexo:this.props.sexo,
               grupo_de_risco:this.props.grupo_de_risco,
               registro: this.props.registro
            };
            this.props.modificaPaciente(paciente);   
            axios.post("http://10.0.2.2:8080/api/consulta_pacientes/atualizar", paciente).then(res => {});
            if(this.props.tipo == "0"){
            axios.post("http://10.0.2.2:8080/api/avaliacao/atualizarAvaliacaoMedico", avaliacao)
            .then(res => {
               Actions.telaPrincipal();
            })
            .catch(error => {
            });
            }else{
               axios.post("http://10.0.2.2:8080/api/avaliacao/atualizarAvaliacaoEnfermeiro", avaliacao)
               .then(res => {
                  Actions.telaPrincipal();
               })
               .catch(error => {
               });
            }
             Actions.telaPrincipal();
         }else{
            passo_atual = this.state.passo_atual + 1
            this.setState({passo_atual});
         }
      }
    }
    componentWillMount(){
       let op = this.props.ops;
       
     
      this.setState({op});
      console.log("op :" + this.state.op)
       if(this.props.tipo == "0"){
          let passo_max = 3;
          this.setState({passo_max});

          let perguntas = ["O paciente apresenta sinal sugestivo de infecção?","O paciente apresenta sinal sugestivo de infecção?","Há novas disfunções"];
          this.setState({perguntas});
          
       }else{
         let passo_max = 2;
         this.setState({passo_max});
         let perguntas = ["O paciente apresenta quais sinais de Sirs?","O paciente apresenta quais sinais abaixo?"];
          this.setState({perguntas});
       }
     
      
    }
    checked(valor){
       if(valor=="0"){
          return false;
       }
       return true;
    }
    isEtapa(opcao){
      return parseInt(opcao.tipo) == this.state.passo_atual;
   }
    render() {
      return (
        <View style={styles.container}>
         <Text style={styles.titulo}>
            {this.state.perguntas[this.state.passo_atual - 1]}{'\n'}
         </Text>
        <ScrollView >
        {
         this.state.op.filter(this.isEtapa.bind(this)).map((l, i) =>(
            
              <ListItem
                key={i}
                title={l.opcao}
                checkBox={{checked : this.checked(l.resultado), onPress: this.press.bind(this,l)}}
                onPress={()=> this.press(l)}
              />
         
         ))
         }
        
       </ScrollView>
       <TouchableHighlight style={[styles.botaoContainer, styles.botao]} onPress={() => this.onClickAvancar()}>
          <Text style={styles.botaoText}>{this.state.botao_titulo}</Text>
         </TouchableHighlight>
      
        </View>
      );
    }
}
const mapStateToProps = state => (
   {
      id : state.AvaliacaoReducer.id,
      codigo: state.AvaliacaoReducer.codigo,
      registro: state.AvaliacaoReducer.registro,
      data: state.AvaliacaoReducer.data,
      ops: state.AvaliacaoReducer.ops,
      tipo: state.ProfissionalReducer.tipo,
      nome : state.PacienteReducer.nome,
      sobrenome : state.PacienteReducer.sobrenome,
      data_nascimento : state.PacienteReducer.data_nascimento,
      etapa:state.PacienteReducer.etapa,
      sexo:state.PacienteReducer.sexo,
      grupo_de_risco:state.PacienteReducer.grupo_de_risco
   }
 );
 const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: 'white'
   },
   titulo: {
      borderTopColor: '#00b5ec',
      borderTopWidth: 1,
      borderBottomColor: '#00b5ec',
      borderBottomWidth: 1,
      height:45,
      fontWeight:'bold',
      fontSize:18,
      color:'black'
    },
   botaoContainer: {
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:250,
      borderRadius:30,
    },
    botao: {
      backgroundColor: "#00b5ec",
    },
    botaoText: {
      color: 'white',
    }
 })
export default connect(mapStateToProps, { modificaOps, modificaPaciente})(Avaliacao);
