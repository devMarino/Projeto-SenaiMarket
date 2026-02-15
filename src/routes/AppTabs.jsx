
import HomeStack from "./HomeStack";
import CarrinhoScreen from "./Screens/CarrinhoScreen";
import PerfilScreen from "./Screens/PerfilScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
// tab navigation (main)

function Main (){
    return  (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeStack}/> {/* telas detalhes,vitrines*/}
            <Tab.Screen name="Carrinho" component={ CarrinhoScreen}/> {/* tela de carrinho*/}
            <Tab.Screen name="Perfil" component={PerfilScreen} /> {/* tela de perfil*/}
        </Tab.Navigator>
    )
}

export default Main;
