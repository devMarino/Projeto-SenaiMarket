import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthStack from "./AuthStack";
import Main from "./AppTabs";
// instanciando navigator 
const Stack = createNativeStackNavigator()
// criando função das rotas
function Router () {
    return (
        <Stack.Navigator initialRouteName="Auth">
            <Stack.Screen 
            name="Auth" 
            component={AuthStack}
            options={{headerShown: false}}
            /> 
            {/* AuthStack -> LoginScreen */}
            <Stack.Screen 
            name="Main" 
            component={Main}
            options={{headerShown: false}}
            /> 
            {/* AppTabs -> Main*/}
        </Stack.Navigator>

        
    )

}
export default Router;