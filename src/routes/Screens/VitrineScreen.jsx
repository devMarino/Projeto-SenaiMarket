import { FlatList, Pressable, StatusBar, StyleSheet, View } from "react-native";
import PRODUTOS from "../../data/bancoDados";
import Card from "../../components/Card";
import HeaderVitrine from "../../components/HeaderVitrine";
import { SafeAreaView } from "react-native-safe-area-context";
export default function VitrineScreen({navigation}){
    return(
        <SafeAreaView style={styles.container}>
            <StatusBar/>
            <FlatList
            ListHeaderComponent={<HeaderVitrine/>}
            data={PRODUTOS}
            renderItem={( {item} ) => (
                <Pressable
                style={styles.containerCard}
                onPress={ () => {
                    navigation.navigate('Detalhe', {PRODUTOS: item})
                }}
                >
                <Card item={item}/>
                </Pressable>
            )}
            keyExtractor={item => item.id.toString()}
            /> //aqui é o fim do flatlist
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    containerCard: {
        marginTop: 5,
        marginBottom: 5,
        backgroundColor: '#fffffff4'
    },
    container: {
        flex: 1,
        backgroundColor: '#0a0a0a'
    }
})