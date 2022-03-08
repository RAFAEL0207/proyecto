import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Vacunas from './Vacunas'
import Centros from './Centros'
import Buscar from './Buscar'
import Registro from './Registro'
import ModificarVacuna from './ModificarVacuna'

const BuscarStack = createNativeStackNavigator();

function BuscarStackScreen() {
  return (
    <BuscarStack.Navigator>
      <BuscarStack.Screen name="Buscar" component={Buscar} />
      <BuscarStack.Screen name="Registro" component={Registro} />
    </BuscarStack.Navigator>
  );
}

const RegistroStack = createNativeStackNavigator();

function RegistroStackScreen() {
  return (
    <RegistroStack.Navigator>
      <RegistroStack.Screen name="Registro" component={Registro} />
    </RegistroStack.Navigator>
  );
}

const CentrosStack = createNativeStackNavigator();

function CentrosStackScreen() {
  return (
    <CentrosStack.Navigator>
      <CentrosStack.Screen name="Centro" component={Centros} />
    </CentrosStack.Navigator>
  );
}

const VacunasStack = createNativeStackNavigator();

function VacunasStackScreen() {
  return (
    <VacunasStack.Navigator>
      <VacunasStack.Screen name="Vacunas" component={Vacunas} />
      <VacunasStack.Screen name="ModificarVacuna" component={ModificarVacuna} />
    </VacunasStack.Navigator>
  );
}


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Buscar" component={BuscarStackScreen} />
        <Tab.Screen name="Registro" component={RegistroStackScreen} />
        <Tab.Screen name="Centros" component={CentrosStackScreen} />
        <Tab.Screen name="Vacunas" component={VacunasStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
