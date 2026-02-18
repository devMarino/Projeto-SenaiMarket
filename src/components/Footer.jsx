import { Text, StyleSheet, View } from "react-native"

export default function Footer(){
    return(

        <View style={styles.container}>
            <Text style={styles.textContainer}>© 2026 SenaiMarket • Desenvolvido por DevMarino</Text>
        </View>

)
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        bottom: 20,
    },
    textContainer: {
        textAlign: 'center',
        fontSize: 10,
        color: '#777'
    }

})