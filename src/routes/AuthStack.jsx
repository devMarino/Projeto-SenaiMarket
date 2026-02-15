import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./Screens/LogInScreen";
const Stack = createNativeStackNavigator()

function AuthStack(){
    return(
    <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} /> {/* Tela de Login*/}
    </Stack.Navigator>
    )

}

export default AuthStack;