import { View, StyleSheet } from 'react-native';

// import Atividade_1 from './src/atividade_1/index';
import Exemplo_3 from './src/ex_3';

export default function App() {
  return (
    <View style={styles.container}> 
        <Exemplo_3 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    padding: 18,
  },
});
