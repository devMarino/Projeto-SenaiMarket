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
            <View style={styles.inputBox}>
                <Text style={styles.label}>Email:</Text>
                <TextInput
                placeholder="emailExample@gmail.com"
                onChangeText={(text) => inputChanges('email', text)}
                value={formData.email}
                style={styles.input}
                />
            </View>
            <View style={styles.inputBox}>
                <Text style={styles.label}>Senha:</Text>
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
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    inputBox: {
        textAlign: 'center',
        backgroundColor: '#01556f79',
        flexDirection: 'row',
        borderWidth: 1, borderColor: '#000', borderStyle: 'solid',
        margin: 30
    },
    input: {
        width: '100%',
        height: '300'
    },
    button: {
        backgroundColor: '#000000',
        borderWidth: 1,
        borderColor: '#fff',
        borderStyle: 'solid'
    },
    textButton:{
        color: '#fff'
    }

})