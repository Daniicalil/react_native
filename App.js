import { View, StyleSheet } from 'react-native';

// import Atividade_1 from './src/atividade_1/index';
// import Exemplo_3 from './src/ex_3';
// import Atividade_3 from './atividade_3';
import Exemplo4 from './src/ex_4';

export default function App() {
  return (
    <View style={styles.container}> 
        <Exemplo4 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#b71c1c',
    padding: 18,
  },
});
