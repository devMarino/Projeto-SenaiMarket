import { NavigationContainer } from '@react-navigation/native';
import Router from './src/routes/Router'; // todas as rotas importadas
import { StyleSheet } from 'react-native';


export default function App() {
  return (
    <NavigationContainer>
      <Router/> 
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})