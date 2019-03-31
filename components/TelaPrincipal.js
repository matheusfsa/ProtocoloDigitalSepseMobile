import React, { Component } from 'react';
import { AppRegistry, SectionList, StyleSheet, Text, View, Alert, ScrollView } from 'react-native';
import { SearchBar, Header, ListItem, Icon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import axios from 'axios';
import { modificaListAvaliacao, modificaListEmTratamento, modificaListParaTratamento } from '../actions/ProfissionalActions';
import { modificaPaciente } from '../actions/PacienteActions';
import { modificaTratamento } from '../actions/TratamentoActions';
import { modificaAvaliacao } from '../actions/AvaliacaoActions';
import SearchHeader from 'react-native-search-header';
class TelaPrincipal extends Component {
   state = {
    search: '',
    text: '',
    list_em_tratamento :[],
    list_avaliacao :[],
    list_para_tratamento :[]

  };
  
  escolhePaciente = paciente => {
    console.log(paciente);
    this.props.modificaPaciente(paciente);
    if(paciente.etapa == "1" || paciente.etapa == "0"){
        let avaliacao = {
          registro: paciente.registro,
          codigo: this.props.codigo
        };
        if(paciente.etapa == "1"){
          
          axios.post("http://10.0.2.2:8080/api/avaliacao/criarAvaliacaoMedico", avaliacao)
          .then(res => {
            console.log(JSON.stringify(res.data.data));
            tratamento = res.data.data;
            this.props.modificaAvaliacao(avaliacao);
            Actions.avaliacao();
          })
          .catch(error => {
          });
          Actions.avaliacao();
        }else{
          axios.post("http://10.0.2.2:8080/api/avaliacao/criarAvaliacaoEnfermeiro", avaliacao)
          .then(res => {
            console.log(JSON.stringify(res.data.data));
            tratamento = res.data.data;
            this.props.modificaAvaliacao(avaliacao);
            Actions.avaliacao();
          })
          .catch(error => {
          });
        }
    }else{
      if(paciente.etapa == "3"){
        let tratamento = {
          id : "",
          data_diag: "",
          reg_paciente: paciente.registro,
          nick_prof: this.props.nick_name,
          data_inicio: "",
          data_fim: "",
          comentario: "",
          pacote: "",
          ops: []
          };
          axios.post("http://10.0.2.2:8080/api/checklist/obterCheckList", tratamento)
          .then(res => {
            console.log(JSON.stringify(res.data.data));
            tratamento = res.data.data;
            this.props.modificaTratamento(tratamento);
            Actions.tratamento();
          })
          .catch(error => {
          });
        }else{
          var today = new Date();
          var dd = String(today.getDate()).padStart(2, '0');
          var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
          var yyyy = today.getFullYear();
          var hour = today.getHours();
          var min = today.getMinutes();
          var sec = today.getSeconds();
          today = yyyy + '-' + mm + '-' + dd + ' ' + hour + ':' + min + ':' + sec ;
          let tratamento = {
            data_diag: today,
            reg_paciente: paciente.registro,
            nick_prof: this.props.nick_name,
            comentario: "",
            pacote: "3"
          };
          axios.post("http://10.0.2.2:8080/api/checklist/criarCheckList", tratamento)
          .then(res => {
            console.log(JSON.stringify(res.data.data));
            tratamento = res.data.data;
            this.props.modificaTratamento(tratamento);
            Actions.tratamento();
          })
          .catch(error => {
          });
        }
        
    }
  }
  updateSearch = text => {
    this.setState({ text });
  };
  componentWillMount(){
    console.log("http://10.0.2.2:8080/api/consulta_pacientes/tratamento/"+this.props.nick_name);
    axios.get("http://10.0.2.2:8080/api/consulta_pacientes/tratamento/"+this.props.nick_name)
    .then(res => {
      console.log(JSON.stringify(res.data.data));
      let list_em_tratamento = res.data.data;
      this.setState({list_em_tratamento});
      this.props.modificaListEmTratamento(list_em_tratamento);
      console.log(this.state.list_em_tratamento[0]);
    })
    .catch(error => {
    });
    axios.get("http://10.0.2.2:8080/api/consulta_pacientes/paraTratamento")
    .then(res => {
      console.log(JSON.stringify(res.data.data));
      let list_para_tratamento = res.data.data;
      this.setState({list_para_tratamento});
      this.props.modificaListParaTratamento(list_para_tratamento);
      console.log(this.state.list_para_tratamento[0]);
    })
    .catch(error => {
    });
    if(this.props.tipo == "0"){
      axios.get("http://10.0.2.2:8080/api/consulta_pacientes/avaliacaoMed")
      .then(res => {
        console.log(JSON.stringify(res.data.data));
        let list_avaliacao = res.data.data;
        this.setState({list_avaliacao});
        this.props.modificaListAvaliacao(list_avaliacao);
        console.log(this.state.list_avaliacao[0]);
      })
      .catch(error => {
        Alert.alert("Erro", error.response.data.errors[0]);
      });
    }else{
      axios.get("http://10.0.2.2:8080/api/consulta_pacientes/avaliacaoEnf")
      .then(res => {
        console.log(JSON.stringify(res.data.data));
        let list_avaliacao = res.data.data;
        this.setState({list_avaliacao});
        this.props.modificaListAvaliacao(list_avaliacao);
        console.log(this.state.list_avaliacao[0]);
      })
      .catch(error => {
      });
    }
  }
 
  
  render() {

    const { search } = this.state;
    return (
    <View style={styles.container}>
      <ScrollView >
        <Header
          leftComponent={<Icon name = 'info' color= '#fff' onPress= {() => Actions.recomendacoes()} />}
          centerComponent={{ text: 'Protocolo digital Sepse', style: { color: '#fff' } }}
          rightComponent={<Icon name = 'search' color= '#fff' onPress= {() => this.searchHeader.show()} />}
          containerStyle={{backgroundColor:'#00b5ec', paddingTop:10}}
          />
        <View style = { styles.status }/>
        <SearchHeader
            ref = {(searchHeader) => {
                this.searchHeader = searchHeader;
            }}
            placeholder = 'Buscar...'
            placeholderColor = 'gray'
            onClear = {async() => {
                console.log(`Clearing input!`);
                let list_em_tratamento = this.props.list_em_tratamento;
                let list_avaliacao = this.props.list_avaliacao;
                let list_para_tratamento = this.props.list_para_tratamento;
                this.setState({list_em_tratamento});
                this.setState({list_avaliacao});
                this.setState({list_para_tratamento})
            }}
            onEnteringSearch = {async(event) =>{
              console.log(event.nativeEvent.text);
              let text = event.nativeEvent.text
              this.setState({text})
              const contains = (value) => {
                let str = value.nome + " " + value.sobrenome;
                console.log("str: " + str + " text: " + text  + "res: " + str.toUpperCase().includes(text.toUpperCase()) )
                return str.toUpperCase().includes(text.toUpperCase()) ;
              }
              let list_em_tratamento = this.props.list_em_tratamento.filter(contains);
              let list_avaliacao = this.props.list_avaliacao.filter(contains)
              let list_para_tratamento = this.props.list_para_tratamento.filter(contains)
              this.setState({list_em_tratamento});
              this.setState({list_avaliacao});
              this.setState({list_para_tratamento});
            }}
            onHide ={async() => {
              console.log(`Hide`);
              let list_em_tratamento = this.props.list_em_tratamento;
              let list_avaliacao = this.props.list_avaliacao;
              let list_para_tratamento = this.props.list_para_tratamento;
              this.setState({list_em_tratamento});
              this.setState({list_avaliacao});
              this.setState({list_para_tratamento})
          }}
           
        />
          
          <View>
            <Text style={styles.sectionHeader}>Pacientes em Tratamento</Text>
            {
            this.state.list_em_tratamento.map((l, i) => (
              <ListItem
                key={i}
                title={l.nome + " " + l.sobrenome}
                subtitle={"Registro: " + l.registro}
                onPress={()=>this.escolhePaciente(l)}
                chevron
              />
            ))
            }
          </View>
          <View>
            <Text style={styles.sectionHeader}>Pacientes para Tratamento</Text>
            {
            this.state.list_para_tratamento.map((l, i) => (
              <ListItem
                key={i}
                title={l.nome + " " + l.sobrenome}
                subtitle={"Registro: " + l.registro}
                onPress={()=>this.escolhePaciente(l)}
                chevron
              />
            ))
            }
          </View>
          <View>
            <Text style={styles.sectionHeader}>Pacientes para Avaliação</Text>
            {
              this.state.list_avaliacao.map((l, i) => (
                <ListItem
                  key={i}
                  title={l.nome + " " + l.sobrenome}
                  subtitle={"Registro: " + l.registro}
                  onPress={()=>this.escolhePaciente(l)}
                  chevron
                />
              ))
            }
          </View>
      </ScrollView>
    </View>
    );
  }
}
const mapStateToProps = state => (
  {
      nick_name: state.ProfissionalReducer.nick_name,
      senha: state.ProfissionalReducer.senha,
      sobrenome: state.ProfissionalReducer.sobrenome,
      tipo:state.ProfissionalReducer.tipo,
      codigo:state.ProfissionalReducer.codigo,
      list_avaliacao : state.ProfissionalReducer.list_avaliacao,
      list_em_tratamento : state.ProfissionalReducer.list_em_tratamento,
      list_para_tratamento : state.ProfissionalReducer.list_para_tratamento
  }
)

export default connect(mapStateToProps, { modificaListAvaliacao,
                                          modificaListEmTratamento, 
                                          modificaListParaTratamento, 
                                          modificaPaciente, 
                                          modificaTratamento,
                                          modificaAvaliacao})(TelaPrincipal);
const styles = StyleSheet.create({
  container: {
   flex: 1,
   borderWidth: 1.5,
   borderColor: '#d6d7da'
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
    
  }
})

