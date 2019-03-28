import React, { Component } from 'react';
import { AppRegistry, SectionList, StyleSheet, Text, View, Alert, ScrollView } from 'react-native';
import { SearchBar, Header, ListItem } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import axios from 'axios';
class TelaPrincipal extends Component {
   state = {
    search: '',
    list_em_tratamento :[],
    list_avaliacao :[],
    list_para_tratamento :[]
  };
  

  updateSearch = search => {
    this.setState({ search });
  };
  componentWillMount(){
    axios.get("http://10.0.2.2:8080/api/consulta_pacientes/tratamento/"+this.props.nick_name)
    .then(res => {
      console.log(JSON.stringify(res.data.data));
      let list_em_tratamento = res.data.data;
      this.setState({list_em_tratamento});
      console.log(this.state.list_em_tratamento[0]);
    })
    .catch(error => {
    });
    axios.get("http://10.0.2.2:8080/api/consulta_pacientes/paraTratamento")
    .then(res => {
      console.log(JSON.stringify(res.data.data));
      let list_para_tratamento = res.data.data;
      this.setState({list_para_tratamento});
      console.log(this.state.list_para_tratamento[0]);
    })
    .catch(error => {
    });
    if(this.props.tipo == "1"){
      axios.get("http://10.0.2.2:8080/api/consulta_pacientes/avaliacaoMed")
      .then(res => {
        console.log(JSON.stringify(res.data.data));
        let list_avaliacao = res.data.data;
        this.setState({list_avaliacao});
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
        console.log(this.state.list_avaliacao[0]);
      })
      .catch(error => {
      });
    }
  }
  
  
  render() {
    
    const list = [
            {
              name: 'Amy Farha',
              avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
              subtitle: 'Vice President'
            },
            {
              name: 'Chris Jackson',
              avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
              subtitle: 'Vice Chairman'
            },
            {
              name: 'José',
              avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
              subtitle: 'Vice Chairman'
            },
            {
              name: 'João',
              avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
              subtitle: 'Vice Chairman'
            }
        ];
    const { search } = this.state;
    return (
    <View style={styles.container}>
      <ScrollView >

         <Header
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'Protocolo digital Sepse', style: { color: '#fff' } }}
            rightComponent={{ icon: 'search', color: '#fff' }}
            containerStyle={{backgroundColor:'#00b5ec'}}
            
        	/>
          <View>
            <Text style={styles.sectionHeader}>Pacientes em Tratamento</Text>
            {
            this.state.list_em_tratamento.map((l, i) => (
              <ListItem
                key={i}
                title={l.nome + " " + l.sobrenome}
                onPress={()=>Actions.pergunta()}
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
                onPress={()=>Actions.pergunta()}
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
                  onPress={()=>Actions.pergunta()}
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
      codigo:state.ProfissionalReducer.codigo
  }
)

export default connect(mapStateToProps, null)(TelaPrincipal);
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

