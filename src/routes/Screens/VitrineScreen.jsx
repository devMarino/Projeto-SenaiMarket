import { FlatList, Pressable, View } from "react-native";
import PRODUTOS from "../../data/bancoDados";
import Card from "../../components/Card";
export default function VitrineScreen({navigation}){
    return(
    <FlatList
    data={PRODUTOS}
    renderItem={( {item} ) => (
        <Pressable
        onPress={ () => {
            navigation.navigate('Detalhes', {PRODUTOS: item})
        }}
        >
        <Card item={item}/>
        </Pressable>
    )}
    keyExtractor={item => item.id.toString()}
    /> //aqui é o fim do flatlist

    )
}