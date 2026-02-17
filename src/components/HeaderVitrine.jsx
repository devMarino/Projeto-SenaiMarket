import { Image, StyleSheet, Text, View } from "react-native";

export default function HeaderVitrine(){
    return (
    <View style={styles.container}>
        <Image
        source={{uri:"https://i.ibb.co/F4446H0V/Gemini-Generated-Image-g68xmg68xmg68xmg.png"}}
        style={styles.imagem}
        />
        <View style={styles.containerText}>
            <Text style={styles.text}>SENAI MARKET</Text>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        backgroundColor: '#0061c2',
    },
    containerText: {
        padding: 10
    },
    text: {
        fontSize: 45,
        fontWeight: 'bold',
        color: '#ffffff'
    },
    imagem:{
        width: '100%',
        height:120
    }
})