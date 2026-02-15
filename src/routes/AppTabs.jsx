
import HomeStack from "./HomeStack";
import CarrinhoScreen from "./Screens/CarrinhoScreen";
import PerfilScreen from "./Screens/PerfilScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
// tab navigation (main)

function Main ({navigation}){
    return  (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeStack}/>
            <Tab.Screen name="Carrinho" component={ CarrinhoScreen}/> 
            <Tab.Screen name="Perfil" component={PerfilScreen}/> 
        </Tab.Navigator>
    )
}

export default Main;
