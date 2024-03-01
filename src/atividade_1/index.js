import { View, Text, Image } from 'react-native';

import Saudacoes from './saudacoes';

import styles from './styles';

import logo from './';

export default function Atividade_1 () {
  return(
    <View style={styles.container}>
        <Image source={logo} style={styles.logo} />
      <Text style={styles.paragraph}>
        Exemplo 2
      </Text>

      <Saudacoes name='Mario!'/>
      <Saudacoes name='Maria!'/>
      <Saudacoes name='Bruna!'/>
      <Saudacoes name='Bruno!'/>
    </View>
  );
}

