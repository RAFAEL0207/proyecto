import React,{useState,useEffect}  from 'react'
import {StyleSheet, View,Picker,ScrollView,SafeAreaView,Platform } from 'react-native';
import {Button,Text,TextInput,Title,FAB} from 'react-native-paper'
import axios from 'axios';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Ionicons} from '@expo/vector-icons';
import moment from 'moment';

const Registro = ({ navigation }) => {

    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
        console.log(date)
      };
    
      const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
      };
    
      const showDatepicker = () => {
        showMode('date');
      };
    
      const showTimepicker = () => {
        showMode('time');
      };

     const [datosVacunado,setDatosVacunado]=useState([]);
     const [nombre, setNombre] = React.useState('');
     const [ci, setCi] = React.useState('');
     const [fecha, setFecha] = React.useState('');
     const [centros, setCentros] = React.useState([]);
     const [centroSelect, setCentroSelect] = React.useState('');
     const [vacunas, setVacunas] = React.useState([]);
     const [vacunaSelect, setVacunaSelect] = React.useState('');
     const [dosis, setDosis] = React.useState('');
     const [foto, setFoto] = React.useState('');

    const datosCentros = async () => {
    try {
      const response = await axios.get('https://dry-everglades-66411.herokuapp.com/updscentro/');
      console.log(response.data);
      setCentros(response.data);
      setCentroSelect(response.data[0]._id)
    } catch (error) {
      if(axios.isCancel(error)){
        console.log('Data fetching cancelled');
      }else{
      }
    }
  }

  const datosVacunas= async () => {
    try {
      const response = await axios.get('https://dry-everglades-66411.herokuapp.com/updsvacuna/');
      console.log(response.data);
      setVacunas(response.data);
      setVacunaSelect(response.data[0]._id)
    } catch (error) {
      if(axios.isCancel(error)){
        console.log('Data fetching cancelled');
      }else{
      }
    }
  }

  const guardarRegistro=async()=>{
    try {
      const reg={
        nombre:nombre,
        ci:ci,
        fecha:date,
        centro:centroSelect,
        vacuna:vacunaSelect,
        dosis:dosis,
        foto:foto
      }
      console.log(reg)
      const response = await axios.post('https://dry-everglades-66411.herokuapp.com/updsvacunacion/',reg);
      console.log(response.data);
      navigation.navigate('Buscar')
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

  useEffect(() => {
    datosVacunas()
  }, []);


    return (
      <SafeAreaView>
        <ScrollView>
      <View  style={styles.container}>
        

        <View>
            <Title>Registro Vacunado</Title>
              <TextInput 
                    label="Nombre"
                    value={nombre}
                    style={styles.imput}
                    onChangeText={nombre => setNombre(nombre)}
              />
              <TextInput
                    label="CI"
                    value={ci}
                    style={styles.imput}
                    onChangeText={ci => setCi(ci)}
              />
                <View >
                <TextInput style={{width:300,marginBottom:10}}>
                        {moment(date).format('DD-MM-YYYY')}
                        
                </TextInput>
                <Button style={{ paddingLeft:280,top:-60}} onPress={showDatepicker} value={date} onChangeText={date=>setDate(date)}><Ionicons name="calendar" size={34} color="black" /></Button>   
                
                </View >
                
                {show && (
                    <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                    />
                )}
                <View>
                    <Title style={{margin:5 ,top:-50}}>Centros</Title>
                    <Picker
                        selectedValue={centroSelect}
                        style={{ height: 50, width: 250 ,top:-40}}
                        onValueChange={(itemValue, itemIndex) => setCentroSelect(itemValue)}
                    >
                        {
                        centros.map((cen,i)=>{
                            return(
                            <Picker.Item key={i} label={cen.nombre} value={cen._id} />
                            )
                        })
                        }
                    </Picker>

                </View>

                <View style={{top:-30}}>
                    <Title style={{margin:5}}>Vacuna</Title>
                    <Picker
                        selectedValue={vacunaSelect}
                        style={{ height: 50, width: 250 }}
                        onValueChange={(itemValue, itemIndex) => setVacunaSelect(itemValue)}
                    >
                        {
                        vacunas.map((vac,i)=>{
                            return(
                            <Picker.Item key={i} label={vac.vacuna} value={vac._id} />
                            )
                        })
                        }
                    </Picker>

                </View>
                
                <View style={{top:-20}}>
                    <Title style={{margin:5}}>Dosis:</Title>
                <Picker
                        selectedValue={dosis}
                        style={{ height: 50, width: 250 }}
                        onValueChange={(itemValue, itemIndex) => setDosis(itemValue)}
                    >
                        <Picker.Item label="1ra Dosis" value="1ra Dosis" />
                        <Picker.Item label="2da Dosis" value="2da Dosis" />
                        <Picker.Item label="3ra Dosis" value="3ra Dosis" />
                    </Picker>
                </View>

              <TextInput
                    label="Foto"
                    value={foto}
                    style={{top:-10}}
                    onChangeText={foto => setFoto(foto)}
              />
              
          </View>
          
          <View>

              <Button mode="contained" style={{marginTop:10}} onPress={() =>guardarRegistro()}>Registrar</Button>

        </View>
      </View>          
      </ScrollView>
      </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        margin:10,
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
    },
    imput:{
      margin:5,
      height:50,
      padding:5
    }
  });
export default Registro