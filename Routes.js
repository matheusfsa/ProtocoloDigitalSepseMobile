import React from 'react';
import { Router, Scene , Stack} from 'react-native-router-flux';
import TelaPrincipal from './components/TelaPrincipal';
import Pergunta from './components/Pergunta';
import Login from './components/Login';
export default props => (
    <Router>
        <Stack key="root">
        <Scene key='login' init component={Login} title="Protocolo Digital Sepse" navigationBarStyle={{borderWidth: 1.5, borderColor: '#d6d7da', backgroundColor:"#00b5ec"}}/>
        <Scene key='telaPrincipal'  component={TelaPrincipal} hideNavBar />
        <Scene key='pergunta' component={Pergunta} title="Pergunta" navigationBarStyle={{borderWidth: 1.5, borderColor: '#d6d7da', backgroundColor:"#00b5ec"}}/>
        
        </Stack>
    </Router>
);