import { NavigationContainer } from '@react-navigation/native';
import Router from './src/routes/Router'; // todas as rotas importadas


export default function App() {
  return (
    <NavigationContainer>
      {/* instâncio dentro do NavigationContainer */}
      <Router/> 
    </NavigationContainer>
  );
}
