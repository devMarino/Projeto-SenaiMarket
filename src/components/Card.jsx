import { Image, Text, View } from "react-native";

export default function Card( {item}){
    return (
        <View>
            <Image>{item.imagem}</Image>
            <Text>{item.nome}</Text>
            <Text>{item.preco}</Text>
        </View>
    )
}