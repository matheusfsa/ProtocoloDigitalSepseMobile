import React, { Component } from 'react';
import {
    Dimensions,
    AppRegistry,
    StyleSheet,
    View,
    Text,
    Button,
    StatusBar
} from 'react-native';
import { Header, Icon} from 'react-native-elements';
import SearchHeader from 'react-native-search-header';

const DEVICE_WIDTH = Dimensions.get(`window`).width;



export default class Pergunta extends Component {
    constructor (props) {
        super(props);
    }
    render () {
        return (
            <View style = { styles.container }>
                <Header
                  leftComponent={{ icon: 'menu', color: '#fff' }}
                  centerComponent={{ text: 'Protocolo digital Sepse', style: { color: '#fff' } }}
                  rightComponent={<Icon name = 'search' color= '#fff' onPress= {() => this.searchHeader.show()} />}
                  containerStyle={{backgroundColor:'#00b5ec'}}
                  />
                <View style = { styles.status }/>
                <SearchHeader
                    ref = {(searchHeader) => {
                        this.searchHeader = searchHeader;
                    }}
                    placeholder = 'Search...'
                    placeholderColor = 'gray'
                    onClear = {() => {
                        console.log(`Clearing input!`);
                    }}
                    onEnteringSearch = {(text) =>{
                      if(text){
                        console.log(text.toString());
                      }
                    }}
                    onGetAutocompletions = {async (text) => {
                        if (text) {
                            const response = await fetch(`http://suggestqueries.google.com/complete/search?client=firefox&q=${text}`, {
                                method: `get`
                            });
                            const data = await response.json();
                            return data[1];
                        } else {
                            return [];
                        }
                    }}
                />
            
            </View>
        );
    }
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: '#f5fcff'
  },
  status: {
      zIndex: 10,
      elevation: 2,
      width: DEVICE_WIDTH,
      height: 21,
      backgroundColor: '#0097a7'
  },
  header: {
      justifyContent: 'center',
      alignItems: 'center',
      width: DEVICE_WIDTH,
      height: 56,
      marginBottom: 6,
      backgroundColor: '#00bcd4'
  },
  label: {
      flexGrow: 1,
      fontSize: 20,
      fontWeight: `600`,
      textAlign: `left`,
      marginVertical: 8,
      paddingVertical: 3,
      color: `#f5fcff`,
      backgroundColor: `transparent`
  },
  button: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 130,
      height: 40,
      marginTop: 40,
      borderRadius: 2,
      backgroundColor: `#ff5722`
  }
});