import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Atividade_1 from './src/atividade 1/index';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Exemplo 2
      </Text>
      <Atividade_1 />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#90caf9',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
});

// export default function Exemplo () {
//   return(
//       <View style={styles.container}>
//               {/* <Image style={styles.image} source={require('../assets/002-1-react-native.png')} />  */}
//           <Text style={styles.paragraph}>
//               Exemplo 2 
//           </Text> 
//       </View>
//   );
// }
