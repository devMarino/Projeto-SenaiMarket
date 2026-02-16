import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./Screens/LogInScreen";
const Stack = createNativeStackNavigator()

function AuthStack(){
    // tela de login
    return(
    <Stack.Navigator>
        <Stack.Screen name="Login" 
        component={LoginScreen}
        options={{headerShown: false}}
        />
    </Stack.Navigator>
    )

}

export default AuthStack;