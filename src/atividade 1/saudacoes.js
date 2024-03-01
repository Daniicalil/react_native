import { View, Text } from "react-native";
import styles from "./styles";

export default function Saudacoes({saudacao}) {
    return(
        <View style={styles.container}>
            <Text>{saudacao}</Text>
        </View>
    )
}
