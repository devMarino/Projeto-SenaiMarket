import { createNativeStackNavigator } from "@react-navigation/native-stack";
import VitrineScreen from "./Screens/VitrineScreen";
import DetalheScreen from "./Screens/DetalheScreen";


const Stack = createNativeStackNavigator()

function HomeStack(){
    return(
    <Stack.Navigator>
        <Stack.Screen name="Vitrine" 
        component={VitrineScreen}
        options={{headerShown: false}}
        />
        <Stack.Screen name="Detalhe" 
        component={DetalheScreen}
        options={{headerShown: false}}
        />
    </Stack.Navigator>
    )
}

export default HomeStack;