import React,{useState,useEffect} from 'react'
import {StyleSheet, View,ScrollView,SafeAreaView } from 'react-native';
import {Button,Text,TextInput,Title,FAB,Avatar} from 'react-native-paper'
import axios from 'axios';

const Buscar = ({ route,navigation }) => {
    
    const [datosVacunado,setDatosVacunado]=useState([]);
    const [tieneVacuna,setTieneVacuna]=useState(false);
    const [ci, setCi] = React.useState('');


    const buscarCi=async()=>{
      try {
        setDatosVacunado([])
        setTieneVacuna(false);
        const response = await axios.get(`https://dry-everglades-66411.herokuapp.com/updsvacunacion/buscar/${ci}`);
        console.log(response.data);
        const vacun=response.data;
        if(vacun.length>0){
          setDatosVacunado(response.data);
          setTieneVacuna(true);
        }
        else{
          navigation.navigate('Registro')
        }
      } catch (error) {
        if(axios.isCancel(error)){
          console.log('Data fetching cancelled');
        }else{
          navigation.navigate('Registro')
        }
      }
  }
  
  useEffect(() => {
  }, []);


    return (
      <View  style={styles.containerStyle}>

          <View style={styles.container}>
              <Title>Buscar Vacunado</Title>
              <TextInput
                    label="Numero de Carnet de Identidad"
                    value={ci}
                    onChangeText={ci => setCi(ci)}
                  />
              <Button mode="contained" style={{marginTop:10}} onPress={() =>buscarCi()}>Buscar Vacunado</Button>
          </View>
          {tieneVacuna===true?
          <>
          <View>
              <View style={{margin:20,borderWidth:1,width:350, padding:10}}>
              <Avatar.Image size={100} source={{uri:datosVacunado[0].foto}} />
              <Title>Ci:{datosVacunado[0].ci}</Title>
                <Title>Nombre:{datosVacunado[0].nombre}</Title>
                <Title>Fecha:{datosVacunado[0].fecha}</Title>
                <Title>Dosis:{datosVacunado[0].dosis}</Title>
                <Title>Vacunado</Title>
              </View>
          </View>
          </>
          :<></>
          }
          <FAB
                  style={styles.fab}
                  icon="plus"
                  onPress={() => navigation.navigate('Registro')}
           />
      </View>
        
    )
}
const styles = StyleSheet.create({
      containerStyle: {
        flex: 1
      },
    container: {

      padding: 15,
      flexDirection:'column',
      justifyContent: 'center',
      backgroundColor: '#fff',
    },
    scrollViewStyle: {
      flex: 1,
      padding: 15,
      justifyContent: 'center',
    },
    fab: {
      position: 'absolute',
      margin: 16,
      marginTop:20,
      right: 0,
      bottom: 0,
    },
  });
export default Buscar