import { View, Text, Image } from 'react-native';
import styles from './styles'

import Saudacoes from './saudacoes'

export default function Props ({mensagem}) {;
    return(
        <View style={styles.container}>
            {/* <Image style={styles.image} source={require('../assets/002-1-react-native.png')} /> */}
            <Text style={styles.paragraph}>
                Exemplo 2 {mensagem}
            </Text>
        </View>
    );
}



