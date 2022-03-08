import React,{useState,useEffect}  from 'react'
import {StyleSheet, View,Picker,ScrollView,SafeAreaView } from 'react-native';
import {Button,Text,TextInput,Title,FAB} from 'react-native-paper'
import axios from 'axios';

const Centros = ({ route,navigation }) => {
  const [datosCentro,setDatosCentro]=useState([]);



  const datosCentros = async () => {
    try {
      const response = await axios.get('https://dry-everglades-66411.herokuapp.com/updscentro/');
      console.log(response.data);
      setDatosCentro(response.data);
    } catch (error) {
      if(axios.isCancel(error)){
        console.log('Data fetching cancelled');
      }else{
      }
    }
  }

  useEffect(() => {
    datosCentros()
  }, []);

    return (
      <SafeAreaView>
      <ScrollView>
        <View  style={styles.container}>
             <Title>CENTRO VACUNAS</Title>
             {
               datosCentro.map((cen,i)=>{
                 return(
                    <View key={i} style={{margin:5,borderWidth:1,width:350, padding:10}}>
                      <Title>{cen.nombre}</Title>
                      <Text>Departamento:{cen.departamento}</Text>
                      <Text>Direccion: {cen.direccion}</Text>
                      <Text>Latitud: {cen.latitud}</Text>
                      <Text>Longitud: {cen.longitud}</Text>
                      <View style={{flexDirection:"row-reverse",margin:5}}>
                        <Button icon="update" mode="contained" onPress={() => navigation.navigate('Modificar',{cen})}>Modificar</Button>
                        <Button icon="delete" mode="contained" onPress={() => navigation.navigate('Eliminar',{cen})}>Eliminar</Button>
                      </View>
                    </View>
                 )
               })

             }
             <Button title="Recargar" onPress={() => datosCentros()}>Recargar</Button> 
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
export default Centros