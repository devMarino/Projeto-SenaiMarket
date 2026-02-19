import { Text, View } from "react-native";

export default function DetalheScreen( {route}) {

    const {PRODUTOS} = route.params;
    return(
    <View>
        <Text>Detalhes</Text>
        <Text>{PRODUTOS.nome}</Text>
        <Text>{PRODUTOS.preco}</Text>
    </View>
    )
    

}