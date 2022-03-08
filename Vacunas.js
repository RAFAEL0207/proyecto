import React,{useState,useEffect}  from 'react'
import {StyleSheet, View,Picker,ScrollView,SafeAreaView } from 'react-native';
import {Button,Text,TextInput,Title,FAB} from 'react-native-paper'
import axios from 'axios';

const Vacunas = ({ route,navigation }) => {
  const [datosVacunas,setdatosVacunas]=useState([]);



  const datosVacuna = async () => {
    try {
      const response = await axios.get('https://dry-everglades-66411.herokuapp.com/updsvacuna/');
      console.log(response.data);
      setdatosVacunas(response.data);
    } catch (error) {
      if(axios.isCancel(error)){
        console.log('Data fetching cancelled');
      }else{
      }
    }
  }

  useEffect(() => {
    datosVacuna()
  }, []);

    return (
      <SafeAreaView>
      <ScrollView>
        <View  style={styles.container}>
             <Title>LISTA DE VACUNAS</Title>
             {
               datosVacunas.map((vac,i)=>{
                 return(
                    <View key={i} style={{margin:5,borderWidth:1,width:350, padding:10}}>
                      <Title>{vac.vacuna}</Title>
                      <Text>Fabricante:{vac.fabricante}</Text>
                      <Text>Pais: {vac.pais}</Text>
                      <View style={{flexDirection:"row-reverse",margin:5}}>
                        <Button icon="update" mode="contained" onPress={() => navigation.navigate('ModificarVacuna',{vac})}>Modificar</Button>
                        <Button icon="delete" mode="contained" onPress={() => navigation.navigate('Eliminar',{vac})}>Eliminar</Button>
                      </View>
                    </View>
                 )
               })

             }
             <Button title="Recargar" onPress={() => datosVacuna()}>Recargar</Button> 
             <FAB
                  style={styles.fab}
                  icon="plus"
                  onPress={() => navigation.navigate('Nuevo')}
           />
        </View>        
      </ScrollView>
      </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    imput:{
      margin:10,
    }
  });
export default Vacunas