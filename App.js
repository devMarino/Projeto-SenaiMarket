import { createStaticNavigation, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './src/routes/Screens/LogInScreen';

// criando objeto da Pilha de Telas
const RootStack = createNativeStackNavigator({
  Screens: {
    Home: {
      screen: HomeScreen,
      option: {title: 'HOME'}
    }
  }


})

const Stack = createStaticNavigation(RootStack)

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen}/>
      <Stack.Screen name="Home" component={Home}/>
    </Stack.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
