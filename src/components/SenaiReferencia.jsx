import { StyleSheet, Text, View } from "react-native";

export default function SenaiReferencia(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>FIEC</Text>
            <Text style={styles.text}>SENAI</Text>
            <Text style={styles.text}>SESI</Text>
            <Text style={styles.text}>IEL</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        backgroundColor: '#004cff',
        gap: 10,
        padding: 10
    },
    text: {
        fontSize: 25,
        color: '#fff'
    }
})