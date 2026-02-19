import { StatusBar, Text, View } from "react-native";
import Formulario from "../../components/Formulario";
import Footer from "../../components/Footer";
import { StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import SenaiReferencia from "../../components/SenaiReferencia";



export default function LoginScreen({navigation}) {
    
    const IdentificarLogin = (dados) => {
        console.log("Usuário logado: ", dados)
        navigation.replace('Main')
}
        return(
            <SafeAreaProvider>
            <SafeAreaView  style={styles.container}>
            <StatusBar/>
                <SenaiReferencia/>
                <View style={styles.conteudo}>
                {/* component formulario */}
                    <Formulario onAdicionarFormulario={IdentificarLogin}/>
                </View>
                <Footer/>
            </SafeAreaView>
        </SafeAreaProvider>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    conteudo: {
        flex: 1,
        justifyContent: 'center',
        
    },
})
