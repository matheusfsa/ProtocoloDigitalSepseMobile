import React, { Component } from 'react';
import { AppRegistry, SectionList, StyleSheet, Text, View, Alert, ScrollView } from 'react-native';
import { SearchBar, Header, ListItem } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
export default class TelaPrincipal extends Component {
   state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };

  
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
		list.map((l, i) => (
		  <ListItem
		    key={i}
		    title={l.name}
        onPress={()=>Actions.pergunta()}
		    chevron
		  />
		))
	      }
	    </View>
            <View>
	      <Text style={styles.sectionHeader} onPress={()=>Alert("I want this")}>Pacientes em Avaliação</Text>
	      {
		list.map((l, i) => (
		  <ListItem
		    key={i}
		    title={l.name}
        onPress={()=>Actions.pergunta()}
		    chevron
		  />
		))
	      }
	    </View>
            <View>
	      <Text style={styles.sectionHeader}>Outros Pacientes</Text>
	      {
		list.map((l, i) => (
		  <ListItem
		    key={i}
		    title={l.name}
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
