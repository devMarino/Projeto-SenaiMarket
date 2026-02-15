import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthStack from "./AuthStack";
import Main from "./AppTabs";

const Stack = createNativeStackNavigator()
// criando função das rotas
function Router () {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Auth" component={AuthStack}/> {/* AuthStack*/}
            <Stack.Screen name="Main" component={Main}/> {/* AppTabs*/}
        </Stack.Navigator>
    )

}
export default Router;