import React from 'react';
import { Router, Scene , Stack} from 'react-native-router-flux';
import TelaPrincipal from './components/TelaPrincipal';
import Tratamento from './components/Tratamento';
import Avaliacao from './components/Avaliacao';
import Login from './components/Login';
import Recomendacoes from './components/Recomendacoes';
import {
    StyleSheet
  } from 'react-native';
export default props => (
    <Router>
        <Stack key="root">
        
        <Scene key='login' init component={Login} title="Protocolo Digital Sepse" navigationBarStyle={styles.navBar} titleStyle={styles.navText}/>
        <Scene key='telaPrincipal'  component={TelaPrincipal} hideNavBar />
        <Scene key='tratamento' component={Tratamento} title="Tratamento"  navigationBarStyle={styles.navBar} titleStyle={styles.navText}/>
        <Scene key='avaliacao' component={Avaliacao} title="Avaliação"  navigationBarStyle={styles.navBar} titleStyle={styles.navText}/>
        <Scene key='recomendacoes' component={Recomendacoes} title="Recomendacoes"  navigationBarStyle={styles.navBar} titleStyle={styles.navText}/>

        
        
        </Stack>
    </Router>
    
);
const styles = StyleSheet.create({
    navBar: {
        borderWidth: 1.5, 
        borderColor: '#00b5ec', 
        backgroundColor:"#00b5ec",
        
    },
    navText: {
        color: 'white',
    }
  });