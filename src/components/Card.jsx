import { Image, StyleSheet, Text, View } from "react-native";

export default function Card( {item}){
    return (
        <View style={styles.Card}>
            <Image
            source={{uri: item.imagem}}
            style={styles.imagem}
            />
            <View style={styles.container}>
                <Text style={styles.nome}>{item.nome}</Text>
                <Text>R$ {item.preco.toFixed(2)}</Text>
            </View>
    </View>
    )
}

const styles = StyleSheet.create({
    Card:{
        backgroundColor: '#fbffff34',
        margin: 5,
        padding: 10,
        elevation: 2,
        borderStyle: 'solid',
        minHeight: 120
    },
    imagem: {
        width: '100%',
        height: 120,
        resizeMode: 'contain'
    },
    container: {
        alignItems: 'center',
        padding: 12
    },
    nome:{
        fontWeight: 'bold'
    }
})