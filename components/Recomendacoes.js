import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

export default class Recomendacoes extends Component {
  

  render() {
    
    
    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.titulo}>
                    COLETA DA HEMOCULTURA{'\n'}
                </Text>
                <Text style={styles.subtitulo}>
                    Instruções para a coleta:{'\n'}
                </Text>
                <Text style={styles.texto}>
                    a)​ Preferencialmente por punção venosa periférica.{'\n'}{'\n'}
                    b) ​A coleta através de cateteres deve ser utilizada apenas para
                    diagnóstico de infecções relacionadas ao dispositivo e devem ser
                    acompanhadas de uma amostra de sangue periférico.{'\n'}{'\n'}
                    c) Os métodos automatizados positiva nas primeiras 48 horas em 70 a
                    80% dos casos.{'\n'}{'\n'}
                    d) Punções arteriais não têm melhor recuperação do microrganismo
                    do que punções periféricas.{'\n'}{'\n'}
                    e) Não é recomendada a troca de agulhas para distribuição da
                    amostra nos frascos específicos.{'\n'}
                </Text>
                <Text style={styles.subtitulo}>
                    Fatores que influenciam no resultado dos exames:{'\n'}
                </Text>
                <Text style={styles.subsubtitulo}> 
                    1 - Volume de sangue coletado por frasco:{'\n'}{'\n'}
                </Text>
                <Text style={styles.texto}>
                    a) Os frascos que possibilitam uma coleta de até 10mL são os mais
                    indicados, totalizando 20mL por punção.{'\n'}{'\n'}
                    b) Coletar o volume máximo permitido para cada frasco{'\n'}
                </Text>  
                <Text style={styles.subsubtitulo}> 
                    2 - Temperatura de conservação:{'\n'}{'\n'}
                </Text>
                <Text style={styles.texto}>
                    a) Os frascos devem ser mantidos em temperatura ambiente até o
                    momento da incubação.{'\n'}{'\n'}
                    b) Não refrigerar a amostra.{'\n'}
                </Text>  
                <Text style={styles.subsubtitulo}> 
                    3 - Coleta asséptica:{'\n'}{'\n'}
                 </Text>
                 <Text style={styles.texto}>
                    a) Utilizar a técnica asséptica a fim de reduzir os riscos de
                    contaminação da amostra.{'\n'}{'\n'}
                    b) Resultado de amostras contaminadas dificulta a interpretação do
                    exame.{'\n'}
                </Text>  
                <Text style={styles.subsubtitulo}> 
                    4 - Momento da coleta:{'\n'}{'\n'}
                 </Text>
                 <Text style={styles.texto}>
                    a) Colher antes da administração de antibióticos.{'\n'}{'\n'}
                    b) Se o paciente já estiver em uso de antibioticoterapia, dar preferência
                    coletar de preferência antes da administração da próxima dose da medicação.{'\n'}{'\n'}
                    c) O pico febril é o momento de maior destruição microbiana. Por isso,
                    coletar preferencialmente no período subfebril, se possível.{'\n'}
                </Text>
                <Text style={styles.subsubtitulo}> 
                    5 - Número de amostras e local:{'\n'}{'\n'}
                 </Text>
                 <Text style={styles.texto}>
                    a) É recomendada a coleta de pelo menos duas e não mais que quatro
                    amostras de sangue visando aumentar a positividade e facilitar a
                    interpretação dos resultados.{'\n'}{'\n'}
                    b) Em caso de sepse, febre a esclarecer, pneumonia, meningite ou em
                    pacientes neutropênico, o ideal é coletar 2 a 3 amostras em dois a
                    três locais diferentes.{'\n'}{'\n'}
                    c) Não se recomenda a coleta de amostra única devido à dificuldade na
                    interpretação do resultado caso haja contaminação.{'\n'}{'\n'}
                    d) Coletar as amostras de preferência em membros superiores. Caso o
                    local escolhido da coleta seja outro, reforçar antissepsia.{'\n'}    
                </Text>
                <Text style={styles.subtitulo}>
                    Material para realizar a coleta.{'\n'}
                </Text>
                <Text style={styles.texto}>
                    a) Garrote.{'\n'}{'\n'}
                    b) Algodão ou gaze.{'\n'}{'\n'}
                    c) Antisséptico (álcool a 70%, clorexidine solução alcoólica, ou povidine
                    alcoólico).{'\n'}{'\n'}
                    d) Frasco de hemocultura.{'\n'}{'\n'}
                    e) Agulha e seringa.{'\n'}{'\n'}
                    f) Luvas de procedimento e estéreis.{'\n'}  
                </Text>
                <Text style={styles.subtitulo}>
                    Técnica para coleta{'\n'}
                </Text>
                <Text style={styles.texto}>
                    a) Higienizar as mãos com água e sabão..{'\n'}{'\n'}
                    b) Preparar o material, anotar na etiqueta nome do paciente, leito, data,
                    hora e sítio anatômico da coleta e, posteriormente, colar a etiqueta
                    no frasco, tendo o cuidado de não a colocar sobre o código de
                    barras.{'\n'}{'\n'}
                    c) Limpar a tampa de borracha com algodão embebido em álcool a
                    70% e mantê-lo sobre o frasco até o momento da punção.{'\n'}{'\n'}
                    d) Deixar secar a tampa.{'\n'}{'\n'}
                    e) Escolher o melhor sítio da punção para a coleta de sangue,
                    garrotear o membro escolhido, palpar as veias do paciente para
                    escolher a mais calibrosa e, por fim, soltar o garrote.{'\n'}{'\n'}
                    f)Fazer a antissepsia, friccionando a pele em círculos semiabertos a
                    partir do ponto a ser puncionado, secar por 30 segundos e aplicar
                    outra vez o antisséptico com novo algodão ou gaze. Esperar mais 30
                    segundos e repetir o procedimento.{'\n'}{'\n'}  
                    g) ​ Calçar luvas estéreis.{'\n'}{'\n'}
                    h) Colocar novamente o garrote e puncionar a veia com agulha e
                    seringa ou dispositivo para coleta a vácuo, sem tocar diretamente no
                    local da punção.{'\n'}{'\n'}
                    i)​ Coletar 10mL de sangue.{'\n'}{'\n'}
                    j) Ao retirar a agulha, fazer compressão local com algodão seco, sem
                    flexionar o membro.{'\n'}{'\n'}
                    k) Se a coleta foi feita por dispositivo fechado a vácuo, inocular
                    primeiro no frasco AERÓBIO e manter o frasco em pé durante toda a
                    coleta para evitar o refluxo para a veia do paciente. Se foi feita com
                    agulha, inocular primeiro no frasco ANAERÓBIO e não é preciso
                    fazer troca da agulha.{'\n'}{'\n'}
                    l) Dispensar o material de punção utilizado para a coleta na caixa de
                    perfurocortantes.{'\n'}{'\n'}
                    m)​ Higienizar as mãos.
                </Text>
                <Text style={styles.titulo}>
                    COLETA DA UROCULTURA{'\n'}
                </Text>
                <Text style={styles.subtitulo}>
                    Coleta da urina para mulheres{'\n'}
                </Text>
                <Text style={styles.subsubtitulo}> 
                    1 - Instruções para a coleta:{'\n'}{'\n'}
                 </Text>
                 <Text style={styles.texto}>
                    a) Para melhor resultado, a coleta deve ser supervisionada e realizada
                    por profissionais treinados.{'\n'}{'\n'}
                    b) No caso de objeção da paciente, orientar claramente os passos do
                    procedimento e alertar que, caso mal coletada, o resultado pode
                    dificultar a interpretação pelo médico e possivelmente será
                    necessário fazer nova coleta.{'\n'}
                </Text>
                <Text style={styles.subsubtitulo}> 
                    2 - Instruções para a coleta:{'\n'}{'\n'}
                 </Text>
                 <Text style={styles.texto}>
                    a) Gaze embebida em sabão.{'\n'}{'\n'}
                    b) Gaze embebida em água estéril.{'\n'}{'\n'}
                    c) Gaze seca.{'\n'}{'\n'}
                    d) Tampão de gaze (em caso de corrimento vaginal ou menstruação).{'\n'}{'\n'}
                    e) Frasco estéril para coleta da urina.{'\n'}{'\n'}
                    f) Luvas de procedimento.{'\n'}  
                </Text>
                <Text style={styles.subsubtitulo}> 
                    3 - Procedimentos para a coleta em maca:{'\n'}{'\n'}
                 </Text>
                 <Text style={styles.texto}>
                    a) Higienizar as mãos com água e sabão.{'\n'}{'\n'}
                    b) Solicitar que a paciente retire toda a roupa da cintura para baixo.{'\n'}{'\n'}
                    c) Solicitar que a paciente deite na maca e cobri-la com lençol ou
                    avental.{'\n'}{'\n'}
                    d) Solicitar que a paciente afaste as pernas tanto quanto possível.{'\n'}{'\n'}
                    e) Calças as luvas.{'\n'}{'\n'}
                    f) Afastar os grandes lábios com uma das mãos e continuar assim
                    enquanto estiver realizando a higiene e coleta.{'\n'}{'\n'}
                    g) No caso de corrimento vaginal ou menstruação, remover a secreção
                    visível com gaze e colocar um tampão com gaze durante a coleta.{'\n'}{'\n'}
                    h)​ Lavar com gaze.{'\n'}        
                </Text>
                <Text style={styles.subtitulo}>
                    Coleta da urina para homens{'\n'}
                </Text>
                <Text style={styles.texto}>
                    a) Higienizar as mãos com água e sabão.{'\n'}{'\n'}
                    b) Calças as luvas.{'\n'}{'\n'}
                    c) Fazer a higienização cuidadosa da genitália externa, com água e
                    sabão e enxugar.{'\n'}{'\n'}
                    d) Colher o jato médio, preferencialmente da primeira micção do dia, ou
                    então com uma retenção urinária de 2 a 3 horas.{'\n'}       
                </Text>
                <Text style={styles.subtitulo}>
                    Coleta de urina em pacientes com sistema de drenagem fechada{'\n'}
                </Text>
                <Text style={styles.texto}>
                    a) ​Higienizar as mãos com água e sabão.{'\n'}{'\n'}
                    b) Calças as luvas.{'\n'}{'\n'}
                    c) Pode-se colher a urina puncionando-se o cateter na proximidade da
                    junção com o tubo de drenagem (não se deve colher a urina da
                    bolsa coletora).{'\n'}{'\n'}
                    d) ​Clampear o cateter.{'\n'}{'\n'} 
                    e) ​Fazer antissepsia com álcool 70% do local.{'\n'}{'\n'}
                    f)​ Colher com agulha e seringa 5 a 10 mL de urina.{'\n'}    
                </Text>            
            </ScrollView>
        </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  titulo: {
    borderTopColor: '#00b5ec',
    borderTopWidth: 1,
    borderBottomColor: '#00b5ec',
    borderBottomWidth: 1,
    height:35,
    fontWeight:'bold',
    fontSize:20,
    color:'black'
  },
  subtitulo: {
    fontWeight:'bold',
    fontSize:18,
    height:38,
    color:'black',
    marginLeft:3
  },
  subsubtitulo:{
    fontSize:16,
    color:'black',
    height:30,
    marginLeft:5
    
  },
  texto:{
    fontSize:16,
    color:'black',
    marginLeft:14
  },
  subtexto:{
    borderBottomColor: '#00b5ec',
    borderBottomWidth: 1,
    fontSize:16,
    color:'black',
    marginLeft:10
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

 