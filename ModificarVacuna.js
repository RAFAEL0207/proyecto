import React,{useState,useEffect}  from 'react'
import {StyleSheet, View,Picker,ScrollView,SafeAreaView } from 'react-native';
import {Button,Text,TextInput,Title,FAB} from 'react-native-paper'
import axios from 'axios';

const ModificarVacuna = ({route, navigation }) => {
  const [id, setId] = React.useState(route.params.vac._id);
  const [vacuna, setVacuna] = React.useState(route.params.vac.vacuna);
  const [fabricante, setFabricante] = React.useState(route.params.vac.fabricante);
  const [pais, setPais] = React.useState(route.params.vac.pais);


  const modificarVacun=async()=>{
    try {
      const vacu={
        _id:id,
        vacuna:vacuna,
        fabricante:fabricante,
        pais:pais
      }
      console.log(vacu)
      const response = await axios.put('https://dry-everglades-66411.herokuapp.com/updsvacuna/'+id,vacu);
      console.log(response.data);
      navigation.navigate('Vacunas')
    } catch (error) {
      if(axios.isCancel(error)){
        console.log('Data fetching cancelled');
      }else{
      }
    }
  }

  useEffect(() => {
  }, []);

    return (

      <SafeAreaView>
      <ScrollView>
    <View  style={styles.container}>
      <View>
          <Title>Modificar Vacuna</Title>
            <TextInput
                  label="Vacuna"
                  value={vacuna}
                  style={styles.imput}
                  onChangeText={vacuna => setVacuna(vacuna)}
            />
            <TextInput
                  label="Fabricante"
                  value={fabricante}
                  style={styles.imput}
                  onChangeText={fabricante => setFabricante(fabricante)}
            />
            <TextInput
                  label="Pais"
                  value={pais}
                  style={styles.imput}
                  onChangeText={pais => setPais(pais)}
            />
        </View>
        <View>
            <Button mode="contained" style={{marginTop:10}} onPress={()=>modificarVacun()}>Modificar Vacuna</Button>

      </View>
    </View>          
    </ScrollView>
    </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
    },
    imput:{
      margin:10,
    }
  });
export default ModificarVacuna