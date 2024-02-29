import { View, Text } from 'react-native';
import styles from './styles'

// import logo from './assets/002-1-react-native.png';

export default function Props ({mensagem}) {;
    return(
        <View style={styles.container}>
            {/* <Image source={logo} style={{ width: '100%', height: '15%'}} /> */}
            <Text style={styles.paragraph}>
                Exemplo 2 {mensagem}
            </Text>
        </View>
    );
}

