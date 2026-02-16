import { Button, View } from "react-native";
import Formulario from "../../components/Formulario";
import { StyleSheet } from "react-native";


export default function LoginScreen({navigation}) {
    
    const IdentificarLogin = (dados) => {
        console.log("Usuário logado: ", dados)
        navigation.navigate('Main')
}
        return(
        <View style={styles.container}>
        <Formulario
        onAdicionarFormulario={IdentificarLogin}
        />
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
