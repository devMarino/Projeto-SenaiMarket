import { useState } from "react"
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"

export default function Formulario({onAdicionarFormulario}){
    // formulario inicia com inputs vazios
    const formInicial = {
        email: '',
        password: ''
    }

    const [formData, setFormData] = useState(formInicial)

    // validação de campo vazio, .some retorna True se condição estiver certa
    const handleCadastrar = () => {
        const campoVazio = Object.values(formData).some( (value) => value.trim() == ""
        
        )
        // se nada estiver vazio, cadastra e limpa inputs
        if (campoVazio){
            Alert.alert('Vazio', 'Preencha todos os campos')
        } else {
            Alert.alert('Concluído', 'Cadastrado com sucesso!')
            onAdicionarFormulario(formData) // aqui salva as informações
            setFormData(formInicial)
            // e dps limpa os campos
        }
        return
    }
    // inputChanges copia estado anterior e cria novo estado com os novos valores
    const inputChanges = (campo,valor) => {
        setFormData({...formData, [campo]: valor})
    }

    return(
    <View style={styles.container}>
        <View style={styles.subContainer}>
            <View style={styles.formulario}>
                <Text style={styles.login}>Login</Text>
                <View style={styles.inputDiv}>
                <TextInput
                    placeholder="emailExample@gmail.com"
                    onChangeText={(text) => inputChanges('email', text)}
                    value={formData.email}
                    style={styles.input}
                />
                </View>
                <View style={styles.inputDiv}>
                    <TextInput
                    placeholder="digite sua senha"
                    onChangeText={(text) => inputChanges('password', text)}
                    value={formData.password}
                    style={styles.input}
                    />
                </View>
                <View>
                    <TouchableOpacity onPress={handleCadastrar} style={styles.button}>
                        <Text style={styles.textButton}>salvar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e5e4e4',
    },
    subContainer: {
        alignItems: 'center',
        justifyContent: 'center',  

    },
    formulario: {
        backgroundColor: '#FFFFFF',
        width: '90%',
        elevation: 5,
        margin: 10,
        padding: 5,
        borderWidth: 1, borderColor: '#003366', borderStyle: 'solid'
    },
    inputDiv: {
        maxwidth: '100%',
        padding: 8,
        backgroundColor: '#FFFFFF',
        borderWidth: 1, borderColor: '#003366', borderStyle: 'solid',
        borderRadius: 2
    },
    input: {
        width: '100%'
    },
    button: {
        backgroundColor: '#0055ff',
        padding: 12,
        borderRadius:2,
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#00000069',
        borderStyle: 'solid',
        padding:18
    },
    textButton:{
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    },
    login: {
        padding: 5,
        fontSize: 30,
        color: '#0061c2f1',
        fontWeight: 'bold',
        textAlign: 'left',
    }
})