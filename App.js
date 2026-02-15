import { NavigationContainer } from '@react-navigation/native';
import Router from './src/routes/Router'; // todas as rotas importadas


export default function App() {
  return (
    <NavigationContainer>
      <Router/> 
    </NavigationContainer>
  );
}
