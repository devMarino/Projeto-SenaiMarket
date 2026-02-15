import { createNativeStackNavigator } from "@react-navigation/native-stack";
import VitrineScreen from "./Screens/VitrineScreen";
import DetalheScreen from "./Screens/DetalheScreen";


const Stack = createNativeStackNavigator()

function HomeStack(){
    return(
    <Stack.Navigator>
        <Stack.Screen name="Vitrine" component={VitrineScreen}/>
        <Stack.Screen name="Detalhe" component={DetalheScreen}/>
    </Stack.Navigator>
    )
}

export default HomeStack;