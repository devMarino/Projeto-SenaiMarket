import { Button, Text, View } from "react-native";

export default function PerfilScreen({navigation}) {

    const deslogar = () => {
        navigation.replace("Auth")
    }
    return(
        <View>
            <Text>Perfil</Text>

                <Button
                title="Sair"
                onPress={deslogar}
                />
        </View>

    )
}